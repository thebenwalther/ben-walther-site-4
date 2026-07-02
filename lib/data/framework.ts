export interface FrameworkStage {
  n: string;
  title: string;
  summary: string;
  detail: string;
  /** Self-location checks: "you're in this stage if…" */
  signs: string[];
  /** Where this stage tends to go wrong. */
  pitfall: string;
  practice: string;
  /** The free tool built for this stage. */
  tool: { title: string; href: string };
}

/**
 * The Becoming Framework — Ben's signature 3-stage model. Shown as a
 * condensed "How it works" strip on the homepage and expanded in full
 * on /resources/becoming-framework.
 */
export const framework: FrameworkStage[] = [
  {
    n: "01",
    title: "Get clear",
    summary: "We cut through the noise and name what actually matters to you — underneath the shoulds.",
    detail:
      "Most people don't have a clarity problem — they have a noise problem. Years of other people's expectations, old decisions, and quiet self-protection have buried the thing you actually want under the thing you think you should want. Get Clear is the work of separating those two voices so you can hear your own again.",
    signs: [
      "You're busy, but you couldn't say what it's all for",
      "Your goals sound suspiciously like someone else's",
      "You feel a vague dissatisfaction you can't quite name",
    ],
    pitfall:
      "The trap here is endless reflection. Clarity is a starting line, not a destination. At some point you stop journaling about the fog and name one true thing.",
    practice:
      "We map the gap between the life you're performing and the one you actually want, then name one true thing you've been avoiding saying out loud.",
    tool: { title: "The Values Compass", href: "/resources/guides/values-compass" },
  },
  {
    n: "02",
    title: "Get unstuck",
    summary: "We find the patterns keeping you in place and build the leverage to break them.",
    detail:
      "Clarity without movement just becomes a smarter way to stay stuck. Get Unstuck is where we find the specific pattern — the deal you keep making with yourself, the story that's protecting you from risk — and build enough leverage to break it on purpose, instead of waiting for a crisis to do it for you.",
    signs: [
      "You know what you want and still don't move",
      "You keep re-planning the same first step",
      "Every “almost” has the same quiet excuse underneath",
    ],
    pitfall:
      "The trap is mistaking motion for progress: new plans, new research, new tools, same loop. The loop doesn't need more input. It needs to be seen.",
    practice: "We identify your specific stuck-pattern and design the smallest possible action that breaks it this week.",
    tool: { title: "The Stuck-Loop Map", href: "/resources/guides/stuck-loop-map" },
  },
  {
    n: "03",
    title: "Get moving",
    summary: "Weekly accountability and doable steps that compound into a different life.",
    detail:
      "Change isn't one big leap — it's a hundred small, honest choices in a row, made under real accountability. Get Moving is the sustained, weekly practice of doing the next true thing, with someone in your corner who won't let you quietly downgrade the goal.",
    signs: [
      "You start strong and fade by week three",
      "You negotiate with your own commitments",
      "One setback can cost you a month",
    ],
    pitfall:
      "The trap is betting on intensity. Willpower is a sprinter; cadence is a marathoner. If the plan only works on your best weeks, it isn't a plan.",
    practice: "We set a weekly cadence of small, specific commitments, plus a standing call where you can't hide.",
    tool: { title: "The 5-Day Reset", href: "/resources/reset-email-course" },
  },
];
