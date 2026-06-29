import { FeatureCard } from "@/components/ui";
import { SectionHead } from "./SectionHead";
import styles from "./Outcomes.module.css";

/** "What changes" outcome grid. */
export function Outcomes() {
  return (
    <section id="out" className={styles.section}>
      <div className="bw-container">
        <SectionHead kicker="What changes" title="Six months from now, here's what's different." />
        <div className={styles.grid}>
          <FeatureCard icon="→" title="Clarity">
            You finally know what you actually want — not what you were told to.
          </FeatureCard>
          <FeatureCard icon="↑" title="Momentum">
            You&apos;re moving on the thing you&apos;ve been circling for years.
          </FeatureCard>
          <FeatureCard icon="◇" title="Steadiness">
            Setbacks stop derailing you. You recover in days, not months.
          </FeatureCard>
          <FeatureCard icon="✦" title="Confidence">
            You trust yourself again — and other people feel it.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
