import { Reveal } from "@/components/motion/Reveal";
import { FeatureCard } from "@/components/FeatureCard";
import { QUALITY, QUALITY_FEATURES, WHY_CHOOSE_US } from "@/lib/site-config";

export function QualitySection() {
  return (
    <section id="quality" className="border-y border-line bg-bg-raised">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker">
            {WHY_CHOOSE_US.heading}
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
            {QUALITY.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">{QUALITY.body}</p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY_FEATURES.map((f, i) => (
            <li key={f.title}>
              <FeatureCard title={f.title} body={f.body} icon={f.icon} index={i} delay={i * 0.08} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
