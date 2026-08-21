"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/site-config";

interface Fields {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const EMPTY: Fields = { name: "", email: "", phone: "", company: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${fields.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nCompany: ${fields.company}\n\n${fields.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="card-glow rounded-2xl border border-line bg-bg-raised p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Your Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Email Address
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="cf-phone" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Phone Number
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="cf-company" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Company Name
          </label>
          <input
            id="cf-company"
            type="text"
            value={fields.company}
            onChange={(e) => update("company", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Your Message
          </label>
          <textarea
            id="cf-message"
            required
            rows={4}
            value={fields.message}
            onChange={(e) => update("message", e.target.value)}
            className="mt-2 w-full resize-none rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
      >
        Submit
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-xs text-fg-muted">
        Call us at {SITE.phone} or fill out the form above, and we&apos;ll get back to you within a few
        business days.
      </p>
    </form>
  );
}
