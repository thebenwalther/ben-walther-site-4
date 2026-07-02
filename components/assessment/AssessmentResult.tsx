import * as React from "react";
import { Button } from "@/components/ui";
import { BookingCta } from "@/components/site/BookingCta";
import { EmailGate } from "@/components/site/EmailGate";
import { dimensions, tierFor, type AssessmentResult as Result } from "@/lib/data/assessment";
import styles from "./AssessmentResult.module.css";

export function AssessmentResultView({ result, onRestart }: { result: Result; onRestart: () => void }) {
  const rec = dimensions[result.weakest].recommend;

  return (
    <div className={styles.wrap}>
      <div className={styles.bandTag}>Your result</div>
      <h2 className={styles.bandTitle}>{result.band.label}.</h2>
      <p className={styles.bandSummary}>{result.band.summary}</p>

      <div className={styles.scoreRow}>
        <div className={styles.scoreNum}>
          {result.overall}
          <span className={styles.scoreUnit}>/100</span>
        </div>
        <div className={styles.scoreLabel}>your overall score across clarity, momentum &amp; self-trust</div>
      </div>

      <div className={styles.bars}>
        {result.scores.map((s) => {
          const meta = dimensions[s.dimension];
          const weak = s.dimension === result.weakest;
          const tier = meta.tiers[tierFor(s.percent)];
          return (
            <div key={s.dimension} className={styles.bar}>
              <div className={styles.barHead}>
                <span className={`${styles.barLabel} ${weak ? styles.barWeak : ""}`}>
                  {meta.label}
                  {weak ? " — your sharpest gap" : ""}
                </span>
                <span className={styles.barPct}>{s.percent}%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: `${s.percent}%` }} />
              </div>
              <p className={styles.insight}>{tier.insight}</p>
              <div className={styles.action}>
                <span className={styles.actionLabel}>Try this</span>
                <span className={styles.actionText}>{tier.action}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.rec}>
        <div className={styles.recKicker}>Your recommended next move</div>
        <h3 className={styles.recTitle}>{rec.title}</h3>
        <p className={styles.recWhy}>{rec.why}</p>
        <div className={styles.recRow}>
          <Button variant="accent" iconRight="→" href={rec.href}>
            Start with {rec.title}
          </Button>
          <Button variant="outline-on-dark" href="/resources">
            See all resources
          </Button>
        </div>
      </div>

      <div className={styles.emailBlock}>
        <EmailGate
          kicker="Optional — your result stays free either way"
          title="Want this in your inbox?"
          lead="I'll send you this breakdown plus one short exercise for each of your three scores, so it doesn't vanish into a closed tab."
          cta="Email me my results"
          successTitle="Sent."
          successBody="Your breakdown is on its way. When you're ready for the next step, the recommendation above is where I'd start."
          note="Just your results and the exercises. No spam, unsubscribe anytime."
        />
      </div>

      <div className={styles.secondary}>
        <BookingCta variant="soft" context="Free intro call">
          Want to talk it through? Book a free intro call
        </BookingCta>
        <button type="button" className={styles.restart} onClick={onRestart}>
          Retake the assessment
        </button>
      </div>
    </div>
  );
}
