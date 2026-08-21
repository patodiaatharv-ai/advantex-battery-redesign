import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { OTHER_SOLUTIONS, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${OTHER_SOLUTIONS.navLabel} — ${SITE.fullName}`,
  description: OTHER_SOLUTIONS.body,
};

export default function OtherSolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={OTHER_SOLUTIONS.eyebrow}
          heading={OTHER_SOLUTIONS.heading}
          body={OTHER_SOLUTIONS.body}
        />
        <div className="py-8" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
