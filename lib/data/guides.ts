export interface GuideStep {
  title: string;
  body: string;
}

export interface GuideContent {
  slug: string;
  kind: string;
  title: string;
  accentWord?: string;
  lead: string;
  /** Short intro paragraphs above the steps. */
  intro: string[];
  /** "What's inside" bullet list. */
  inside: string[];
  /** The actual numbered method — real, usable content. */
  steps: GuideStep[];
  /** Closing line under the steps. */
  outro: string;
  download: {
    title: string;
    lead: string;
    cta: string;
  };
}

export const guideContent: Record<string, GuideContent> = {
  "values-compass": {
    slug: "values-compass",
    kind: "Guide · Worksheet",
    title: "The Values Compass",
    accentWord: "Compass",
    lead: "A worksheet to surface the handful of values you actually live by — not the ones you'd put on a poster — and use them as a decision filter the next time you're stuck.",
    intro: [
      "Most \"values exercises\" hand you a list of 200 nice words and ask you to circle ten. You end up with honesty, growth, family — a list that describes a good person, not you. Useless when you're standing at an actual fork in the road.",
      "This one works backwards. Instead of picking values you admire, it reverse-engineers the ones you already defend, spend on, and lose track of time inside. Those are the real ones.",
    ],
    inside: [
      "A four-pass method to find your true values from evidence, not aspiration",
      "The \"two-values conflict\" exercise for decisions that feel impossible",
      "A one-line decision filter you can use in the moment",
      "A printable page to keep where you'll actually see it",
    ],
    steps: [
      {
        title: "Mine your evidence, not your ideals",
        body: "Write down three moments from the last year when you felt most alive, and three when you felt most resentful. Don't interpret yet — just capture them. Your values live in the pattern underneath, not in the words you'd choose for a bio.",
      },
      {
        title: "Name the value under each moment",
        body: "For each alive moment, ask: what was being honored here? For each resentful moment, ask: what was being violated? Resentment is one of the most honest signals you have — it fires when something you value is being stepped on.",
      },
      {
        title: "Cut the list to five",
        body: "You'll have a dozen. Force it down to five by asking of each: \"Have I sacrificed something real to protect this?\" If the answer is no, it's an aspiration, not a value. Aspirations are fine — but they don't belong on the compass.",
      },
      {
        title: "Write your decision filter",
        body: "Turn your top value into a single question you can ask in the moment, e.g. \"Does this protect my freedom or trade it away?\" When you're stuck, you don't need more options — you need a sharper filter. This is it.",
      },
    ],
    outro:
      "Keep the finished page somewhere you'll see it before the next hard decision — not after. That's the whole point.",
    download: {
      title: "Get the printable Values Compass",
      lead: "The full worksheet as a clean, printable PDF — the four passes, the conflict exercise, and a page to keep.",
      cta: "Send me the worksheet",
    },
  },
  "stuck-loop-map": {
    slug: "stuck-loop-map",
    kind: "Guide · Worksheet",
    title: "The Stuck-Loop Map",
    accentWord: "Map",
    lead: "A one-page diagnostic that helps you see the exact pattern keeping you in place — the trigger, the story, the small payoff — so you can interrupt it on purpose instead of waiting for a crisis.",
    intro: [
      "Being stuck almost never feels like a loop from the inside. It feels like a series of reasonable, one-off decisions to wait. But zoom out and there's a circuit running: the same trigger, the same story you tell yourself, the same quiet relief when you let yourself off the hook again.",
      "You can't break a pattern you can't see. This maps it.",
    ],
    inside: [
      "The four-part anatomy of a stuck-loop",
      "How to spot the hidden payoff that keeps it running",
      "The single highest-leverage place to interrupt the circuit",
      "A worked example, plus a blank map to fill in",
    ],
    steps: [
      {
        title: "Name the loop in one sentence",
        body: "\"I keep ___ instead of ___.\" Be specific and unflattering. \"I keep researching instead of starting\" beats \"I struggle with motivation.\" Vague problems can't be interrupted; specific ones can.",
      },
      {
        title: "Find the trigger",
        body: "What reliably comes right before the loop fires? A feeling (overwhelm), a time (Sunday night), a situation (an empty calendar)? The trigger is where interruption is cheapest — long before willpower is involved.",
      },
      {
        title: "Catch the story",
        body: "In the moment, what do you tell yourself that makes waiting feel reasonable? \"I'll do it when things calm down.\" \"I need to think about it more.\" Write it word-for-word. The story is the load-bearing wall of the loop.",
      },
      {
        title: "Expose the payoff",
        body: "Here's the uncomfortable one: staying stuck is paying you something. Safety from failure? Permission to rest? Being right about how hard it is? Name it honestly — because you'll need to get that payoff another way before you'll let the loop go.",
      },
      {
        title: "Pick one interruption",
        body: "Choose the smallest move that breaks the circuit at the trigger or the story — not the whole goal. \"When I notice the 'when things calm down' story, I do two minutes of the real thing.\" Small, specific, repeatable.",
      },
    ],
    outro: "Run the map on one loop. Just one. The skill transfers; the relief is immediate.",
    download: {
      title: "Get the printable Stuck-Loop Map",
      lead: "The blank map, the worked example, and the interruption planner as a printable PDF.",
      cta: "Send me the map",
    },
  },
  "hard-conversation-script": {
    slug: "hard-conversation-script",
    kind: "Guide · Template",
    title: "The Hard-Conversation Script",
    accentWord: "Script",
    lead: "A fill-in-the-blank structure for the conversation you've been avoiding — the boundary, the ask, the truth. Four moves that keep it honest without it turning into a fight.",
    intro: [
      "The conversation you're avoiding is rarely as dangerous as the avoiding. Avoidance leaks — into resentment, distance, and the version of you that's smaller around that person. The conversation itself, structured well, is usually shorter and kinder than the months of dread.",
      "This isn't a manipulation script. It's a structure for saying the true thing cleanly, so the other person can actually hear it.",
    ],
    inside: [
      "The four-move structure: Frame, Truth, Impact, Ask",
      "How to open so the other person doesn't go straight to defense",
      "Language that's direct without being a weapon",
      "A fill-in-the-blank template you can draft before you speak",
    ],
    steps: [
      {
        title: "Frame — set the table",
        body: "Open by naming why you're raising it and what you're hoping for. \"I want to talk about something because the relationship matters to me, not because I'm angry.\" The frame tells their nervous system whether this is an attack or an invitation. Get it right and they stay in the room.",
      },
      {
        title: "Truth — say the actual thing",
        body: "One clear sentence, no preamble, no five qualifiers. \"When plans change last-minute, I end up feeling like an afterthought.\" Use \"I\" and describe the specific behavior, not their character. Specific is kind; vague is an ambush.",
      },
      {
        title: "Impact — make it human",
        body: "Briefly name the cost — to you, to them, to the thing you share. Not to guilt-trip, but so the stakes are real. \"It's made me start holding back, and I don't want to be someone who holds back with you.\"",
      },
      {
        title: "Ask — be concrete",
        body: "End with a specific, do-able request, not a vague hope. \"Could we lock plans the day before instead of the hour of?\" An ask gives them a way to say yes. A complaint just gives them something to defend against.",
      },
    ],
    outro:
      "Draft it in the template first, read it once out loud, then have the conversation while it's still uncomfortable. Waiting only raises the stakes.",
    download: {
      title: "Get the Hard-Conversation template",
      lead: "The four-move template with prompts for each part, plus example phrasing, as a printable PDF.",
      cta: "Send me the template",
    },
  },
};

export function getGuide(slug: string): GuideContent | undefined {
  return guideContent[slug];
}

export const guideSlugs = Object.keys(guideContent);
