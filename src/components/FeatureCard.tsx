import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function FeatureCard({
  title,
  body,
  index,
  icon,
  delay = 0,
}: {
  title: string;
  body: string;
  index?: number;
  icon?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-glow flex h-full flex-col rounded-2xl border border-line bg-bg-raised p-6">
        <div className="flex items-center justify-between">
          {icon ? (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 p-2">
              <Image src={icon} alt="" width={28} height={28} className="h-full w-full object-contain" />
            </div>
          ) : (
            <span />
          )}
          {typeof index === "number" && (
            <span className="font-mono text-xs font-semibold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-fg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{body}</p>
      </article>
    </Reveal>
  );
}
