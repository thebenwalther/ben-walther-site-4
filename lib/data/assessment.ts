export type Dimension = "clarity" | "momentum" | "trust";

/** Score-aware read of one dimension: what it means, and one small move. */
export interface InsightTier {
  insight: string;
  action: string;
}

export interface DimensionMeta {
  key: Dimension;
  label: string;
  /** One-line description shown on the result breakdown. */
  blurb: string;
  /** Maps to the Becoming Framework stage this dimension feeds. */
  stage: string;
  /** Personalized read per score tier: low < 50, mid 50–74, high ≥ 75. */
  tiers: { low: InsightTier; mid: InsightTier; high: InsightTier };
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
    tiers: {
      low: {
        insight:
          "Right now the loudest voice in your head probably isn't yours. That vague dissatisfaction you can't name is usually a buried want, not a missing one.",
        action: "Tonight, finish this sentence in writing: \"If nobody would judge me, I would…\" Don't solve it. Just say it.",
      },
      mid: {
        insight:
          "You get real glimpses of what you want; they just haven't hardened into something you'd say out loud yet.",
        action: "Say the want out loud to one person this week. Naming it in front of someone makes it real.",
      },
      high: {
        insight: "You know what you want. Clarity isn't your gap, so don't let more planning become a hiding place.",
        action: "Skip the next round of clarifying. Put a date on the next move instead.",
      },
    },
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
    tiers: {
      low: {
        insight:
          "You've been circling — not because you're lazy, but because the loop is protecting you from a risk it never names.",
        action: "Pick the two-minute version of the thing you've been avoiding and do it before tomorrow night.",
      },
      mid: {
        insight: "You move, then stall, then move again. That's not a willpower problem; it's a missing cadence.",
        action: "Set one specific, repeatable weekly step. Make it small enough to survive a bad week.",
      },
      high: {
        insight: "You're moving. The risk at this level is drift: motion that quietly stops pointing at what matters.",
        action: "Once this week, ask: is this aimed at what I actually want, or just at what's next?",
      },
    },
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
    tiers: {
      low: {
        insight:
          "Somewhere along the way you stopped believing your own word to yourself. That isn't permanent; it's just untrained.",
        action: "Make one absurdly small promise to yourself tonight and keep it. Repeat tomorrow.",
      },
      mid: {
        insight:
          "You follow through when the stakes are visible. The gap shows up in the quiet promises nobody's watching.",
        action: "Tell one person about your next commitment. Borrowed accountability builds the internal kind.",
      },
      high: {
        insight: "You keep your word to yourself — the strongest predictor of change there is. Put it to work.",
        action: "Raise the stakes: commit to the bigger version of your next step, not the safe one.",
      },
    },
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

/** Map a 0–100 dimension score to its insight-tier key. */
export function tierFor(percent: number): "low" | "mid" | "high" {
  return percent >= 75 ? "high" : percent >= 50 ? "mid" : "low";
}

function bandFor(overall: number): { label: string; summary: string } {
  if (overall >= 80) {
    return {
      label: "You're in motion",
      summary:
        "You've got real momentum and a strong sense of direction. The work now isn't a reset — it's leverage. The right structure could turn a good trajectory into a great one.",
    };
  }
  if (overall >= 60) {
    return {
      label: "You're closer than it feels",
      summary:
        "Most of the machinery is working. One dimension is quietly taxing the other two, and that's where the leverage is. Close that gap and the rest compounds.",
    };
  }
  if (overall >= 40) {
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
