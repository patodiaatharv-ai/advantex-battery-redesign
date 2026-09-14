import type { CSSProperties } from "react";
import { SITE } from "@/lib/site-config";

const DURATION = "2.4s";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

// Lightning strikes down to the ground; the impact flashes with a shockwave
// and sparks; A and B are thrown outward from that exact impact point (they
// start there, not sliding in from off-screen) to settle into the logo.
// Holds, fades, loops. The real logo sits below, small, as brand context.
const IMPACT = { x: 46, y: 86 };
const A_POS = { x: 20, y: 50 };
const B_POS = { x: 88, y: 50 };

const SPARKS = [
  { angle: -100, dist: 22 },
  { angle: -60, dist: 24 },
  { angle: -140, dist: 20 },
  { angle: -20, dist: 18 },
  { angle: -160, dist: 16 },
];

function offset(from: { x: number; y: number }, to: { x: number; y: number }) {
  return { dx: to.x - from.x, dy: to.y - from.y };
}

export function LogoLoader({ size = 84, label }: { size?: number; label?: string }) {
  const boxW = 130;
  const boxH = 100;
  const displayH = (size * boxH) / boxW;
  const a = offset(IMPACT, A_POS);
  const b = offset(IMPACT, B_POS);

  return (
    <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
      <svg
        viewBox={`0 0 ${boxW} ${boxH}`}
        width={size}
        height={displayH}
        aria-hidden="true"
        style={
          {
            "--ax": `${a.dx}px`,
            "--ay": `${a.dy}px`,
            "--bx": `${b.dx}px`,
            "--by": `${b.dy}px`,
          } as CSSProperties
        }
      >
        <line
          x1="8"
          y1={IMPACT.y + 4}
          x2={boxW - 8}
          y2={IMPACT.y + 4}
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ animation: `ground-line ${DURATION} ease-out infinite` }}
        />

        <circle
          cx={IMPACT.x}
          cy={IMPACT.y}
          r="16"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: `shockwave ${DURATION} ease-out infinite`,
          }}
        />
        <circle
          cx={IMPACT.x}
          cy={IMPACT.y}
          r="12"
          fill="var(--color-primary)"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            filter: "blur(3px)",
            animation: `impact-flash ${DURATION} ease-out infinite`,
          }}
        />

        {SPARKS.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const dx = Math.cos(rad) * s.dist;
          const dy = Math.sin(rad) * s.dist;
          return (
            <circle
              key={i}
              cx={IMPACT.x}
              cy={IMPACT.y}
              r="1.6"
              fill="var(--color-primary)"
              style={
                {
                  "--dx": `${dx}px`,
                  "--dy": `${dy}px`,
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `spark-fly ${DURATION} ease-out infinite`,
                } as CSSProperties
              }
            />
          );
        })}

        <path
          d={`M${IMPACT.x + 20} 4 ${IMPACT.x - 4} 42h13l-9 ${IMPACT.y - 42} 26-34h-13Z`}
          fill="var(--color-fg-muted)"
          stroke="var(--color-fg-muted)"
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            fillOpacity: 0,
            animation: `bolt-strike ${DURATION} ease-in infinite`,
          }}
        />

        <text
          x={IMPACT.x}
          y={IMPACT.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="700"
          fontSize="60"
          fill="var(--color-primary)"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: `burst-a ${DURATION} ${EASE} infinite`,
          }}
        >
          A
        </text>

        <text
          x={IMPACT.x}
          y={IMPACT.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="700"
          fontSize="60"
          fill="var(--color-primary)"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: `burst-b ${DURATION} ${EASE} infinite`,
          }}
        >
          B
        </text>
      </svg>

      <img src={SITE.logo} alt="" aria-hidden="true" className="h-4 w-auto object-contain opacity-70" />

      <span className="sr-only">{label ?? "Loading"}</span>
      {label && (
        <p className="-mt-2 text-xs font-semibold uppercase tracking-wider text-fg-muted">{label}</p>
      )}
    </div>
  );
}
