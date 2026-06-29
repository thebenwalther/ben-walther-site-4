export interface Program {
  tag: string;
  name: string;
  price: string;
  description: string;
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
}

export const programs: Program[] = [
  {
    tag: "One-off",
    name: "The Reset",
    price: "$295 · single 90-min session",
    description:
      "A deep, focused session to cut through the fog and leave with a clear, do-able next step.",
    ctaLabel: "Book a Reset",
  },
  {
    tag: "Three months",
    name: "1:1 Coaching",
    price: "$240 / session, every other week",
    description:
      "Six sessions plus weekly accountability to make real change stick. This is where transformation happens.",
    ctaLabel: "Apply for 1:1",
    featured: true,
    badge: "Most popular",
  },
  {
    tag: "Ongoing",
    name: "Inner Circle",
    price: "$420 / month",
    description:
      "Monthly coaching plus between-session support for people building something big and refusing to do it alone.",
    ctaLabel: "Enquire",
  },
];
