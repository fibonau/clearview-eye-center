import { CLINIC, NAV_LINKS } from "@/lib/constants";
import { ClinicLogo } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
        <div className="flex justify-center">
          <ClinicLogo light centered />
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream/60">
          Trusted, elegant eye care in the heart of Cebu City. Your vision, our
          quiet obsession.
        </p>

        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          aria-label="Footer"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#appointment"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-accent"
          >
            Book Appointment
          </a>
        </nav>

        <span
          aria-hidden="true"
          className="mx-auto mt-10 block h-px w-16 bg-cream/15"
        />

        <div className="mt-10 grid gap-8 text-sm text-cream/70 sm:grid-cols-3">
          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Visit
            </h3>
            <address className="mt-3 not-italic leading-relaxed">
              {CLINIC.address.line1}
              <br />
              {CLINIC.address.line2}
              <br />
              {CLINIC.address.city}
            </address>
          </div>
          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={CLINIC.phoneHref} className="transition-colors hover:text-cream">
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`} className="transition-colors hover:text-cream">
                  {CLINIC.email}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Hours
            </h3>
            <ul className="mt-3 space-y-2">
              <li>Mon – Fri · 9:00 AM – 6:00 PM</li>
              <li>Saturday · 9:00 AM – 4:00 PM</li>
              <li>Sunday · Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-cream/10 pt-8">
          <p className="text-xs text-cream/45">
            &copy; {year} {CLINIC.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/35">
            BUILT BY: NEXT LIKHA
          </p>
        </div>
      </div>
    </footer>
  );
}
