import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { StatTile } from "@/components/StatTile";
import { Reveal } from "@/components/motion/Reveal";
import { ImageGallery } from "@/components/ProductSpecs";
import { ContactSection } from "@/components/ContactSection";
import { ABOUT, ABOUT_GALLERY, GROWTH_CHART, SITE, STATS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About Advantex — ${SITE.fullName}`,
  description: ABOUT.intro,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero heading={ABOUT.heading} body={ABOUT.intro} />

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">
              {ABOUT.whatWeDo.heading}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg-muted">
              {ABOUT.whatWeDo.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {ABOUT.whatWeDo.values.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary"
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="border-y border-line bg-bg-raised">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
            <Reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {ABOUT.growth.heading}
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
                {ABOUT.growth.body}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <StatTile key={s.label} value={s.value} label={s.label} sub={s.sub} delay={i * 0.08} />
              ))}
            </div>

            <Reveal delay={0.2} className="mt-12">
              <div className="card-glow overflow-hidden rounded-2xl border border-line bg-bg">
                <Image
                  src={GROWTH_CHART}
                  alt="Advantex Battery growth chart"
                  width={1600}
                  height={700}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Behind the Scenes
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
              Our Gallery
            </h2>
          </Reveal>
          <ImageGallery images={ABOUT_GALLERY} />
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
