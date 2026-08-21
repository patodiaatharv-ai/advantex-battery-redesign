import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ProductCardList } from "@/components/ProductSpecs";
import { ContactSection } from "@/components/ContactSection";
import { INVERTER_BATTERY, INVERTER_PRODUCTS, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${INVERTER_BATTERY.navLabel} — ${SITE.fullName}`,
  description: INVERTER_BATTERY.body,
};

export default function InverterBatteryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={INVERTER_BATTERY.eyebrow}
          heading={INVERTER_BATTERY.heading}
          body={INVERTER_BATTERY.body}
        />
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <ProductCardList products={INVERTER_PRODUCTS} />
          <p className="mt-8 text-center text-xs text-fg-muted">
            All our inverter battery models are compatible with lead-acid battery inverters.
          </p>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
