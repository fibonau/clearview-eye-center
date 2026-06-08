"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CLINIC, NAV_LINKS } from "@/lib/constants";
import { ClinicLogo } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overHero = isHome && !scrolled;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-cream/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <ClinicLogo light={overHero} />

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-accent ${
                overHero ? "text-cream/80" : "text-muted hover:text-accent-dark"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#appointment"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-espresso transition-all hover:bg-accent-dark hover:text-cream"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-full p-2 transition-colors md:hidden ${
            overHero && !menuOpen ? "text-cream" : "text-espresso"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-cream md:hidden"
        >
          <nav className="flex flex-col px-5 py-5" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-line/70 px-1 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-espresso transition-colors hover:text-accent-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-accent-dark hover:text-cream"
            >
              Book Appointment
            </a>
            <a
              href={CLINIC.phoneHref}
              className="mt-3 inline-flex items-center justify-center rounded-full border border-taupe/50 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:border-accent"
            >
              Call {CLINIC.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
