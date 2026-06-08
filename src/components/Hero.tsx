import { CLINIC } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="Macro close-up of a human eye with a luminous iris"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/55 to-espresso/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-espresso/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-28 pb-20 text-center sm:px-8">
        <p className="animate-fade-up text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-accent">
          Welcome to ClearView Eye Center
        </p>
        <span
          aria-hidden="true"
          className="mx-auto mt-5 block h-px w-14 bg-accent/70"
        />
        <h1 className="mt-7 font-heading text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          {CLINIC.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Refined, unhurried eye care in the heart of Cebu Business Park — where
          modern diagnostics meet a warm, personal touch.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#appointment"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-espresso shadow-lg shadow-espresso/30 transition-all hover:bg-accent-dark hover:text-cream sm:w-auto"
          >
            Book Appointment
          </a>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
