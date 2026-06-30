import { renderShareImage, ogSize, ogAlt, ogContentType } from "@/lib/og-image";
import { getGuide, guideSlugs } from "@/lib/data/guides";

export const runtime = "nodejs";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  return renderShareImage({
    kicker: guide ? guide.kind : "Free Guide",
    title: guide ? guide.title : "Free guide",
    cta: "Get the guide →",
  });
}
