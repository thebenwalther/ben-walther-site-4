"use client";

import * as React from "react";
import { Button } from "@/components/ui";
import {
  questions,
  scaleLabels,
  dimensions,
  scoreAssessment,
  type AssessmentResult,
} from "@/lib/data/assessment";
import { AssessmentResultView } from "./AssessmentResult";
import styles from "./ClarityAssessment.module.css";

const STORAGE_KEY = "bw-clarity-assessment-v1";
const TOTAL = questions.length;

interface QuizState {
  answers: Record<string, number>;
  index: number;
  done: boolean;
  /** Flips true once the mount effect has read localStorage. */
  hydrated: boolean;
}

const DEFAULT_STATE: QuizState = { answers: {}, index: 0, done: false, hydrated: false };

function loadSavedState(): Omit<QuizState, "hydrated"> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { answers: {}, index: 0, done: false };
    const p = JSON.parse(raw);
    const answers: Record<string, number> = {};
    if (p.answers && typeof p.answers === "object") {
      for (const q of questions) {
        const v = (p.answers as Record<string, unknown>)[q.id];
        if (typeof v === "number" && v >= 1 && v <= 5) answers[q.id] = v;
      }
    }
    const answeredAll = questions.every((q) => answers[q.id]);
    return {
      answers,
      index: Math.min(Math.max(typeof p.index === "number" ? p.index : 0, 0), TOTAL - 1),
      done: Boolean(p.done) && answeredAll,
    };
  } catch {
    return { answers: {}, index: 0, done: false };
  }
}

/** Index of the next unanswered question at or after `from`, else the first unanswered anywhere, else -1. */
function nextUnanswered(answers: Record<string, number>, from: number): number {
  for (let i = from; i < TOTAL; i++) if (!answers[questions[i].id]) return i;
  for (let i = 0; i < from; i++) if (!answers[questions[i].id]) return i;
  return -1;
}

/**
 * The Clarity Assessment — the site's primary funnel. Twelve Likert
 * questions across three dimensions, scored entirely client-side, with
 * a personalized result. Progress and the finished result persist in
 * localStorage only (never sent anywhere), so a reload resumes instead
 * of restarting. Keys 1–5 answer the current question.
 */
export function ClarityAssessment() {
  const [s, setS] = React.useState<QuizState>(DEFAULT_STATE);

  React.useEffect(() => {
    // One-time sync from localStorage after mount; `hydrated` gates the
    // write-back effect so the pre-load default can't clobber a save.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setS({ ...loadSavedState(), hydrated: true });
  }, []);

  React.useEffect(() => {
    if (!s.hydrated) return;
    const { hydrated, ...persist } = s;
    void hydrated;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persist));
  }, [s]);

  const choose = React.useCallback((value: number) => {
    setS((prev) => {
      if (prev.done) return prev;
      const current = questions[prev.index];
      const answers = { ...prev.answers, [current.id]: value };
      const next = nextUnanswered(answers, prev.index + 1);
      if (next === -1) return { ...prev, answers, done: true };
      return { ...prev, answers, index: next };
    });
  }, []);

  // Keys 1–5 answer the current question.
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      const n = Number(e.key);
      if (n >= 1 && n <= 5) choose(n);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [choose]);

  function restart() {
    setS({ ...DEFAULT_STATE, hydrated: true });
  }

  if (!s.hydrated) {
    // Render nothing question-specific until storage is read, so a
    // resumed visitor never sees question 1 flash first.
    return <div className={styles.wrap} aria-hidden="true" style={{ minHeight: 420 }} />;
  }

  if (s.done) {
    const result: AssessmentResult = scoreAssessment(s.answers);
    return <AssessmentResultView result={result} onRestart={restart} />;
  }

  const current = questions[s.index];
  const dimMeta = dimensions[current.dimension];
  const answered = Object.keys(s.answers).length;

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>{dimMeta.label}</span>
        <span className={styles.progressCount}>
          Question {s.index + 1} of {TOTAL}
        </span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${(answered / TOTAL) * 100}%` }} />
      </div>

      <div className={styles.card}>
        <div className={styles.dimTag}>{dimMeta.stage}</div>
        <p className={styles.question} id="quiz-question">
          {current.text}
        </p>
        <div className={styles.scale} role="radiogroup" aria-labelledby="quiz-question">
          {scaleLabels.map((opt) => {
            const selected = s.answers[current.id] === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                className={`${styles.option} ${selected ? styles.optionSelected : ""}`}
                onClick={() => choose(opt.value)}
              >
                <span className={styles.dot} aria-hidden="true">
                  {selected ? <span className={styles.dotInner} /> : null}
                </span>
                {opt.label}
                <kbd className={styles.kbd} aria-hidden="true">
                  {opt.value}
                </kbd>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          className={styles.back}
          onClick={() => setS((prev) => ({ ...prev, index: Math.max(0, prev.index - 1) }))}
          disabled={s.index === 0}
        >
          ← Back
        </button>
        <span className={styles.hint}>Go with your gut — or just press 1–5.</span>
        {s.answers[current.id] ? (
          <Button
            variant="soft"
            size="sm"
            onClick={() =>
              setS((prev) => {
                const next = nextUnanswered(prev.answers, prev.index + 1);
                if (next === -1) return { ...prev, done: true };
                return { ...prev, index: next };
              })
            }
          >
            Next →
          </Button>
        ) : (
          <span style={{ width: 1 }} />
        )}
      </div>
    </div>
  );
}
