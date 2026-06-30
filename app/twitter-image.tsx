import { renderShareImage, ogSize, ogAlt, ogContentType } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return renderShareImage();
}
