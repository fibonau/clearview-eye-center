"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  EYEWEAR_FRAMES,
  formatPeso,
  type EyewearFrame,
} from "@/lib/eyewear";
import GlassesOverlay from "./GlassesOverlay";

type VirtualTryOnProps = {
  frame: EyewearFrame;
  onClose: () => void;
  onSelectFrame: (frame: EyewearFrame) => void;
};

type OverlayState = {
  x: number;
  y: number;
  width: number;
  angle: number;
  visible: boolean;
};

function scaleFactorForFrame(frame: EyewearFrame) {
  if (frame.categories.includes("kids")) return 0.95;
  if (frame.tryOn.shape === "oversized") return 1.15;
  if (frame.tryOn.shape === "rimless") return 0.88;
  return 1;
}

function computeOverlay(
  containerWidth: number,
  containerHeight: number,
  frame: EyewearFrame,
  sizeAdjust: number,
  yAdjust: number,
): OverlayState {
  const baseWidth =
    containerWidth * 0.62 * scaleFactorForFrame(frame) * sizeAdjust;
  return {
    x: containerWidth / 2,
    y: containerHeight * (0.42 + yAdjust),
    width: baseWidth,
    angle: 0,
    visible: containerWidth > 0 && containerHeight > 0,
  };
}

function waitForVideoReady(video: HTMLVideoElement) {
  return new Promise<void>((resolve) => {
    if (video.readyState >= 2 && video.videoWidth > 0) {
      resolve();
      return;
    }
    const onReady = () => {
      if (video.videoWidth > 0) {
        video.removeEventListener("loadeddata", onReady);
        resolve();
      }
    };
    video.addEventListener("loadeddata", onReady);
  });
}

export default function VirtualTryOn({
  frame,
  onClose,
  onSelectFrame,
}: VirtualTryOnProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(frame);
  frameRef.current = frame;

  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [sizeAdjust, setSizeAdjust] = useState(1);
  const [yAdjust, setYAdjust] = useState(0);
  const [overlay, setOverlay] = useState<OverlayState>({
    x: 0,
    y: 0,
    width: 0,
    angle: 0,
    visible: false,
  });
  const [showDetails, setShowDetails] = useState(false);

  const refreshOverlay = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();
    setOverlay(
      computeOverlay(width, height, frameRef.current, sizeAdjust, yAdjust),
    );
  }, [sizeAdjust, yAdjust]);

  const stopCamera = useCallback(() => {
    const video = videoRef.current;
    if (video?.srcObject) {
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    }
  }, []);

  useEffect(() => {
    refreshOverlay();
  }, [frame, sizeAdjust, yAdjust, refreshOverlay]);

  useEffect(() => {
    let cancelled = false;

    async function start() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        const video = videoRef.current;
        if (!video) return;

        video.srcObject = stream;
        await video.play();
        await waitForVideoReady(video);

        if (cancelled) return;

        setStatus("ready");
        refreshOverlay();
      } catch (err) {
        if (cancelled) return;
        const message =
          err instanceof DOMException && err.name === "NotAllowedError"
            ? "Camera access was denied. Allow camera permission to try on frames."
            : "Could not start the camera. Please try again on a device with a front camera.";
        setErrorMessage(message);
        setStatus("error");
      }
    }

    start();

    return () => {
      cancelled = true;
      stopCamera();
    };
  }, [stopCamera, refreshOverlay]);

  useEffect(() => {
    const onResize = () => refreshOverlay();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [refreshOverlay]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[110] flex flex-col bg-espresso">
      <div className="flex items-center justify-between border-b border-cream/10 px-4 py-3 sm:px-6">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Virtual Try-On
          </p>
          <h2 className="font-heading text-xl font-medium text-cream sm:text-2xl">
            {frame.name}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            className="rounded-full border border-cream/20 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-accent hover:text-accent"
          >
            {showDetails ? "Hide Info" : "Frame Info"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
            aria-label="Close try-on"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center bg-black p-4">
          {status === "loading" && (
            <p className="absolute z-10 text-sm text-cream/80">
              Starting camera&hellip;
            </p>
          )}

          {status === "error" && (
            <div className="max-w-sm px-6 text-center">
              <p className="text-sm leading-relaxed text-cream/90">
                {errorMessage}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-espresso"
              >
                Go Back
              </button>
            </div>
          )}

          {status !== "error" && (
            <>
              <div
                ref={containerRef}
                className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-sm bg-black shadow-2xl sm:aspect-[4/5]"
              >
                <video
                  ref={videoRef}
                  playsInline
                  muted
                  className="h-full w-full scale-x-[-1] object-cover"
                />
                {overlay.visible && (
                  <div
                    className="pointer-events-none absolute left-0 top-0 origin-center"
                    style={{
                      transform: `translate(${overlay.x}px, ${overlay.y}px) translate(-50%, -50%) rotate(${overlay.angle}deg)`,
                    }}
                  >
                    <GlassesOverlay style={frame.tryOn} width={overlay.width} />
                  </div>
                )}
              </div>

              {status === "ready" && (
                <div className="mt-4 w-full max-w-lg space-y-3 px-1">
                  <p className="text-center text-[0.6rem] uppercase tracking-[0.16em] text-cream/50">
                    Use the sliders until the frames sit on your eyes
                  </p>
                  <label className="flex items-center gap-3 text-xs text-cream/80">
                    <span className="w-12 shrink-0">Size</span>
                    <input
                      type="range"
                      min="0.75"
                      max="1.35"
                      step="0.01"
                      value={sizeAdjust}
                      onChange={(e) => setSizeAdjust(Number(e.target.value))}
                      className="w-full accent-accent"
                    />
                  </label>
                  <label className="flex items-center gap-3 text-xs text-cream/80">
                    <span className="w-12 shrink-0">Height</span>
                    <input
                      type="range"
                      min="-0.12"
                      max="0.12"
                      step="0.01"
                      value={yAdjust}
                      onChange={(e) => setYAdjust(Number(e.target.value))}
                      className="w-full accent-accent"
                    />
                  </label>
                </div>
              )}
            </>
          )}
        </div>

        {showDetails && (
          <aside className="border-t border-cream/10 bg-espresso-soft p-5 lg:w-80 lg:border-l lg:border-t-0">
            <p className="text-xs text-cream/60">{frame.style}</p>
            <p className="mt-2 font-heading text-2xl text-cream">
              {formatPeso(frame.price)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              {frame.description}
            </p>
            <Link
              href="/#appointment"
              onClick={onClose}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-all hover:bg-accent-dark"
            >
              Book Fitting
            </Link>
          </aside>
        )}
      </div>

      <div className="border-t border-cream/10 bg-espresso-soft px-4 py-3 sm:px-6">
        <p className="mb-2 text-center text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/50">
          Tap a frame to switch
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {EYEWEAR_FRAMES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectFrame(item)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border-2 transition-all ${
                item.id === frame.id
                  ? "border-accent ring-2 ring-accent/40"
                  : "border-cream/20 opacity-70 hover:opacity-100"
              }`}
              aria-label={`Try on ${item.name}`}
              aria-pressed={item.id === frame.id}
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
