import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ProductHeroBanner } from "@/components/ProductHeroBanner";
import { ProductSpecs, ImageGallery } from "@/components/ProductSpecs";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { SITE, TWO_WHEELER } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${TWO_WHEELER.navLabel} — ${SITE.fullName}`,
  description: TWO_WHEELER.body,
};

export default function TwoWheelerPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero eyebrow={TWO_WHEELER.eyebrow} heading={TWO_WHEELER.heading} body={TWO_WHEELER.body} />

        {TWO_WHEELER.heroImage && (
          <div className="pb-16">
            <ProductHeroBanner src={TWO_WHEELER.heroImage} alt={TWO_WHEELER.heading} />
          </div>
        )}

        <section className="mx-auto max-w-4xl px-5 pb-16 sm:px-8">
          {TWO_WHEELER.specs && <ProductSpecs specs={TWO_WHEELER.specs} />}
        </section>

        {TWO_WHEELER.gallery && (
          <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
            <Reveal className="mb-8 text-center">
              <p className="kicker">Gallery</p>
            </Reveal>
            <ImageGallery images={TWO_WHEELER.gallery} />
          </section>
        )}

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
