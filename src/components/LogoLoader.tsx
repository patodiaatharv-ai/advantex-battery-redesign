import type { CSSProperties } from "react";
import { SITE } from "@/lib/site-config";

const DURATION = "2.4s";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

// Uses the real logo mark, cropped into two layers (public/images/logo-icon
// and logo-bolt — see scripts used to generate them) so the assembled frame
// is pixel-identical to the actual logo, at the actual angle. The bolt image
// falls into place, then the full-icon image is shown twice — once clipped
// to its left half ("A"), once to its right half ("B") — each starting
// translated back to the bolt's impact point and animating out to its real
// position, so the letters visibly burst from the strike, not slide in.
// Fixed precision so the server-rendered string and the client's recomputed
// value always match exactly — an un-rounded repeating decimal (e.g. from
// 306/792) can otherwise stringify with different lengths between the SSR
// pass and the client, which shows up as a hydration mismatch.
function pct(value: number) {
  return `${value.toFixed(4)}%`;
}

const ICON_W = 712;
const ICON_H = 454;
const CANVAS_W = 792;
const CANVAS_H = 554;
const ICON_LEFT_PCT = pct((40 / CANVAS_W) * 100);
const ICON_TOP_PCT = pct((30 / CANVAS_H) * 100);
const ICON_W_PCT = pct((ICON_W / CANVAS_W) * 100);
const ICON_H_PCT = pct((ICON_H / CANVAS_H) * 100);
const IMPACT_X_PCT = pct(((40 + 266) / CANVAS_W) * 100);
const IMPACT_Y_PCT = pct(((30 + 453) / CANVAS_H) * 100);
const GROUND_Y_PCT = pct(((30 + 453 + 10) / CANVAS_H) * 100);
// Offset from the icon's own center to the bolt's tip, as a % of the icon's
// own box — this is where A/B start from, so it works at any render size.
const BURST_DX_PCT = pct(((266 - ICON_W / 2) / ICON_W) * 100);
const BURST_DY_PCT = pct(((453 - ICON_H / 2) / ICON_H) * 100);

const SPARKS = [
  { angle: -100, dist: 5.5 },
  { angle: -55, dist: 6 },
  { angle: -135, dist: 5 },
  { angle: -15, dist: 4.5 },
  { angle: -165, dist: 4 },
];

const iconPieceBaseStyle: CSSProperties = {
  position: "absolute",
  left: ICON_LEFT_PCT,
  top: ICON_TOP_PCT,
  width: ICON_W_PCT,
  height: ICON_H_PCT,
  objectFit: "contain",
};

export function LogoLoader({ size = 120, label }: { size?: number; label?: string }) {
  const displayH = (size * CANVAS_H) / CANVAS_W;

  return (
    <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
      <div className="relative" style={{ width: size, height: displayH }} aria-hidden="true">
        <div
          className="absolute h-[1.5px]"
          style={{
            left: "6%",
            right: "6%",
            top: GROUND_Y_PCT,
            background: "var(--color-primary)",
            animation: `ground-line ${DURATION} ease-out infinite`,
          }}
        />

        <div
          className="absolute rounded-full border-2"
          style={{
            left: IMPACT_X_PCT,
            top: IMPACT_Y_PCT,
            width: "22%",
            aspectRatio: "1",
            borderColor: "var(--color-primary)",
            animation: `shockwave-real ${DURATION} ease-out infinite`,
          }}
        />
        <div
          className="absolute rounded-full blur-[3px]"
          style={{
            left: IMPACT_X_PCT,
            top: IMPACT_Y_PCT,
            width: "16%",
            aspectRatio: "1",
            background: "var(--color-primary)",
            animation: `impact-flash-real ${DURATION} ease-out infinite`,
          }}
        />

        {SPARKS.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const dx = pct(Math.cos(rad) * s.dist);
          const dy = pct(Math.sin(rad) * s.dist);
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={
                {
                  left: IMPACT_X_PCT,
                  top: IMPACT_Y_PCT,
                  width: "2.5%",
                  aspectRatio: "1",
                  background: "var(--color-primary)",
                  "--dx": dx,
                  "--dy": dy,
                  animation: `spark-fly-real ${DURATION} ease-out infinite`,
                } as CSSProperties
              }
            />
          );
        })}

        {/* the bolt: real cropped asset, falls into place then flashes */}
        <img
          src="/images/logo-bolt.png"
          alt=""
          style={{
            ...iconPieceBaseStyle,
            animation: `bolt-fall ${DURATION} ease-in infinite`,
          }}
        />

        {/* "A": left half of the real icon, thrown out from the impact point */}
        <img
          src="/images/logo-icon.png"
          alt=""
          style={
            {
              ...iconPieceBaseStyle,
              clipPath: "inset(0 50% 0 0)",
              "--dx": BURST_DX_PCT,
              "--dy": BURST_DY_PCT,
              animation: `burst-a-real ${DURATION} ${EASE} infinite`,
            } as CSSProperties
          }
        />

        {/* "B": right half of the real icon, thrown out from the impact point */}
        <img
          src="/images/logo-icon.png"
          alt={SITE.fullName}
          style={
            {
              ...iconPieceBaseStyle,
              clipPath: "inset(0 0 0 50%)",
              "--dx": BURST_DX_PCT,
              "--dy": BURST_DY_PCT,
              animation: `burst-b-real ${DURATION} ${EASE} infinite`,
            } as CSSProperties
          }
        />
      </div>

      <span className="sr-only">{label ?? "Loading"}</span>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">{label}</p>
      )}
    </div>
  );
}
