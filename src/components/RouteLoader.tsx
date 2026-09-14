"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoLoader } from "@/components/LogoLoader";

const MIN_VISIBLE_MS = 350;
const SAFETY_TIMEOUT_MS = 4000;

// Shows the animated logo whenever "something is loading": briefly on the
// very first paint, and again during client-side navigation between pages.
// The App Router has no async data fetching here (everything is static), so
// route changes are normally instant — this gives navigation a felt beat
// instead of nothing, and will genuinely cover real delay on a slow network.
export function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const shownAt = useRef(Date.now());
  const previousPathname = useRef(pathname);
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initial-load splash: hide shortly after mount.
  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(id);
  }, []);

  // Route-change overlay: show as soon as an internal link is clicked, hide
  // once the pathname actually changes (or after a safety timeout).
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (href === window.location.pathname) return;

      shownAt.current = Date.now();
      setVisible(true);
      if (safetyTimer.current) clearTimeout(safetyTimer.current);
      safetyTimer.current = setTimeout(() => setVisible(false), SAFETY_TIMEOUT_MS);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    if (safetyTimer.current) clearTimeout(safetyTimer.current);

    const elapsed = Date.now() - shownAt.current;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    const id = setTimeout(() => setVisible(false), remaining);
    return () => clearTimeout(id);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="motion-safe:animate-[loader-fade-in_0.2s_ease-out] fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <LogoLoader size={64} />
    </div>
  );
}
