import { Reveal } from "@/components/motion/Reveal";
import { CellChemistryTabs } from "@/components/CellChemistryTabs";

export function CellChemistrySection() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <Reveal className="text-center">
        <p className="kicker">Cell Chemistry</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
          Lithium batteries are leading the revolution in energy storage & power efficiency.
        </h2>
      </Reveal>
      <div className="mt-10">
        <CellChemistryTabs />
      </div>
    </section>
  );
}
