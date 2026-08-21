"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { DEALER_INQUIRY_OPTIONS, SITE } from "@/lib/site-config";

interface Fields {
  name: string;
  phone: string;
  pincode: string;
  requirement: string;
  email: string;
  message: string;
}

const EMPTY: Fields = { name: "", phone: "", pincode: "", requirement: "", email: "", message: "" };

export function DealerInquiryForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Dealership enquiry from ${fields.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nPhone: ${fields.phone}\nPincode: ${fields.pincode}\nInterested in: ${fields.requirement}\nEmail: ${fields.email}\n\n${fields.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="card-glow rounded-2xl border border-line bg-bg p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="di-name" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Name
          </label>
          <input
            id="di-name"
            type="text"
            required
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg-raised px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="di-phone" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Phone
          </label>
          <input
            id="di-phone"
            type="tel"
            required
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg-raised px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="di-pincode" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Pincode
          </label>
          <input
            id="di-pincode"
            type="text"
            value={fields.pincode}
            onChange={(e) => update("pincode", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg-raised px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="di-req" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Requirement
          </label>
          <select
            id="di-req"
            value={fields.requirement}
            onChange={(e) => update("requirement", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg-raised px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          >
            <option value="">— Select —</option>
            {DEALER_INQUIRY_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="di-email" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Email
          </label>
          <input
            id="di-email"
            type="email"
            required
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-bg-raised px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="di-message" className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
            Message
          </label>
          <textarea
            id="di-message"
            rows={4}
            value={fields.message}
            onChange={(e) => update("message", e.target.value)}
            className="mt-2 w-full resize-none rounded-lg border border-line bg-bg-raised px-4 py-2.5 text-sm text-fg focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
      >
        Send
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
