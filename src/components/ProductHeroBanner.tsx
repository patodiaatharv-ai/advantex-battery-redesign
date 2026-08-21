import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function ProductHeroBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="card-glow relative aspect-[16/9] overflow-hidden rounded-2xl border border-line sm:aspect-[21/9]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" priority />
      </div>
    </Reveal>
  );
}
