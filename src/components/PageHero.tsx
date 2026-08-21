import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  heading,
  body,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-4 pt-32 text-center sm:px-8 sm:pt-40">
      <Reveal>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold text-fg sm:text-5xl">{heading}</h1>
        {body && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">{body}</p>}
      </Reveal>
    </section>
  );
}
