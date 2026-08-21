import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Contact Us</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">Get in Touch</h2>
        <p className="mt-2 text-sm text-fg-muted">
          Have a question or feedback? Fill out the form below, and we&apos;ll respond promptly!
        </p>
      </Reveal>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
