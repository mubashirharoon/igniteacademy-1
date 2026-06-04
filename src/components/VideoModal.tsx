import { useEffect, useState } from "react";
import { X, MessageCircle } from "lucide-react";

export type VideoSource = {
  /** YouTube ID, Vimeo ID, or full MP4 URL */
  url?: string;
  /** "youtube" | "vimeo" | "mp4" — auto-detected if url is a full URL */
  kind?: "youtube" | "vimeo" | "mp4";
  title?: string;
};

const WHATSAPP = "https://wa.me/923201719494";

function resolveEmbed(src: VideoSource): { embed?: string; mp4?: string } {
  if (!src.url) return {};
  const u = src.url.trim();
  // Auto-detect
  if (src.kind === "mp4" || /\.(mp4|webm|mov)(\?|$)/i.test(u)) return { mp4: u };
  if (src.kind === "vimeo" || /vimeo\.com/.test(u)) {
    const id = u.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] ?? u;
    return { embed: `https://player.vimeo.com/video/${id}?dnt=1&title=0&byline=0` };
  }
  // YouTube default
  const id = u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{6,})/)?.[1] ?? u;
  return { embed: `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1` };
}

export function VideoModal({
  open,
  onClose,
  source,
}: {
  open: boolean;
  onClose: () => void;
  source: VideoSource;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (open) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted && !open) return null;
  const { embed, mp4 } = resolveEmbed(source);
  const hasVideo = !!(embed || mp4);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full max-w-5xl transition-all duration-500 ${
          open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:border-[#E85D10]/60 transition"
        >
          <X size={18} />
        </button>
        <div
          className="relative rounded-2xl overflow-hidden ignite-border-glow"
          style={{ background: "#000", aspectRatio: "16 / 9" }}
        >
          {open && hasVideo && embed && (
            <iframe
              src={embed}
              title={source.title ?? "Ignite Academy video"}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {open && hasVideo && mp4 && (
            <video
              src={mp4}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-contain"
            />
          )}
          {!hasVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#E85D10] mb-3">Coming Soon</div>
              <h3 className="text-2xl md:text-3xl font-semibold">{source.title ?? "This video is being prepared"}</h3>
              <p className="mt-3 text-sm text-[#B8B8B8] max-w-md">
                Message us on WhatsApp and we'll share a private class recording or arrange a free trial session.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: "var(--grad-ignite)", boxShadow: "var(--shadow-glow)" }}
              >
                <MessageCircle size={16} /> Request on WhatsApp
              </a>
            </div>
          )}
        </div>
        {source.title && hasVideo && (
          <p className="mt-4 text-sm text-[#B8B8B8] text-center">{source.title}</p>
        )}
      </div>
    </div>
  );
}
