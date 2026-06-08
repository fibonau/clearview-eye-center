import { TRUST_POINTS } from "@/lib/constants";
import { CardIcon, ClockIcon, EyeIcon, ShieldIcon } from "./Icons";

const iconMap = {
  shield: ShieldIcon,
  card: CardIcon,
  clock: ClockIcon,
  eye: EyeIcon,
} as const;

export default function TrustStrip() {
  return (
    <section
      className="border-b border-line bg-cream-deep"
      aria-label="Trust highlights"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 sm:grid-cols-4 sm:gap-y-0 sm:px-8 lg:px-10">
        {TRUST_POINTS.map((point, i) => {
          const Icon = iconMap[point.icon];
          return (
            <div
              key={point.label}
              className={`flex flex-col items-center gap-3 px-4 text-center sm:px-6 ${
                i !== 0 ? "sm:border-l sm:border-line" : ""
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-taupe/40 text-accent-dark">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[0.72rem] font-medium uppercase leading-snug tracking-[0.18em] text-espresso">
                {point.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
