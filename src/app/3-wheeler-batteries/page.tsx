import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ConfigurationChips } from "@/components/ProductSpecs";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { SITE, THREE_WHEELER } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${THREE_WHEELER.navLabel} — ${SITE.fullName}`,
  description: THREE_WHEELER.body,
};

export default function ThreeWheelerPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero eyebrow={THREE_WHEELER.eyebrow} heading={THREE_WHEELER.heading} body={THREE_WHEELER.body} />
        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <Reveal className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Available Configurations
            </p>
          </Reveal>
          <div className="flex justify-center">
            {THREE_WHEELER.configurations && (
              <ConfigurationChips configurations={THREE_WHEELER.configurations} />
            )}
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
