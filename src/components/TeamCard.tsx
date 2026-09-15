import { Reveal } from "@/components/motion/Reveal";
import type { TeamMember } from "@/lib/site-config";

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="card-glow h-full rounded-2xl border border-line bg-bg-raised p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
          {initials(member.name)}
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-fg">{member.name}</h3>
        <p className="kicker">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{member.bio}</p>
      </article>
    </Reveal>
  );
}
