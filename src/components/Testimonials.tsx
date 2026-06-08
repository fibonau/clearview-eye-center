import { TESTIMONIALS } from "@/lib/constants";
import { StarIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our patients say"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((review, i) => (
            <ScrollReveal key={review.name} delay={i as 0 | 1 | 2}>
              <blockquote className="flex h-full flex-col rounded-sm border border-line bg-cream-deep p-8">
                <span
                  aria-hidden="true"
                  className="font-heading text-6xl leading-none text-accent/60"
                >
                  &ldquo;
                </span>
                <div
                  className="-mt-2 flex gap-1 text-accent-dark"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <StarIcon key={idx} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                  {review.text}
                </p>
                <footer className="mt-6 border-t border-line pt-5">
                  <cite className="font-heading text-lg font-medium not-italic text-espresso">
                    {review.name}
                  </cite>
                  <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.18em] text-taupe">
                    Cebu City
                  </p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
