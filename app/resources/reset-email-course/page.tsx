import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { EmailGate } from "@/components/site/EmailGate";
import { courseDays } from "@/lib/data/course";
import styles from "./course.module.css";

export const metadata: Metadata = {
  title: "The 5-Day Reset — Ben Walther",
  description:
    "A free 5-day email course. One short, honest email a day that takes you from foggy to a single, doable next step — the opening sequence Ben uses with new 1:1 clients.",
};

export default function ResetCoursePage() {
  return (
    <>
      <PageHeader
        kicker="Free email course · 5 days"
        title={
          <>
            The 5-Day <span className="bw-em">Reset.</span>
          </>
        }
        lead="One short email a day for five days. By Friday you'll have moved from a vague, heavy stuck feeling to one specific, doable step — and actually taken it. No fluff, no 40-minute videos."
        back={{ href: "/resources", label: "All resources" }}
        wide
      />

      <section className={styles.section}>
        <div className="bw-container">
          <div className={styles.intro}>
            <p className={styles.introBody}>
              This is the exact opening sequence I run with new 1:1 clients — the part that turns &ldquo;I don&apos;t
              even know where to start&rdquo; into a first move by the end of the week. I packaged it as five
              emails so you can run it on yourself, for free, right now.
            </p>
            <p className={styles.introBody}>
              Each email takes about five minutes to read and asks one small thing of you. Here&apos;s the whole
              arc, so you know exactly what you&apos;re signing up for:
            </p>
          </div>

          <div className={styles.timeline}>
            {courseDays.map((d) => (
              <div key={d.day} className={styles.day}>
                <div className={styles.dayTag}>{d.day}</div>
                <div>
                  <h2 className={styles.dayTitle}>{d.title}</h2>
                  <p className={styles.dayBody}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gateWrap}>
        <div className={`bw-container ${styles.gateInner}`}>
          <EmailGate
            kicker="Start tomorrow morning"
            title="Send me Day 1"
            lead="Drop your email and Day 1 lands in your inbox tomorrow morning. Five days, five short emails, one real move."
            cta="Start the 5-Day Reset"
            placeholder="you@email.com"
            successTitle="You're in. Day 1 lands tomorrow."
            successBody="Watch your inbox in the morning. If it's hiding in spam or promotions, drag it to your main inbox so the rest arrive on time."
            note="Five emails over five days, then you're off the list unless you opt in. No spam."
          />
        </div>
      </section>
    </>
  );
}
