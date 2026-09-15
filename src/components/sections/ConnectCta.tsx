import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { CONNECT_CTA } from "@/lib/site-config";

export function ConnectCta() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-fg sm:text-4xl">
          {CONNECT_CTA.heading}
        </h2>
        <p className="mt-3 text-sm uppercase tracking-wider text-fg-muted">
          {CONNECT_CTA.subheading}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
          <Link
            href="/dealership"
            className="inline-flex items-center rounded-full border border-line px-7 py-3 text-sm font-semibold text-fg transition-colors hover:border-primary hover:text-primary"
          >
            Find Dealers
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
