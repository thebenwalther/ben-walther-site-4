import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { DownloadCard } from "@/components/site/DownloadCard";
import { Kicker, Button } from "@/components/ui";
import { framework } from "@/lib/data/framework";
import styles from "./framework.module.css";

export const metadata: Metadata = {
  title: "The Becoming Framework — Ben Walther",
  description:
    "The simple three-stage model behind every program: Get Clear, Get Unstuck, Get Moving. A full breakdown of each stage, where it goes wrong, and a practice you can run on yourself this week.",
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
        lead="The whole method, on one page. Three stages, in order. Trying to get moving before you're clear is why most change doesn't stick. Read it, then steal the practices."
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

          {/* The model, at a glance */}
          <div className={styles.model} aria-label="The three stages in order">
            {framework.map((s, i) => (
              <div key={s.n} className={styles.modelStage}>
                <div className={styles.modelNode}>
                  <span className={`bw-em ${styles.modelNum}`}>{s.n}</span>
                </div>
                <div className={styles.modelName}>{s.title}</div>
                {i < framework.length - 1 ? (
                  <div className={styles.modelArrow} aria-hidden="true">
                    →
                  </div>
                ) : null}
              </div>
            ))}
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

                <div className={styles.signs}>
                  <div className={styles.signsLabel}>You&apos;re in this stage if</div>
                  <ul className={styles.signsList}>
                    {s.signs.map((sign, i) => (
                      <li key={i} className={styles.signsItem}>
                        <span className={styles.signsMark} aria-hidden="true">
                          ✦
                        </span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className={styles.pitfall}>
                  <strong className={styles.pitfallLabel}>Where it goes wrong</strong>
                  {s.pitfall}
                </p>

                <div className={styles.practice}>
                  <div className={styles.practiceLabel}>Try it this week</div>
                  <p className={styles.practiceText}>{s.practice}</p>
                </div>

                <Link href={s.tool.href} className={styles.toolLink}>
                  The free tool for this stage: <b>{s.tool.title}</b> →
                </Link>
              </div>
            </div>
          ))}

          <div className={styles.downloadWrap}>
            <DownloadCard
              kicker="Keep the model"
              title="Download the one-page framework"
              lead="All three stages on a single printable page: the signs you're in each, where it goes wrong, and a practice for the week."
              cta="Download the one-pager"
              file="/downloads/becoming-framework.pdf"
            />
          </div>
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
            The Clarity Assessment tells you in five minutes, then points you to the practice built for your
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
