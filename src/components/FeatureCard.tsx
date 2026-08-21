import { Reveal } from "@/components/motion/Reveal";

export function FeatureCard({
  title,
  body,
  index,
  delay = 0,
}: {
  title: string;
  body: string;
  index?: number;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-glow flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
        {typeof index === "number" && (
          <span className="font-mono text-xs font-semibold text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3 className="mt-3 font-display text-lg font-semibold text-fg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{body}</p>
      </article>
    </Reveal>
  );
}
