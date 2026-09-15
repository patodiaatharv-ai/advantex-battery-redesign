import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSection } from "@/components/ContactSection";
import {
  BMS,
  CELL_SUPPLIERS,
  CELL_TYPES,
  INNOVATION,
  PRISMATIC_LFP,
  SITE,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Our Innovation — ${SITE.fullName}`,
  description: INNOVATION.tagline,
};

export default function InnovationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero heading={INNOVATION.heading} body={INNOVATION.tagline} />

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <Reveal className="text-center">
            <p className="kicker">
              {INNOVATION.cellChemistry.heading}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
              {INNOVATION.cellChemistry.body}
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-wrap justify-center gap-6">
            {INNOVATION.cellChemistry.taglines.map((t, i) => (
              <Reveal as="li" key={t.label} delay={i * 0.06} className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 p-2.5">
                  <Image src={t.icon} alt="" width={36} height={36} className="h-full w-full object-contain" />
                </div>
                <p className="text-sm font-semibold text-fg">{t.label}</p>
              </Reveal>
            ))}
          </ul>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {CELL_TYPES.map((cell, i) => (
              <Reveal as="li" key={cell.title} delay={i * 0.1}>
                <article className="card-glow h-full rounded-2xl border border-line bg-bg-raised p-6">
                  <h3 className="font-display text-lg font-semibold text-fg">{cell.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {cell.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-fg-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="border-y border-line bg-bg-raised">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                {PRISMATIC_LFP.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-fg-muted">{PRISMATIC_LFP.intro}</p>
              <ul className="mt-6 flex flex-wrap justify-center gap-3">
                {PRISMATIC_LFP.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">{BMS.heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">{BMS.body}</p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
                Safety & Performance
              </h3>
              <ul className="mt-4 space-y-2.5">
                {BMS.safety.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.16}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
                Smart Features
              </h3>
              <ul className="mt-4 space-y-2.5">
                {BMS.smart.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
              Trusted Cell & BMS Suppliers
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-3">
              {CELL_SUPPLIERS.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-bg-raised px-4 py-1.5 text-sm text-fg-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
            {INNOVATION.supplierBanner && (
              <div className="relative mx-auto mt-8 h-16 w-full max-w-md">
                <Image
                  src={INNOVATION.supplierBanner}
                  alt="Samsung SDI"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
            )}
          </Reveal>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
