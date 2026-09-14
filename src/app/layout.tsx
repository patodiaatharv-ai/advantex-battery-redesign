import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { EnergyBackdrop } from "@/components/EnergyBackdrop";
import { RouteLoader } from "@/components/RouteLoader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
};

// Runs before paint so the page never flashes the wrong theme. Defaults to
// light unless the visitor has explicitly chosen dark before — deliberately
// ignores system prefers-color-scheme, per the brief (light is default).
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem("advantex-theme");
    if (saved === "dark") document.documentElement.dataset.theme = "dark";
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <EnergyBackdrop />
        <RouteLoader />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
