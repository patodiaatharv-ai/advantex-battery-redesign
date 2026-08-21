import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ProductHeroBanner } from "@/components/ProductHeroBanner";
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

        {ESS.heroImage && (
          <div className="pb-16">
            <ProductHeroBanner src={ESS.heroImage} alt={ESS.heading} />
          </div>
        )}

        <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
          <ProductCardList products={ESS_PRODUCTS} />
        </section>

        <section className="border-y border-line bg-bg-raised">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
            <div className="grid items-center gap-10 sm:grid-cols-2">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                  {ESS_SECTIONS.commercial.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-fg-muted">
                  {ESS_SECTIONS.commercial.body}
                </p>
                <p className="mt-4 text-xs text-fg-muted">{ESS_SECTIONS.commercial.disclaimer}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="card-glow relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={ESS_SECTIONS.commercial.image}
                    alt={ESS_SECTIONS.commercial.heading}
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <Reveal className="order-2 sm:order-1">
              <div className="grid grid-cols-2 gap-3">
                {ESS_SECTIONS.solar.images.map((src) => (
                  <div key={src} className="card-glow relative aspect-square overflow-hidden rounded-xl border border-line">
                    <Image src={src} alt={ESS_SECTIONS.solar.heading} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 sm:order-2">
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
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
