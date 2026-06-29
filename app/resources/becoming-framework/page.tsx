import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Kicker, Button } from "@/components/ui";
import { framework } from "@/lib/data/framework";
import styles from "./framework.module.css";

export const metadata: Metadata = {
  title: "The Becoming Framework — Ben Walther",
  description:
    "The simple three-stage model behind every program: Get Clear, Get Unstuck, Get Moving. A full breakdown of each stage and a practice you can run on yourself this week.",
};

export default function BecomingFrameworkPage() {
  return (
    <>
      <PageHeader
        kicker="Framework"
        title={
          <>
            The Becoming <span className="bw-em">Framework.</span>
          </>
        }
        lead="The whole method, on one page. Three stages, in order — because trying to get moving before you're clear is why most change doesn't stick. Read it, then steal the practices."
        back={{ href: "/resources", label: "All resources" }}
        wide
      />

      <section className={styles.section}>
        <div className="bw-container">
          <div className={styles.intro}>
            <p className={styles.introBody}>
              Almost everyone I meet is trying to solve the wrong stage. They&apos;re grinding on willpower
              (stage three) when the real problem is they were never clear on what they wanted in the first place
              (stage one). So they work harder at the wrong thing, fail, and quietly decide the problem is them.
            </p>
            <p className={styles.introBody}>
              It isn&apos;t. It&apos;s sequence. Get these three in order and change stops feeling like force —
              it starts feeling like gravity.
            </p>
          </div>

          {framework.map((s) => (
            <div key={s.n} className={styles.stage}>
              <div className={styles.stageLeft}>
                <div className={styles.stageNum}>{s.n}</div>
                <h2 className={styles.stageName}>{s.title}</h2>
                <div className={styles.stageStage}>Stage {s.n}</div>
              </div>
              <div>
                <p className={styles.stageSummary}>{s.summary}</p>
                <p className={styles.stageDetail}>{s.detail}</p>
                <div className={styles.practice}>
                  <div className={styles.practiceLabel}>Try this this week</div>
                  <p className={styles.practiceText}>{s.practice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div aria-hidden="true" className={styles.ctaGlow} />
        <div className={`bw-container ${styles.ctaInner}`}>
          <Kicker tone="on-dark" spark>
            Find your stage
          </Kicker>
          <h2 className={styles.ctaTitle}>
            Not sure which stage you&apos;re <span className="bw-em">actually</span> in?
          </h2>
          <p className={styles.ctaLead}>
            The Clarity Assessment tells you in five minutes — and points you to the practice built for your
            sharpest gap.
          </p>
          <Button variant="accent" iconRight="→" href="/resources/clarity-assessment">
            Take the free Clarity Assessment
          </Button>
        </div>
      </section>
    </>
  );
}
