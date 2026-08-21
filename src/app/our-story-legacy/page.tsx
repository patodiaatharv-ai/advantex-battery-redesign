import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { TimelineTabs } from "@/components/TimelineTabs";
import { TeamCard } from "@/components/TeamCard";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { FOUNDER_QUOTE, SITE, STORY, TEAM } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Our Story & Legacy — ${SITE.fullName}`,
  description: STORY.intro,
};

export default function StoryLegacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero eyebrow={STORY.subheading} heading={STORY.heading} body={STORY.intro} />

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <TimelineTabs />
        </section>

        <section className="border-y border-line bg-bg-raised">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
            <Reveal>
              <Quote className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-xl leading-relaxed text-fg sm:text-2xl">
                &ldquo;{FOUNDER_QUOTE.quote}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-fg">{FOUNDER_QUOTE.name}</p>
              <p className="text-xs uppercase tracking-wider text-fg-muted">{FOUNDER_QUOTE.role}</p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Leadership</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
              Team Behind Advantex
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {TEAM.map((member, i) => (
              <li key={member.name}>
                <TeamCard member={member} delay={i * 0.1} />
              </li>
            ))}
          </ul>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
