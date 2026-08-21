"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CELL_CHEMISTRY_TABS } from "@/lib/site-config";

export function CellChemistryTabs() {
  const [active, setActive] = useState(0);

  return (
    <Reveal>
      <div role="tablist" aria-label="Cell chemistry" className="flex justify-center gap-2">
        {CELL_CHEMISTRY_TABS.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              active === i
                ? "border-primary bg-primary text-white"
                : "border-line text-fg-muted hover:border-primary hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-fg-muted">
        {CELL_CHEMISTRY_TABS[active].body}
      </p>
    </Reveal>
  );
}
