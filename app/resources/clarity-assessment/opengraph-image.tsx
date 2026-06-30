import { renderShareImage, ogSize, ogAlt, ogContentType } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderShareImage({
    kicker: "Free Tool · 5 Minutes",
    title: "Where's the gap, really?",
    cta: "Take the free Clarity Assessment →",
  });
}
