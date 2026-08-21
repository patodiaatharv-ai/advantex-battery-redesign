import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ProductCardList } from "@/components/ProductSpecs";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { ESS, ESS_PRODUCTS, ESS_SECTIONS, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${ESS.navLabel} — ${SITE.fullName}`,
  description: ESS.body,
};

export default function EssPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero eyebrow={ESS.eyebrow} heading={ESS.heading} body={ESS.body} />

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <ProductCardList products={ESS_PRODUCTS} />
        </section>

        <section className="border-y border-line bg-bg-raised">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                {ESS_SECTIONS.commercial.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                {ESS_SECTIONS.commercial.body}
              </p>
              <p className="mt-4 text-xs text-fg-muted">{ESS_SECTIONS.commercial.disclaimer}</p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <Reveal>
            <p className="font-display text-lg italic text-fg-muted">
              &ldquo;{ESS_SECTIONS.solar.hook}&rdquo;
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold text-fg sm:text-3xl">
              {ESS_SECTIONS.solar.heading}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
              {ESS_SECTIONS.solar.subheading}
            </p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">{ESS_SECTIONS.solar.body}</p>
          </Reveal>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
