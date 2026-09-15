import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_CTA, FOOTER_LINKS, NAV_LINKS, SITE } from "@/lib/site-config";
import { InstagramIcon, FacebookIcon, LinkedInIcon, YoutubeIcon } from "@/components/BrandIcons";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-bg-raised">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="rounded-3xl border border-line bg-bg p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold text-fg sm:text-3xl">{FOOTER_CTA.heading}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-fg-muted">{FOOTER_CTA.body}</p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            {FOOTER_CTA.cta}
          </Link>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src={SITE.logo} alt={SITE.fullName} width={168} height={30} />
            <p className="mt-4 max-w-xs text-sm text-fg-muted">{SITE.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-fg-muted hover:text-primary">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-fg-muted hover:text-primary">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-fg-muted hover:text-primary">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-fg-muted hover:text-primary">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Explore</h2>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-fg-muted transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Products</h2>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.find((l) => l.label === "Products")?.children?.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="text-sm text-fg-muted transition-colors hover:text-primary">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Contact Us</h2>
            <ul className="mt-4 space-y-3 text-sm text-fg-muted">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-fg-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
