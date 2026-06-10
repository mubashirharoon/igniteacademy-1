import type { VideoSource } from "@/components/VideoModal";
import type { VideoCardData } from "@/components/VideoCard";

/**
 * Accepts ANY of the following and returns a clean VideoSource:
 *  - Full YouTube watch URL:   https://www.youtube.com/watch?v=ID
 *  - Short YouTube URL:        https://youtu.be/ID
 *  - YouTube embed URL:        https://www.youtube.com/embed/ID
 *  - YouTube Shorts URL:       https://www.youtube.com/shorts/ID
 *  - A pasted <iframe ...> embed code (we extract the src)
 *  - A raw YouTube/Vimeo ID
 *  - A Vimeo URL
 *  - A direct MP4 / WEBM / MOV URL
 *
 * Usage:
 *   video("https://youtu.be/abc123", "Polygons Explained")
 *   video('<iframe src="https://www.youtube.com/embed/abc123" ...>', "Title")
 */
export function video(input: string, title?: string): VideoSource {
  const raw = (input ?? "").trim();
  if (!raw) return { title };

  // If they pasted an <iframe ...> tag, pull the src out
  const iframeSrc = raw.match(/<iframe[^>]+src=["']([^"']+)["']/i)?.[1];
  const url = iframeSrc ?? raw;

  // MP4 / WEBM / MOV
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) {
    return { kind: "mp4", url, title };
  }

  // Vimeo
  if (/vimeo\.com|player\.vimeo\.com/.test(url)) {
    const id = url.match(/(?:vimeo\.com|player\.vimeo\.com)\/(?:video\/)?(\d+)/)?.[1];
    return { kind: "youtube" /* unused */, ...({ kind: "vimeo" } as const), url: id ?? url, title };
  }

  // YouTube — extract the 11-char video id from any common URL shape
  const ytId =
    url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{6,})/)?.[1] ??
    (/^[\w-]{6,}$/.test(url) ? url : undefined);

  return { kind: "youtube", url: ytId ?? url, title };
}

/** Build a demo class / testimonial card from a single paste. */
export function videoCard(args: {
  title: string;
  subject: string;
  teacher: string;
  duration?: string;
  /** Paste a YouTube link, iframe, Vimeo link, or MP4 URL. */
  embed: string;
  /** Optional title shown under the player (defaults to `title`). */
  playerTitle?: string;
}): VideoCardData {
  return {
    title: args.title,
    subject: args.subject,
    teacher: args.teacher,
    duration: args.duration,
    source: video(args.embed, args.playerTitle ?? args.title),
  };
}
