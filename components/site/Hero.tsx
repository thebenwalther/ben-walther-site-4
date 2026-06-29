import Image from "next/image";
import { Button, Kicker, StatBlock } from "@/components/ui";
import { BookingCta } from "./BookingCta";
import headshot from "@/public/images/ben-headshot.jpg";
import styles from "./Hero.module.css";

function HeroChip({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={`${styles.chip} ${className}`}>{children}</div>;
}

/** Dark hero — headline, portrait with proof chips, and the stat strip. */
export function Hero() {
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
              You weren&apos;t built to settle.{" "}
              <span className={`bw-em ${styles.accentWord}`}>Let&apos;s prove it.</span>
            </h1>
            <p className={styles.lead}>
              High-accountability coaching for people who are finally ready to close the gap between who they are
              and who they know they could be.
            </p>
            <div className={styles.ctaRow}>
              <Button variant="accent" iconRight="→" href="/resources/clarity-assessment">
                Take the free Clarity Assessment
              </Button>
              <BookingCta variant="outline-on-dark" iconLeft="▶">
                Book a free intro call
              </BookingCta>
            </div>
            <div className={styles.proofRow}>
              <span className="bw-stars">★★★★★</span>{" "}
              <span>
                <b className={styles.proofStrong}>4.9</b> average · from 400+ clients coached
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
                <div className={styles.chipBig}>12 yrs</div>
                <div className={styles.chipSmall}>coaching</div>
              </div>
            </HeroChip>
            <HeroChip className={styles.chipBR}>
              <span className="bw-stars">★★★★★</span>
              <div className={styles.chipQuote}>&ldquo;Changed my whole year.&rdquo;</div>
            </HeroChip>
          </div>
        </div>
        <div className={styles.stats}>
          <StatBlock tone="dark" value="400" unit="+" label="clients coached" />
          <StatBlock tone="dark" value="1.2" unit="M" label="podcast downloads" />
          <StatBlock tone="dark" value="12" unit="yrs" label="in practice" />
          <StatBlock tone="dark" value="94" unit="%" label="renew or refer" />
        </div>
      </div>
    </section>
  );
}
