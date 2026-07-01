export type Dimension = "clarity" | "momentum" | "trust";

export interface DimensionMeta {
  key: Dimension;
  label: string;
  /** One-line description shown on the result breakdown. */
  blurb: string;
  /** Maps to the Becoming Framework stage this dimension feeds. */
  stage: string;
  /** Resource recommended when this is the weakest dimension. */
  recommend: {
    title: string;
    href: string;
    why: string;
  };
}

export interface Question {
  id: string;
  dimension: Dimension;
  text: string;
  /** When true, agreement is healthy. When false, the scale is reversed (agreement = struggle). */
  positive: boolean;
}

export const dimensions: Record<Dimension, DimensionMeta> = {
  clarity: {
    key: "clarity",
    label: "Clarity",
    blurb: "How clearly you can name what you actually want — underneath the shoulds.",
    stage: "Get Clear",
    recommend: {
      title: "The Values Compass",
      href: "/resources/guides/values-compass",
      why: "Your sharpest gap is clarity. The Values Compass surfaces the handful of values you actually live by so you have something solid to decide against.",
    },
  },
  momentum: {
    key: "momentum",
    label: "Momentum",
    blurb: "Whether you're actually moving, or circling the same thing on repeat.",
    stage: "Get Unstuck → Get Moving",
    recommend: {
      title: "The Stuck-Loop Map",
      href: "/resources/guides/stuck-loop-map",
      why: "Your sharpest gap is momentum. The Stuck-Loop Map shows you the exact pattern keeping you in place so you can interrupt it on purpose.",
    },
  },
  trust: {
    key: "trust",
    label: "Self-trust",
    blurb: "How much you trust yourself to follow through and recover from setbacks.",
    stage: "Get Moving",
    recommend: {
      title: "The 5-Day Reset",
      href: "/resources/reset-email-course",
      why: "Your sharpest gap is self-trust. The 5-Day Reset rebuilds it the only way it's ever rebuilt — one small kept promise at a time.",
    },
  },
};

export const questions: Question[] = [
  // Clarity
  { id: "c1", dimension: "clarity", text: "I can clearly name what I actually want for the next year of my life.", positive: true },
  { id: "c2", dimension: "clarity", text: "Most of my goals are things I genuinely want — not things I feel I should want.", positive: true },
  { id: "c3", dimension: "clarity", text: "I often feel a vague dissatisfaction I can't quite put into words.", positive: false },
  { id: "c4", dimension: "clarity", text: "When I make a decision, I know which of my values it's serving.", positive: true },
  // Momentum
  { id: "m1", dimension: "momentum", text: "I'm actively moving on the thing that matters most to me right now.", positive: true },
  { id: "m2", dimension: "momentum", text: "I've been circling the same change for a long time without really starting.", positive: false },
  { id: "m3", dimension: "momentum", text: "Most weeks, I take a meaningful step toward what I want.", positive: true },
  { id: "m4", dimension: "momentum", text: "I tend to wait until I feel ready before I act.", positive: false },
  // Self-trust
  { id: "t1", dimension: "trust", text: "When I commit to something for myself, I follow through.", positive: true },
  { id: "t2", dimension: "trust", text: "A setback can knock me off course for weeks.", positive: false },
  { id: "t3", dimension: "trust", text: "I trust my own judgment without needing outside permission.", positive: true },
  { id: "t4", dimension: "trust", text: "I keep the promises I make to myself as well as the ones I make to others.", positive: true },
];

export const scaleLabels = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export interface DimensionScore {
  dimension: Dimension;
  /** 0–100 */
  percent: number;
}

export interface AssessmentResult {
  scores: DimensionScore[];
  /** 0–100 average across dimensions. */
  overall: number;
  /** The weakest dimension — drives the recommendation. */
  weakest: Dimension;
  band: { label: string; summary: string };
}

/** Convert a single answer to a 1–5 healthy-direction score. */
function normalizeAnswer(q: Question, raw: number): number {
  return q.positive ? raw : 6 - raw;
}

export function scoreAssessment(answers: Record<string, number>): AssessmentResult {
  const byDim: Record<Dimension, number[]> = { clarity: [], momentum: [], trust: [] };
  for (const q of questions) {
    const raw = answers[q.id];
    if (raw) byDim[q.dimension].push(normalizeAnswer(q, raw));
  }

  const scores: DimensionScore[] = (Object.keys(byDim) as Dimension[]).map((dim) => {
    const vals = byDim[dim];
    const max = vals.length * 5;
    const sum = vals.reduce((a, b) => a + b, 0);
    const percent = max === 0 ? 0 : Math.round((sum / max) * 100);
    return { dimension: dim, percent };
  });

  const overall = Math.round(scores.reduce((a, s) => a + s.percent, 0) / scores.length);
  const weakest = [...scores].sort((a, b) => a.percent - b.percent)[0].dimension;

  return { scores, overall, weakest, band: bandFor(overall) };
}

function bandFor(overall: number): { label: string; summary: string } {
  if (overall >= 75) {
    return {
      label: "You're in motion",
      summary:
        "You've got real momentum and a strong sense of direction. The work now isn't a reset — it's leverage. The right structure could turn a good trajectory into a great one.",
    };
  }
  if (overall >= 50) {
    return {
      label: "You're on the edge of a shift",
      summary:
        "You're not stuck, exactly, but you're not moving the way you know you could. Most of it comes down to one gap. Close it, and a lot loosens at once.",
    };
  }
  return {
    label: "You're ready for a reset",
    summary:
      "It feels heavier than it should right now, and that's worth taking seriously — not as proof anything's wrong with you, but as a signal you've been carrying this alone for a while. A clear first move changes more than you'd think.",
  };
}
