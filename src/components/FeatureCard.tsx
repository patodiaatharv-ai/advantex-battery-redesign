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
      <article className="group relative flex h-full flex-col overflow-hidden border border-line bg-bg-raised p-6 transition-colors hover:border-primary">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
        />
        <div className="flex items-start justify-between gap-3">
          {typeof index === "number" && (
            <span className="font-mono text-2xl font-bold text-line transition-colors group-hover:text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          {icon && (
            <Image src={icon} alt="" width={22} height={22} className="mt-1 h-[22px] w-[22px] object-contain opacity-80" />
          )}
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-fg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{body}</p>
      </article>
    </Reveal>
  );
}
