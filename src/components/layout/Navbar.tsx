"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-config";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/90 backdrop-blur" : "bg-bg/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <Link href="/" className="flex items-center">
          <Image src={SITE.logo} alt={SITE.fullName} width={168} height={30} priority />
        </Link>

        <ul className="hidden md:flex items-center gap-1 font-medium text-sm">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-fg-muted transition-colors hover:text-primary"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
              </Link>

              {link.children && (
                <div
                  className={`absolute left-0 top-full min-w-56 rounded-xl border border-line bg-bg p-2 shadow-lg shadow-black/5 transition-all duration-150 ${
                    openDropdown === link.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-bg-raised hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-fg"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-line bg-bg px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1 text-base">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-2 py-3 text-fg"
                      onClick={() =>
                        setOpenMobileGroup((v) => (v === link.label ? null : link.label))
                      }
                      aria-expanded={openMobileGroup === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMobileGroup === link.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {openMobileGroup === link.label && (
                      <ul className="ml-3 border-l border-line pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-2 py-2.5 text-sm text-fg-muted hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-fg hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-primary px-2 py-3 text-center font-semibold text-white"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
