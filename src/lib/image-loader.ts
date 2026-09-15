// next/image doesn't auto-prepend basePath to its rendered <img src> when
// images.unoptimized is set (confirmed on this Next.js 16 canary build —
// GitHub Pages 404'd on every next/image asset even though the raw <img>
// tags in LogoLoader, which prefix it by hand, worked fine). A custom
// loader runs for every next/image call site instead, so this fixes it
// everywhere at once rather than patching each usage.
export default function imagePathLoader({ src }: { src: string; width: number; quality?: number }) {
  if (/^https?:\/\//.test(src)) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}
