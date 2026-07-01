import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { EmailGate } from "@/components/site/EmailGate";
import { CourseRunner } from "@/components/course/CourseRunner";
import styles from "./course.module.css";

export const metadata: Metadata = {
  title: "The 5-Day Reset — free course — Ben Walther",
  description:
    "A free 5-day course. One short, honest lesson a day that takes you from foggy to a single, do-able next step — the opening sequence Ben uses with new 1:1 clients. Start right now, no waiting on email.",
};

export default function ResetCoursePage() {
  return (
    <>
      <PageHeader
        kicker="Free course · 5 days"
        title={
          <>
            The 5-Day <span className="bw-em">Reset.</span>
          </>
        }
        lead="Five short lessons that move you from a vague, heavy stuck-feeling to one specific, do-able step — and actually taking it. No fluff, no 40-minute videos. Day 1 is completely free below — no email required."
        back={{ href: "/resources", label: "All resources" }}
        wide
      />

      <section className={styles.section}>
        <div className="bw-container">
          <div className={styles.intro}>
            <p className={styles.introBody}>
              This is the exact opening sequence I run with new 1:1 clients — the part that turns &ldquo;I don&apos;t
              even know where to start&rdquo; into a first move by the end of the week. Read Day 1 free below, no
              email needed. Like it? Drop your email afterward and Days 2–5 open right up — no waiting, no drip.
            </p>
          </div>

          <CourseRunner />
        </div>
      </section>

      <section className={styles.gateWrap}>
        <div className={`bw-container ${styles.gateInner}`}>
          <EmailGate
            kicker="Prefer the classic pace?"
            title="Get it delivered one email a day"
            lead="Rather than reading all of Days 2–5 at once, get them the traditional way — one email a day for five days, so it's harder to skip ahead and easier to actually finish."
            cta="Send me the emails"
            placeholder="you@email.com"
            successTitle="You're in. Day 1 lands tomorrow."
            successBody="Watch your inbox in the morning — and if it's hiding in spam or promotions, drag it to your main inbox so the rest arrive on time."
            note="Five emails over five days, then you're off the list unless you opt in. No spam."
          />
        </div>
      </section>
    </>
  );
}
