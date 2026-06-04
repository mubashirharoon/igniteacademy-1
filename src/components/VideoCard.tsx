import { Play, Clock } from "lucide-react";
import type { VideoSource } from "./VideoModal";

export type VideoCardData = {
  title: string;
  subject?: string;
  teacher?: string;
  duration?: string;
  thumbnail?: string;
  source: VideoSource;
};

function ytThumb(source: VideoSource): string | undefined {
  if (!source.url) return undefined;
  if (source.kind === "mp4") return undefined;
  if (/vimeo\.com/.test(source.url)) return undefined;
  const id = source.url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{6,})/)?.[1] ?? source.url;
  if (!/^[\w-]{6,}$/.test(id)) return undefined;
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function VideoCard({
  data,
  onPlay,
  cta = "Watch Class",
}: {
  data: VideoCardData;
  onPlay: () => void;
  cta?: string;
}) {
  const thumb = data.thumbnail || ytThumb(data.source);
  return (
    <div className="glass rounded-2xl overflow-hidden hover-lift group flex flex-col">
      <button
        type="button"
        onClick={onPlay}
        className="relative block w-full aspect-video overflow-hidden text-left"
        aria-label={`Play ${data.title}`}
      >
        {thumb ? (
          <img
            src={thumb}
            alt={data.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid-paper opacity-50" />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="relative w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
            style={{
              background: "var(--grad-ignite)",
              boxShadow: "0 10px 40px -10px rgba(232,93,16,0.7), 0 0 0 6px rgba(232,93,16,0.15)",
            }}
          >
            <Play size={22} className="text-white ml-1" fill="currentColor" />
          </span>
        </div>
        {data.duration && (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-black/70 text-white border border-white/10">
            <Clock size={11} /> {data.duration}
          </span>
        )}
        {data.subject && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium text-white"
            style={{ background: "rgba(232,93,16,0.85)" }}>
            {data.subject}
          </span>
        )}
      </button>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold leading-snug">{data.title}</h3>
        {data.teacher && (
          <p className="mt-1 text-xs text-[#B8B8B8] uppercase tracking-wider">{data.teacher}</p>
        )}
        <button
          onClick={onPlay}
          className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-white border border-white/10 hover:border-[#E85D10]/60 hover:bg-[#E85D10]/10 transition self-start"
        >
          <Play size={14} /> {cta}
        </button>
      </div>
    </div>
  );
}
