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

/**
 * The Clarity Assessment — the site's primary funnel. Twelve Likert
 * questions across three dimensions, scored entirely client-side, with
 * a personalized result that recommends the right next resource.
 */
export function ClarityAssessment() {
  const [answers, setAnswers] = React.useState<Record<string, number>>({});
  const [index, setIndex] = React.useState(0);
  const [result, setResult] = React.useState<AssessmentResult | null>(null);

  const total = questions.length;
  const current = questions[index];
  const dimMeta = dimensions[current?.dimension];

  function choose(value: number) {
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    // Advance, or finish on the last question.
    if (index + 1 < total) {
      window.setTimeout(() => setIndex((i) => i + 1), 160);
    } else {
      setResult(scoreAssessment(next));
    }
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setResult(null);
  }

  if (result) {
    return <AssessmentResultView result={result} onRestart={restart} />;
  }

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / total) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>{dimMeta.label}</span>
        <span className={styles.progressCount}>
          Question {index + 1} of {total}
        </span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${Math.max(progress, (index / total) * 100)}%` }} />
      </div>

      <div className={styles.card}>
        <div className={styles.dimTag}>{dimMeta.stage}</div>
        <p className={styles.question}>{current.text}</p>
        <div className={styles.scale}>
          {scaleLabels.map((opt) => {
            const selected = answers[current.id] === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                className={`${styles.option} ${selected ? styles.optionSelected : ""}`}
                onClick={() => choose(opt.value)}
              >
                <span className={styles.dot}>{selected ? <span className={styles.dotInner} /> : null}</span>
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          className={styles.back}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          ← Back
        </button>
        <span className={styles.hint}>Go with your gut — first instinct is usually the honest one.</span>
        {answers[current.id] && index + 1 < total ? (
          <Button variant="soft" size="sm" onClick={() => setIndex((i) => i + 1)}>
            Next →
          </Button>
        ) : (
          <span style={{ width: 1 }} />
        )}
      </div>
    </div>
  );
}
