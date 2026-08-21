import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ProductSpecs } from "@/components/ProductSpecs";
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
        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          {TWO_WHEELER.specs && <ProductSpecs specs={TWO_WHEELER.specs} />}
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
