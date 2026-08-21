import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { DealerInquiryForm } from "@/components/DealerInquiryForm";
import { DEALERS, DEALERSHIP, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Dealership — ${SITE.fullName}`,
  description: DEALERSHIP.body,
};

export default function DealershipPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={DEALERSHIP.subheading}
          heading={DEALERSHIP.heading}
          body={DEALERSHIP.body}
        />

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-bg-raised text-xs font-semibold uppercase tracking-wider text-fg-muted">
                  <tr>
                    <th className="px-5 py-3">Shop Name</th>
                    <th className="px-5 py-3">Address</th>
                    <th className="px-5 py-3">City</th>
                    <th className="px-5 py-3">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {DEALERS.map((d) => (
                    <tr key={d.shop} className="text-fg-muted">
                      <td className="px-5 py-3 font-medium text-fg">{d.shop}</td>
                      <td className="px-5 py-3">{d.address}</td>
                      <td className="px-5 py-3">{d.city}</td>
                      <td className="px-5 py-3">{d.phone ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-fg-muted">
              A sample of our growing dealer network across Eastern India. Contact us to find the
              dealer nearest you.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-line bg-bg-raised">
          <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
            <Reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Become a Partner
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
                Enquire About Dealership
              </h2>
            </Reveal>
            <div className="mt-8">
              <DealerInquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
