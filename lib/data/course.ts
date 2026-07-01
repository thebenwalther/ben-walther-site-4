export interface CoursePractice {
  prompt: string;
  placeholder: string;
}

export interface CourseDay {
  day: number;
  stage: string;
  title: string;
  /** Full lesson body, written as a real short email — one string per paragraph. */
  paragraphs: string[];
  practice: CoursePractice;
  /** Sign-off line under the practice box. */
  closing: string;
}

export const courseDays: CourseDay[] = [
  {
    day: 1,
    stage: "Get Clear",
    title: "Name the fog.",
    paragraphs: [
      "Hey — you're here because something's been sitting heavy and you can't quite put your finger on it. That's normal. Most people don't have a clarity problem. They have a naming problem. A stuck feeling stays enormous for exactly as long as it stays vague.",
      "It's rarely one crisis. It's a low hum made of a dozen unfinished conversations with yourself — the job that's fine but not right, the habit you keep meaning to fix, the thing you said you'd deal with \"eventually.\" Separately, none of them feel urgent. Together, they're loud enough to drown everything out.",
      "So today isn't about solving anything. It's about getting the noise out of your head and onto a page, where it's smaller and far more solvable than it feels at 11pm.",
    ],
    practice: {
      prompt:
        "Set a timer for five minutes. Write down everything that's nagging at you right now — fragments are fine, punctuation doesn't matter. Don't edit, don't solve, just empty the tank. When the timer ends, read it back once.",
      placeholder: "What's nagging at you right now? Don't overthink it — just start typing…",
    },
    closing: "Tomorrow we find the one thing underneath the many. For today, just get it out of your head.",
  },
  {
    day: 2,
    stage: "Get Clear",
    title: "Find the one thing.",
    paragraphs: [
      "Hey — yesterday you probably ended up with a list that looks like ten different problems. Here's something I've seen in almost everyone I've worked with: you don't have ten problems. You have one, wearing ten costumes.",
      "The job that feels stale, the relationship strain, the workout you keep skipping — they're often downstream of the same root: a decision you've been avoiding, or a version of yourself you've quietly stopped believing in. Find that root and a surprising number of the other items loosen on their own.",
      "You don't need to solve it today. You just need to find the thread that, if you pulled it, would move the most other things.",
    ],
    practice: {
      prompt:
        "Look back at yesterday's list. For each item, ask: \"If this were solved, would it change anything else on the list?\" Circle the ones that would. That's your one thing — write it as a single, plain sentence. No hedging.",
      placeholder: "The one thing underneath everything else is…",
    },
    closing: "Tomorrow, we look at why it's still sitting there, unsolved.",
  },
  {
    day: 3,
    stage: "Get Unstuck",
    title: "Spot the deal you're making.",
    paragraphs: [
      "Hey — if your one thing is still unsolved, it isn't because you're lazy or broken. It's because some part of you is getting paid to keep it exactly where it is. Every stuck place is protected by a quiet deal you made with yourself, usually years ago, usually without noticing.",
      "Common ones: stay safe, avoid the risk that might not pay off. Keep being right about how hard this is, so you never have to find out if you could've done it. Protect the identity of being the steady one, the reliable one, the one who doesn't rock the boat — even if it's costing you the bigger life.",
      "Naming the deal isn't about guilt. It's information. You can't renegotiate a contract you can't see.",
    ],
    practice: {
      prompt:
        "Finish this sentence honestly, even if it stings a little: \"If I don't solve this, I get to keep believing ___ about myself, or avoid feeling ___.\" Sit with whatever comes up — that sting is the deal, surfacing.",
      placeholder: "The deal I've been quietly making is…",
    },
    closing: "Tomorrow, we make the exit from that deal ridiculously small.",
  },
  {
    day: 4,
    stage: "Get Unstuck → Get Moving",
    title: "Shrink the first step.",
    paragraphs: [
      "Hey — big steps are for people who already have momentum. You don't yet, so today we're not aiming for the leap. We're aiming for something almost embarrassingly small.",
      "If the real goal is \"have the hard conversation,\" the two-minute version might be \"write the first sentence of what I'd say.\" That's it. Momentum compounds. Willpower doesn't. The tiny move you can actually repeat beats the dramatic one you'll only manage once.",
      "This will feel anticlimactic. That's the point — anticlimactic is repeatable. Repeatable is what actually changes something.",
    ],
    practice: {
      prompt:
        "Take your one thing from Day 2. Write the smallest possible action that moves it forward — something you could do in two minutes, right now, with zero preparation. Not the plan. The tiny, almost-silly first move.",
      placeholder: "The two-minute version of my next move is…",
    },
    closing: "Tomorrow's the last one — and it's the one that actually matters.",
  },
  {
    day: 5,
    stage: "Get Moving",
    title: "Make it a promise you'll keep.",
    paragraphs: [
      "Hey — self-trust isn't rebuilt with a plan. It's rebuilt with a promise you keep. Four days ago you named a fog nobody else could see, found the one thing underneath it, spotted the deal that was keeping you stuck, and shrank it down to something you could do in two minutes.",
      "Today's job is simple, not easy: actually take that step, and make it accountable. A specific time. A specific action. Someone who'll know whether you did it — even if that someone is just a friend you send one text to.",
      "This isn't the finish line. \"Reset\" is the right word for it — not a transformation, a true small move that proves something to yourself, quietly, the same way every move after this one will.",
    ],
    practice: {
      prompt:
        "Write your two-minute move as a specific promise: what, exactly when today, and who will know about it. Then close this and go do it before you do anything else.",
      placeholder: "My promise: I will ___ by ___ today, and ___ will know.",
    },
    closing:
      "That's the Reset — small, true, and yours. If you want a partner for what comes after this week, that's exactly what coaching is for.",
  },
];
