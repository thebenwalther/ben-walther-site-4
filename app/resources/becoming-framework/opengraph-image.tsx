import { renderShareImage, ogSize, ogAlt, ogContentType } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderShareImage({
    kicker: "The Framework",
    title: "Get clear. Get unstuck. Get moving.",
    cta: "Read the Becoming Framework →",
  });
}
