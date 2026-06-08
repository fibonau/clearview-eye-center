import Image from "next/image";
import { IMAGES } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { value: "15+", label: "Years serving Cebu" },
  { value: "12k+", label: "Patients cared for" },
  { value: "98%", label: "Patient satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-deep py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Layered-rectangle photo motif */}
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-md px-6 py-6 lg:max-w-none lg:px-8 lg:py-8">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[78%] w-[62%] rounded-sm bg-espresso"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-[68%] w-[55%] rounded-sm bg-taupe"
              />
              <div className="relative overflow-hidden rounded-sm border-[6px] border-cream shadow-2xl shadow-espresso/20">
                <Image
                  src={IMAGES.about}
                  alt="Patient receiving an eye exam at ClearView Eye Center"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent-dark">
                About Us
              </p>
              <span
                aria-hidden="true"
                className="mt-4 block h-px w-12 bg-accent"
              />
              <h2 className="mt-5 font-heading text-4xl font-medium leading-[1.1] tracking-tight text-espresso sm:text-5xl">
                Why families choose ClearView
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                At ClearView Eye Center, we believe great eye care starts with
                listening. Our team takes time to understand your vision needs,
                explain every finding in plain language, and recommend solutions
                that fit your lifestyle — not just your prescription.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Located conveniently at Ayala Center Cebu, we combine advanced
                diagnostic technology with a warm, unhurried approach. From your
                first visit to your follow-up, you&apos;ll feel cared for every
                step of the way.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-4xl font-semibold text-accent-dark sm:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase leading-snug tracking-[0.12em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
