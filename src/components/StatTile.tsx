import { Reveal } from "@/components/motion/Reveal";

export function StatTile({
  value,
  label,
  sub,
  delay = 0,
}: {
  value: string;
  label: string;
  sub?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="text-center">
      <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-semibold text-fg">{label}</p>
      {sub && <p className="mt-1 text-xs uppercase tracking-wider text-fg-muted">{sub}</p>}
    </Reveal>
  );
}
