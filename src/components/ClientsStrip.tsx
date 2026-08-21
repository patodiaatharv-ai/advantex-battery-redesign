import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CLIENT_LOGOS } from "@/lib/site-config";

export function ClientsStrip() {
  return (
    <section className="border-y border-line bg-bg-raised">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Clients & Partners
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {CLIENT_LOGOS.map((src) => (
              <div key={src} className="relative h-10 w-32 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
                <Image src={src} alt="" fill className="object-contain" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
