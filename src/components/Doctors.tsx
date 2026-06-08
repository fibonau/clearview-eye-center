import Image from "next/image";
import { DOCTORS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Doctors() {
  return (
    <section id="doctors" className="bg-espresso py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            light
            eyebrow="Our Doctors"
            title="Meet your care team"
            subtitle="Licensed optometrists dedicated to protecting and improving your vision with expertise and genuine compassion."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
          {DOCTORS.map((doctor, i) => (
            <ScrollReveal key={doctor.name} delay={i as 0 | 1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-cream/10 bg-espresso-soft transition-colors hover:border-accent/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}, ${doctor.credentials}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-medium text-cream">
                    {doctor.name}
                  </h3>
                  <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
                    {doctor.credentials}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px w-10 bg-cream/20"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-cream/65">
                    {doctor.specialty}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
