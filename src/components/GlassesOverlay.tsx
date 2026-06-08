import type { TryOnStyle } from "@/lib/eyewear";

type GlassesOverlayProps = {
  style: TryOnStyle;
  width: number;
  className?: string;
};

/** SVG glasses shapes rendered as an overlay matched to each frame style. */
export default function GlassesOverlay({
  style,
  width,
  className,
}: GlassesOverlayProps) {
  const { shape, frameColor, lensColor } = style;
  const height = width * 0.38;
  const lensFill = lensColor ?? "rgba(200,220,240,0.15)";
  const stroke = frameColor;

  return (
    <svg
      viewBox="0 0 200 76"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
    >
      {shape === "round" && (
        <>
          <ellipse cx="58" cy="40" rx="34" ry="30" fill={lensFill} stroke={stroke} strokeWidth="4" />
          <ellipse cx="142" cy="40" rx="34" ry="30" fill={lensFill} stroke={stroke} strokeWidth="4" />
          <path d="M92 40 H108" stroke={stroke} strokeWidth="3" fill="none" />
          <path d="M24 38 C10 36 4 30 2 24" stroke={stroke} strokeWidth="3" fill="none" />
          <path d="M176 38 C190 36 196 30 198 24" stroke={stroke} strokeWidth="3" fill="none" />
        </>
      )}

      {shape === "rectangle" && (
        <>
          <rect x="22" y="18" width="68" height="44" rx="4" fill={lensFill} stroke={stroke} strokeWidth="3.5" />
          <rect x="110" y="18" width="68" height="44" rx="4" fill={lensFill} stroke={stroke} strokeWidth="3.5" />
          <path d="M90 40 H110" stroke={stroke} strokeWidth="2.5" fill="none" />
          <path d="M2 36 L22 36" stroke={stroke} strokeWidth="2.5" fill="none" />
          <path d="M198 36 L178 36" stroke={stroke} strokeWidth="2.5" fill="none" />
        </>
      )}

      {shape === "square" && (
        <>
          <rect x="20" y="16" width="72" height="48" rx="2" fill={lensFill} stroke={stroke} strokeWidth="4" />
          <rect x="108" y="16" width="72" height="48" rx="2" fill={lensFill} stroke={stroke} strokeWidth="4" />
          <path d="M92 40 H108" stroke={stroke} strokeWidth="3" fill="none" />
          <path d="M0 38 L20 38" stroke={stroke} strokeWidth="3" fill="none" />
          <path d="M200 38 L180 38" stroke={stroke} strokeWidth="3" fill="none" />
        </>
      )}

      {shape === "aviator" && (
        <>
          <path d="M24 28 C34 10 82 10 92 28 C82 58 34 58 24 28 Z" fill={lensFill} stroke={stroke} strokeWidth="3" />
          <path d="M108 28 C118 10 166 10 176 28 C166 58 118 58 108 28 Z" fill={lensFill} stroke={stroke} strokeWidth="3" />
          <path d="M92 32 C100 22 100 22 108 32" stroke={stroke} strokeWidth="2.5" fill="none" />
          <path d="M10 26 L24 28" stroke={stroke} strokeWidth="2.5" fill="none" />
          <path d="M190 26 L176 28" stroke={stroke} strokeWidth="2.5" fill="none" />
        </>
      )}

      {shape === "pilot" && (
        <>
          <path d="M26 30 C36 14 80 14 90 30 C80 54 36 54 26 30 Z" fill={lensFill} stroke={stroke} strokeWidth="2.5" />
          <path d="M110 30 C120 14 164 14 174 30 C164 54 120 54 110 30 Z" fill={lensFill} stroke={stroke} strokeWidth="2.5" />
          <path d="M90 30 H110" stroke={stroke} strokeWidth="2" fill="none" />
          <line x1="6" y1="28" x2="26" y2="30" stroke={stroke} strokeWidth="2" />
          <line x1="194" y1="28" x2="174" y2="30" stroke={stroke} strokeWidth="2" />
          <line x1="100" y1="8" x2="100" y2="22" stroke={stroke} strokeWidth="2" />
        </>
      )}

      {shape === "wayfarer" && (
        <>
          <path d="M18 22 L86 18 L90 56 L22 58 Z" fill={lensFill} stroke={stroke} strokeWidth="3.5" />
          <path d="M110 18 L178 22 L178 58 L110 56 Z" fill={lensFill} stroke={stroke} strokeWidth="3.5" />
          <path d="M90 36 H110" stroke={stroke} strokeWidth="3" fill="none" />
          <path d="M0 34 L18 32" stroke={stroke} strokeWidth="3" fill="none" />
          <path d="M200 34 L182 32" stroke={stroke} strokeWidth="3" fill="none" />
        </>
      )}

      {shape === "cat-eye" && (
        <>
          <path d="M20 42 C18 24 40 14 58 18 C72 22 84 34 90 42 C70 52 36 54 20 42 Z" fill={lensFill} stroke={stroke} strokeWidth="3.5" />
          <path d="M110 42 C112 24 134 14 152 18 C166 22 178 34 184 42 C164 52 130 54 110 42 Z" fill={lensFill} stroke={stroke} strokeWidth="3.5" />
          <path d="M90 38 H110" stroke={stroke} strokeWidth="2.5" fill="none" />
          <path d="M2 36 L20 38" stroke={stroke} strokeWidth="2.5" fill="none" />
          <path d="M198 36 L180 38" stroke={stroke} strokeWidth="2.5" fill="none" />
        </>
      )}

      {shape === "rimless" && (
        <>
          <ellipse cx="58" cy="40" rx="30" ry="26" fill={lensFill} stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
          <ellipse cx="142" cy="40" rx="30" ry="26" fill={lensFill} stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M88 40 H112" stroke={stroke} strokeWidth="1.5" fill="none" />
          <path d="M28 38 L6 32" stroke={stroke} strokeWidth="1.5" fill="none" />
          <path d="M172 38 L194 32" stroke={stroke} strokeWidth="1.5" fill="none" />
          <circle cx="58" cy="16" r="2" fill={stroke} />
          <circle cx="142" cy="16" r="2" fill={stroke} />
        </>
      )}

      {shape === "oversized" && (
        <>
          <ellipse cx="56" cy="40" rx="40" ry="34" fill={lensFill} stroke={stroke} strokeWidth="5" />
          <ellipse cx="144" cy="40" rx="40" ry="34" fill={lensFill} stroke={stroke} strokeWidth="5" />
          <path d="M96 40 H104" stroke={stroke} strokeWidth="4" fill="none" />
          <path d="M16 36 L4 30" stroke={stroke} strokeWidth="4" fill="none" />
          <path d="M184 36 L196 30" stroke={stroke} strokeWidth="4" fill="none" />
        </>
      )}

      {shape === "kids-round" && (
        <>
          <ellipse cx="60" cy="42" rx="30" ry="28" fill={lensFill} stroke={stroke} strokeWidth="5" />
          <ellipse cx="140" cy="42" rx="30" ry="28" fill={lensFill} stroke={stroke} strokeWidth="5" />
          <path d="M90 42 H110" stroke={stroke} strokeWidth="4" fill="none" />
          <path d="M30 40 L14 36" stroke={stroke} strokeWidth="4" fill="none" />
          <path d="M170 40 L186 36" stroke={stroke} strokeWidth="4" fill="none" />
        </>
      )}

      {shape === "kids-sport" && (
        <>
          <path d="M22 30 C30 16 86 16 94 30 C86 56 30 56 22 30 Z" fill={lensFill} stroke={stroke} strokeWidth="4" />
          <path d="M106 30 C114 16 170 16 178 30 C170 56 114 56 106 30 Z" fill={lensFill} stroke={stroke} strokeWidth="4" />
          <path d="M94 36 H106" stroke={stroke} strokeWidth="3" fill="none" />
          <path d="M8 34 L22 32" stroke={stroke} strokeWidth="3.5" fill="none" />
          <path d="M192 34 L178 32" stroke={stroke} strokeWidth="3.5" fill="none" />
        </>
      )}
    </svg>
  );
}
