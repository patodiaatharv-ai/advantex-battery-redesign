import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { CONTACT, SITE, STRAIGHT_TO_DEALERS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${CONTACT.heading} — ${SITE.fullName}`,
  description: CONTACT.tagline,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero eyebrow={CONTACT.subheading} heading={CONTACT.heading} body={CONTACT.tagline} />

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-fg">Address</p>
                  <p className="text-sm text-fg-muted">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-fg">Phone</p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-sm text-fg-muted hover:text-primary">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-fg">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-sm text-fg-muted hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-fg">Hours</p>
                  <p className="text-sm text-fg-muted">{SITE.hours}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </section>

        <section className="border-t border-line bg-bg-raised">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                {STRAIGHT_TO_DEALERS.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-fg-muted">
                {STRAIGHT_TO_DEALERS.body}
              </p>
              <a
                href="/dealership"
                className="mt-6 inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                {STRAIGHT_TO_DEALERS.cta}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
