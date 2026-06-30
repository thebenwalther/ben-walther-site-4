import { renderShareImage, ogSize, ogAlt, ogContentType } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderShareImage({
    kicker: "Free Email Course · 5 Days",
    title: "Five days from foggy to a first move.",
    cta: "Start the 5-Day Reset →",
  });
}
