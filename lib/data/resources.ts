export type ResourceKind = "Tool" | "Framework" | "Course" | "Guide";

export interface Resource {
  slug: string;
  href: string;
  kind: ResourceKind;
  icon: string;
  title: string;
  blurb: string;
  meta: string;
  /** Highlighted on the hub as the primary, recommended starting point. */
  featured?: boolean;
}

export const resources: Resource[] = [
  {
    slug: "clarity-assessment",
    href: "/resources/clarity-assessment",
    kind: "Tool",
    icon: "◎",
    title: "The Clarity Assessment",
    blurb:
      "A free 5-minute self-assessment that scores where you are across the three things that decide whether you move: clarity, momentum, and self-trust. You get a personalized read and your first move — no email required to see it.",
    meta: "12 questions · instant result · free",
    featured: true,
  },
  {
    slug: "becoming-framework",
    href: "/resources/becoming-framework",
    kind: "Framework",
    icon: "✦",
    title: "The Becoming Framework",
    blurb:
      "The simple three-stage model behind every program I run: Get Clear, Get Unstuck, Get Moving. The full breakdown of each stage, where it goes wrong, and a practice you can run on yourself this week.",
    meta: "Deep-dive · printable one-pager · free",
  },
  {
    slug: "reset-email-course",
    href: "/resources/reset-email-course",
    kind: "Course",
    icon: "↗",
    title: "The 5-Day Reset",
    blurb:
      "A free email course. One short, honest email a day for five days that walks you from foggy to a single, doable next step. The same opening sequence I use with new 1:1 clients.",
    meta: "5 days · email course · free",
  },
  {
    slug: "values-compass",
    href: "/resources/guides/values-compass",
    kind: "Guide",
    icon: "◇",
    title: "The Values Compass",
    blurb:
      "A printable worksheet to surface the handful of values you actually live by — not the ones you'd put on a poster — and use them as a decision filter the next time you're stuck.",
    meta: "Worksheet · PDF · free",
  },
  {
    slug: "stuck-loop-map",
    href: "/resources/guides/stuck-loop-map",
    kind: "Guide",
    icon: "↺",
    title: "The Stuck-Loop Map",
    blurb:
      "A one-page diagnostic that helps you see the exact pattern keeping you in place — the trigger, the story, the small payoff — so you can interrupt it on purpose instead of waiting for a crisis.",
    meta: "Worksheet · PDF · free",
  },
  {
    slug: "hard-conversation-script",
    href: "/resources/guides/hard-conversation-script",
    kind: "Guide",
    icon: "❝",
    title: "The Hard-Conversation Script",
    blurb:
      "A fill-in-the-blank structure for the conversation you've been avoiding — the boundary, the ask, the truth. Four moves that keep it honest without it turning into a fight.",
    meta: "Template · PDF · free",
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export const guides = resources.filter((r) => r.kind === "Guide");
