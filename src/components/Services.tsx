"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import Modal from "./Modal";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

type Service = (typeof SERVICES)[number];

function ServiceCardContent({ service }: { service: Service }) {
  return (
    <>
      <div className="relative aspect-[5/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="px-5 py-5">
        <h3 className="font-heading text-xl font-medium text-espresso">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
      </div>
    </>
  );
}

const cardClassName =
  "group flex w-full cursor-pointer flex-col overflow-hidden rounded-sm border border-line bg-cream text-left transition-all duration-300 hover:-translate-y-1 hover:border-taupe/50 hover:shadow-lg hover:shadow-espresso/5";

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Complete eye care, under one roof"
              subtitle="Tap a treatment to learn more, or browse our eyewear collection."
            />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/eyewear"
                prefetch
                className="inline-flex items-center gap-3 rounded-full border border-taupe/40 bg-cream-deep/50 px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-espresso transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                Browse Eyewear Showroom
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={(i % 3) as 0 | 1 | 2}>
                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  className={cardClassName}
                >
                  <ServiceCardContent service={service} />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={activeService !== null}
        onClose={() => setActiveService(null)}
        title={activeService?.title ?? ""}
      >
        {activeService && (
          <>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
                sizes="(max-width: 512px) 100vw, 512px"
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {activeService.detail}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {activeService.title === "Prescription Glasses" && (
                <Link
                  href="/eyewear"
                  onClick={() => setActiveService(null)}
                  className="inline-flex w-full items-center justify-center rounded-full border border-taupe/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-all hover:border-accent sm:w-auto"
                >
                  Try Frames On
                </Link>
              )}
              <a
                href="#appointment"
                onClick={() => setActiveService(null)}
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-all hover:bg-accent-dark hover:text-cream sm:w-auto"
              >
                Book Appointment
              </a>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
