import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { EXPERTISE, MANUFACTURING_PROCESS, SAFETY_FEATURES, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Our Expertise — ${SITE.fullName}`,
  description: EXPERTISE.body,
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero heading={EXPERTISE.heading} body={EXPERTISE.body} />

        <section className="border-y border-line bg-bg-raised">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
            <Reveal className="text-center">
              <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                {EXPERTISE.testing.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-fg-muted">{EXPERTISE.testing.body}</p>
            </Reveal>
            <ul className="mt-8 space-y-3">
              {EXPERTISE.testing.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal className="text-center">
            <p className="kicker">Built-In Safety</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
              Engineered to Protect
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SAFETY_FEATURES.map((f, i) => (
              <li key={f.title}>
                <FeatureCard title={f.title} body={f.body} icon={f.icon} delay={i * 0.08} />
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-line bg-bg-raised">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
            <Reveal className="text-center">
              <p className="kicker">
                From Cell to Pack
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
                Our Manufacturing Process
              </h2>
            </Reveal>

            <ol className="mt-12 space-y-8 border-l border-line pl-8">
              {MANUFACTURING_PROCESS.map((step, i) => (
                <Reveal as="li" key={step.title} delay={Math.min(i * 0.06, 0.4)} className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] flex h-6 w-6 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="flex items-start gap-4">
                    {step.icon && (
                      <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-raised p-2 sm:flex">
                        <Image src={step.icon} alt="" width={40} height={40} className="h-full w-full object-contain" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-base font-semibold text-fg">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
