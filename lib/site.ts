/**
 * Site-wide constants. `siteUrl` resolves automatically on Vercel and
 * can be overridden with NEXT_PUBLIC_SITE_URL (e.g. a custom domain).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const siteName = "Ben Walther";

export const siteTitle = "Ben Walther — Life & Personal Growth Coaching";

export const siteDescription =
  "Coaching for capable people who've quietly settled. Ben Walther helps you name the pattern that keeps you playing small and close the gap between who you've been and who you actually are. Start with the free Clarity Assessment.";

/** Public social profiles. */
export const socials = {
  x: { label: "X (Twitter)", handle: "@benmwalther", href: "https://x.com/benmwalther" },
  instagram: { label: "Instagram", handle: "@benmwalther", href: "https://instagram.com/benmwalther" },
  linkedin: { label: "LinkedIn", handle: "@benwalther", href: "https://www.linkedin.com/in/benwalther" },
} as const;
