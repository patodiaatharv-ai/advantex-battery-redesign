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
    <section className="border-b border-line pb-10 pt-32 sm:pt-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          {eyebrow && <p className="kicker">{eyebrow}</p>}
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.1] text-fg sm:text-5xl">
            {heading}
          </h1>
          {body && <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">{body}</p>}
        </Reveal>
      </div>
    </section>
  );
}
