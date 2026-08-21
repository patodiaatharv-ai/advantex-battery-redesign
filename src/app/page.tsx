import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CategoryPanels } from "@/components/sections/CategoryPanels";
import { CellChemistrySection } from "@/components/sections/CellChemistrySection";
import { QualitySection } from "@/components/sections/QualitySection";
import { ConnectCta } from "@/components/sections/ConnectCta";
import { ClientsStrip } from "@/components/ClientsStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <CategoryPanels />
        <CellChemistrySection />
        <QualitySection />
        <ClientsStrip />
        <ConnectCta />
      </main>
      <Footer />
    </>
  );
}
