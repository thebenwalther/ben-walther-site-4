import { StatBlock, Testimonial } from "@/components/ui";
import { testimonials } from "@/lib/data/testimonials";
import styles from "./SocialProof.module.css";

/** Proof stat band + masonry testimonial wall. */
export function SocialProof() {
  return (
    <section className={styles.section}>
      <div className={`bw-container ${styles.inner}`}>
        <div className={styles.stats}>
          <StatBlock align="center" size="lg" value="400" unit="+" label="lives changed and counting" />
          <StatBlock align="center" size="lg" value="4.9" unit="★" label="average client rating" />
          <StatBlock align="center" size="lg" value="94" unit="%" label="renew or refer a friend" />
        </div>
        <div className={styles.headWrap}>
          <h2 className={styles.head}>Don&apos;t take my word for it.</h2>
        </div>
        <div className={styles.wall}>
          {testimonials.map((t) => (
            <div key={t.initials} className={styles.item}>
              <Testimonial initials={t.initials} name={t.name} role={t.role} quote={t.quote} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
