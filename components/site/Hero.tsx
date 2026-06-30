import type { ReactNode } from "react";
import Image from "next/image";
import { Button, Kicker, StatBlock } from "@/components/ui";
import { BookingCta } from "./BookingCta";
import headshot from "@/public/images/ben-headshot.jpg";
import styles from "./Hero.module.css";

function HeroChip({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={`${styles.chip} ${className}`}>{children}</div>;
}

const defaultLead = (
  <>
    Coaching for capable people who&apos;ve quietly settled. I&apos;ll help you name the pattern that keeps you
    playing small — and close the gap between who you&apos;ve been and who you actually are.
  </>
);

/** Dark hero — headline, portrait with proof chips, and the stat strip. */
export function Hero({ lead = defaultLead }: { lead?: ReactNode } = {}) {
  return (
    <section className={styles.hero}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={`bw-container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <Kicker tone="on-dark" spark>
              Life &amp; Personal Growth Coach
            </Kicker>
            <h1 className={styles.headline}>
              You weren&apos;t created to settle.{" "}
              <span className={`bw-em ${styles.accentWord}`}>Let&apos;s prove it.</span>
            </h1>
            <p className={styles.lead}>{lead}</p>
            <div className={styles.ctaRow}>
              <Button variant="accent" iconRight="→" href="/resources/clarity-assessment">
                Take the free Clarity Assessment
              </Button>
              <BookingCta variant="outline-on-dark" iconLeft="▶">
                Book a free intro call
              </BookingCta>
            </div>
            <div className={styles.proofRow}>
              <span className="bw-stars" aria-hidden="true">
                ✦
              </span>{" "}
              <span>
                <b className={styles.proofStrong}>15 years</b> in classrooms and on courts — now in your corner
              </span>
            </div>
          </div>
          <div className={styles.photoWrap}>
            <div className={styles.photo}>
              <Image
                src={headshot}
                alt="Ben Walther"
                fill
                sizes="(max-width: 980px) 100vw, 520px"
                priority
              />
            </div>
            <HeroChip className={styles.chipTL}>
              <div className={styles.chipIcon}>✦</div>
              <div>
                <div className={styles.chipBig}>15 yrs</div>
                <div className={styles.chipSmall}>educator &amp; coach</div>
              </div>
            </HeroChip>
            <HeroChip className={styles.chipBR}>
              <div className={styles.chipIcon}>✦</div>
              <div>
                <div className={styles.chipBig}>1,000s</div>
                <div className={styles.chipSmall}>students &amp; athletes</div>
              </div>
            </HeroChip>
          </div>
        </div>
        <div className={styles.stats}>
          <StatBlock tone="dark" value="15" unit="yrs" label="as an educator & coach" />
          <StatBlock tone="dark" value="1,000s" label="students & athletes guided" />
        </div>
      </div>
    </section>
  );
}
