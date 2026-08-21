import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CATEGORY_PANELS } from "@/lib/site-config";

export function CategoryPanels() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          What We Build
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
          Explore Our Range
        </h2>
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_PANELS.map((panel, i) => (
          <Reveal as="li" key={panel.href} delay={Math.min(i * 0.08, 0.4)}>
            <a
              href={panel.href}
              className="card-glow group relative block h-56 overflow-hidden rounded-2xl border border-line"
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-4 left-5 font-display text-lg font-semibold text-white">
                {panel.title}
              </p>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
