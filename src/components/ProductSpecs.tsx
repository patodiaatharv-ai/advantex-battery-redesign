import { Reveal } from "@/components/motion/Reveal";

export function ProductSpecs({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {specs.map((spec, i) => (
        <Reveal key={spec.label} delay={i * 0.08}>
          <div className="card-glow rounded-2xl border border-line bg-bg-raised p-5">
            <dt className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
              {spec.label}
            </dt>
            <dd className="mt-1 font-display text-xl font-bold text-fg">{spec.value}</dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}

export function ConfigurationChips({ configurations }: { configurations: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {configurations.map((c, i) => (
        <Reveal as="li" key={c} delay={Math.min(i * 0.04, 0.3)}>
          <span className="inline-block rounded-full border border-line bg-bg-raised px-4 py-1.5 text-sm text-fg-muted">
            {c}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}

export function ProductCardList({
  products,
}: {
  products: { title: string; body: string }[];
}) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {products.map((p, i) => (
        <Reveal as="li" key={p.title} delay={Math.min(i * 0.06, 0.3)}>
          <article className="card-glow h-full rounded-2xl border border-line bg-bg-raised p-6">
            <h3 className="font-display text-base font-semibold text-fg">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.body}</p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
