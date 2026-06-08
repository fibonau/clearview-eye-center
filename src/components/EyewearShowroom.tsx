"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import {
  EYEWEAR_FILTERS,
  type EyewearFilter,
  type EyewearFrame,
  filterFrames,
  formatPeso,
} from "@/lib/eyewear";
import SectionHeading from "./SectionHeading";

const VirtualTryOn = dynamic(() => import("./VirtualTryOn"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-espresso">
      <p className="text-sm text-cream/80">Loading try-on&hellip;</p>
    </div>
  ),
});

export default function EyewearShowroom() {
  const [filter, setFilter] = useState<EyewearFilter>("all");
  const [tryOnFrame, setTryOnFrame] = useState<EyewearFrame | null>(null);

  const frames = filterFrames(filter);

  return (
    <>
      <section className="bg-cream pb-20 pt-28 sm:pb-28 sm:pt-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Eyewear Showroom"
            title="Frames curated for Cebu"
            subtitle="Tap any frame to open your camera and see how it looks on you. Prices shown are frame-only."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {EYEWEAR_FILTERS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`rounded-full px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition-all ${
                  filter === tab.id
                    ? "bg-espresso text-cream"
                    : "border border-line bg-cream text-muted hover:border-taupe hover:text-espresso"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {frames.map((frame) => (
              <button
                key={frame.id}
                type="button"
                onClick={() => setTryOnFrame(frame)}
                className="group cursor-pointer text-left transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden rounded-sm border border-line bg-cream-deep transition-shadow group-hover:shadow-lg group-hover:shadow-espresso/5">
                  <Image
                    src={frame.image}
                    alt={frame.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent px-3 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-cream opacity-0 transition-opacity group-hover:opacity-100">
                    Try On
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-medium text-espresso">
                  {frame.name}
                </h3>
                <p className="mt-1 text-xs text-muted">{frame.style}</p>
                <p className="mt-2 text-sm font-medium tracking-wide text-accent-dark">
                  {formatPeso(frame.price)}
                </p>
              </button>
            ))}
          </div>

          {frames.length === 0 && (
            <p className="mt-16 text-center text-sm text-muted">
              No frames in this category yet. Please check back soon.
            </p>
          )}
        </div>
      </section>

      {tryOnFrame && (
        <VirtualTryOn
          frame={tryOnFrame}
          onClose={() => setTryOnFrame(null)}
          onSelectFrame={setTryOnFrame}
        />
      )}
    </>
  );
}
