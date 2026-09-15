import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Battery, BatteryCharging, Cog, Sun, Wrench } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { NAV_LINKS, PRODUCTS_HUB, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Our Products — ${SITE.fullName}`,
  description: PRODUCTS_HUB.tagline,
};

const ICONS = [Battery, BatteryCharging, Sun, Cog, Wrench];

export default function ProductsHubPage() {
  const products = NAV_LINKS.find((l) => l.label === "Products")?.children ?? [];

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero heading={PRODUCTS_HUB.heading} body={PRODUCTS_HUB.tagline} />

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal as="li" key={p.href} delay={i * 0.08}>
                  <Link
                    href={p.href}
                    className="card-glow group flex h-full flex-col justify-between rounded-2xl border border-line bg-bg-raised p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-fg">{p.label}</h3>
                    <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                      Explore
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <Link
                href="/about"
                className="card-glow block rounded-2xl border border-line bg-bg-raised p-6"
              >
                <p className="kicker">
                  Our Manufacturing
                </p>
                <p className="mt-2 text-sm text-fg-muted">See how we maintain a quality-first approach.</p>
              </Link>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                href="/our-innovation"
                className="card-glow block rounded-2xl border border-line bg-bg-raised p-6"
              >
                <p className="kicker">
                  Our Innovation
                </p>
                <p className="mt-2 text-sm text-fg-muted">
                  Discover how technology meets purpose to do more.
                </p>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
