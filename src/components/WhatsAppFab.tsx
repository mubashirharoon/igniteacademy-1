import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/923201719494"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ignite Academy on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] group"
    >
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-60"
        style={{ background: "#25D366" }}
      />
      <span
        className="relative flex items-center gap-2 pl-4 pr-5 py-3 rounded-full text-white text-sm font-semibold shadow-2xl transition-transform group-hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 10px 30px rgba(37,211,102,0.45), 0 0 0 2px rgba(255,255,255,0.08)",
        }}
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </span>
    </a>
  );
}
