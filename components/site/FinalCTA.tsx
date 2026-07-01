import { Button, Kicker } from "@/components/ui";
import { BookingCta } from "./BookingCta";
import styles from "./FinalCTA.module.css";

/**
 * Closing CTA. Primary action is the free Clarity Assessment (the
 * site's main funnel); booking a call is the lower-commitment second
 * step for people who already know they want to talk.
 */
export function FinalCTA() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={`bw-container ${styles.inner}`}>
        <Kicker tone="on-dark" spark>
          Your move
        </Kicker>
        <h2 className={styles.title}>
          The gap won&apos;t close <span className={`bw-em ${styles.accentWord}`}>by itself.</span>
        </h2>
        <p className={styles.lead}>
          Start with the free Clarity Assessment. Five minutes to see exactly where the gap is — and the first
          move to close it.
        </p>
        <div className={styles.ctaRow}>
          <Button variant="accent" iconRight="→" href="/resources/clarity-assessment">
            Take the free Clarity Assessment
          </Button>
          <BookingCta variant="outline-on-dark">Or book a free intro call</BookingCta>
        </div>
        <p className={styles.note}>No cost. No pressure. No spam. Just a clear read on where you are.</p>
      </div>
    </section>
  );
}
