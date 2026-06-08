import { CLINIC } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Location() {
  return (
    <section id="contact" className="bg-cream-deep py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Location & Hours"
            title="Visit us at Ayala Center Cebu"
            subtitle="Easy to reach by car, taxi, or jeepney. Parking available at Ayala Center Cebu."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <ScrollReveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-sm border border-line shadow-sm">
              <iframe
                title="ClearView Eye Center location on Google Maps"
                src={CLINIC.mapEmbed}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className="lg:col-span-2">
            <div className="rounded-sm border border-line bg-cream p-7 shadow-sm sm:p-9">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-dark">
                Address
              </h3>
              <address className="mt-3 not-italic text-sm leading-relaxed text-muted">
                {CLINIC.address.line1}
                <br />
                {CLINIC.address.line2}
                <br />
                {CLINIC.address.city}
              </address>

              <h3 className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-dark">
                Opening Hours
              </h3>
              <table className="mt-3 w-full text-sm">
                <tbody>
                  {CLINIC.hours.map((row) => (
                    <tr key={row.day} className="border-b border-line last:border-0">
                      <td className="py-2.5 pr-4 font-medium text-espresso">
                        {row.day}
                      </td>
                      <td className="py-2.5 text-right text-muted">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-sm">
                <a
                  href={CLINIC.phoneHref}
                  className="font-medium text-accent-dark transition-colors hover:text-espresso"
                >
                  {CLINIC.phone}
                </a>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="font-medium text-accent-dark transition-colors hover:text-espresso"
                >
                  {CLINIC.email}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
