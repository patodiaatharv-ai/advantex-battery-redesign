import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
