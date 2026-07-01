export interface FrameworkStage {
  n: string;
  title: string;
  summary: string;
  detail: string;
  practice: string;
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
    practice:
      "We map the gap between the life you're performing and the one you actually want, then name one true thing you've been avoiding saying out loud.",
  },
  {
    n: "02",
    title: "Get unstuck",
    summary: "We find the patterns keeping you in place and build the leverage to break them.",
    detail:
      "Clarity without movement just becomes a smarter way to stay stuck. Get Unstuck is where we find the specific pattern — the deal you keep making with yourself, the story that's protecting you from risk — and build enough leverage to break it on purpose, instead of waiting for a crisis to do it for you.",
    practice: "We identify your specific stuck-pattern and design the smallest possible action that breaks it this week.",
  },
  {
    n: "03",
    title: "Get moving",
    summary: "Weekly accountability and doable steps that compound into a different life.",
    detail:
      "Change isn't one big leap — it's a hundred small, honest choices in a row, made under real accountability. Get Moving is the sustained, weekly practice of doing the next true thing, with someone in your corner who won't let you quietly downgrade the goal.",
    practice: "We set a weekly cadence of small, specific commitments, plus a standing call where you can't hide.",
  },
];
