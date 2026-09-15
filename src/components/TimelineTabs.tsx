"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TIMELINE } from "@/lib/site-config";

export function TimelineTabs() {
  const [active, setActive] = useState(0);
  const entry = TIMELINE[active];

  return (
    <div>
      <div role="tablist" aria-label="Company timeline" className="flex flex-wrap justify-center gap-2">
        {TIMELINE.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.year}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-line text-fg-muted hover:border-primary hover:text-primary"
              }`}
            >
              {t.year}
            </button>
          );
        })}
      </div>

      <Reveal key={entry.year} className="mt-10">
        <div className="card-glow mx-auto max-w-2xl rounded-2xl border border-line bg-bg-raised p-8">
          <p className="kicker">{entry.year}</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-fg">{entry.title}</h3>
          <ul className="mt-5 space-y-3">
            {entry.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
