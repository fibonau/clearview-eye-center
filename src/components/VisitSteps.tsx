import { EyeIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: 1,
    title: "Book your appointment",
    description:
      "Reserve online in seconds, or message us. Walk-ins are welcome too.",
    href: "#appointment",
    icon: "calendar",
  },
  {
    number: 2,
    title: "Comprehensive eye exam",
    description:
      "Our optometrist checks your vision and eye health using modern equipment.",
    icon: "eye",
  },
  {
    number: 3,
    title: "Choose your eyewear",
    description:
      "Browse our frames and pick lenses suited to your lifestyle and budget.",
    icon: "glasses",
  },
  {
    number: 4,
    title: "Pick up & follow-up",
    description:
      "Collect your eyewear, and we follow up to make sure everything feels perfect.",
    icon: "heart",
  },
] as const;

function StepIcon({ type }: { type: string }) {
  const cls = "h-5 w-5 text-espresso";
  switch (type) {
    case "calendar":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      );
    case "eye":
      return <EyeIcon className={cls} />;
    case "glasses":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      );
  }
}

export default function VisitSteps() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-28" aria-label="How your visit works">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Your Visit"
            title="How your visit works"
            subtitle="Simple, unhurried, and easy from start to finish."
          />
        </ScrollReveal>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden border-t border-dashed border-taupe/35 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-12 sm:gap-14 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <li className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-sm shadow-espresso/5">
                    <StepIcon type={step.icon} />
                    <span className="sr-only">Step {step.number}</span>
                  </div>

                  <div className="mt-6">
                    {"href" in step && step.href ? (
                      <a
                        href={step.href}
                        className="font-heading text-xl font-medium text-espresso transition-colors hover:text-accent-dark"
                      >
                        {step.title}
                      </a>
                    ) : (
                      <h3 className="font-heading text-xl font-medium text-espresso">
                        {step.title}
                      </h3>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
