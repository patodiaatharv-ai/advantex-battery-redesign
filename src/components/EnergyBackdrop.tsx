// Site-wide ambient backdrop: soft green glows plus two "charge sweep" bars
// that continuously animate left-to-right, like current flowing through a
// circuit. Subtle in light mode, a bit more present in dark. Pure CSS/SVG.
export function EnergyBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_15%_-10%,rgba(28,157,90,0.10),transparent_60%),radial-gradient(ellipse_55%_40%_at_100%_15%,rgba(229,151,42,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_60%_45%_at_15%_-10%,rgba(52,211,153,0.16),transparent_60%),radial-gradient(ellipse_55%_40%_at_100%_15%,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="absolute left-0 top-[22%] h-px w-full overflow-hidden opacity-40">
        <div className="motion-safe:animate-[charge-sweep_4s_linear_infinite] h-full w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute left-0 top-[68%] h-px w-full overflow-hidden opacity-30">
        <div
          className="motion-safe:animate-[charge-sweep_5.5s_linear_infinite] h-full w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-[0.025] mix-blend-overlay dark:opacity-[0.05]">
        <filter id="advantex-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#advantex-grain)" />
      </svg>
    </div>
  );
}
