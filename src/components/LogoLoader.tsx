import { SITE } from "@/lib/site-config";

const DURATION = "2.2s";

// The brand's construction, animated: the bolt strikes in first, then the A
// and B pop in after it — assembling into the mark, holding, fading, and
// looping. The real logo sits below, small, as brand context.
export function LogoLoader({ size = 72, label }: { size?: number; label?: string }) {
  const boxW = 120;
  const boxH = 90;
  const displayH = (size * boxH) / boxW;

  return (
    <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
      <div className="relative flex items-center justify-center" style={{ width: size, height: displayH }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary blur-xl"
          style={{ animation: `mark-glow ${DURATION} ease-in-out infinite` }}
        />

        <svg viewBox={`0 0 ${boxW} ${boxH}`} width={size} height={displayH} aria-hidden="true">
          <text
            x="14"
            y="72"
            fontFamily="var(--font-display), sans-serif"
            fontWeight="700"
            fontSize="68"
            fill="var(--color-primary)"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `pop-a ${DURATION} ease-in-out infinite`,
            }}
          >
            A
          </text>

          <text
            x="60"
            y="72"
            fontFamily="var(--font-display), sans-serif"
            fontWeight="700"
            fontSize="68"
            fill="var(--color-primary)"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `pop-b ${DURATION} ease-in-out infinite`,
            }}
          >
            B
          </text>

          <path
            d="M64 4 40 48h17l-8 40 33-52h-17l7-36Z"
            fill="var(--color-fg-muted)"
            stroke="var(--color-fg-muted)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 1,
              fillOpacity: 0,
              animation: `bolt-strike-full ${DURATION} ease-in-out infinite`,
            }}
          />
        </svg>
      </div>

      <img src={SITE.logo} alt="" aria-hidden="true" className="h-4 w-auto object-contain opacity-70" />

      <span className="sr-only">{label ?? "Loading"}</span>
      {label && (
        <p className="-mt-2 text-xs font-semibold uppercase tracking-wider text-fg-muted">{label}</p>
      )}
    </div>
  );
}
