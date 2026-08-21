import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CellChemistrySection } from "@/components/sections/CellChemistrySection";
import { QualitySection } from "@/components/sections/QualitySection";
import { ConnectCta } from "@/components/sections/ConnectCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <CellChemistrySection />
        <QualitySection />
        <ConnectCta />
      </main>
      <Footer />
    </>
  );
}
