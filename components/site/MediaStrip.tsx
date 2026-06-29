import styles from "./MediaStrip.module.css";

/** "As featured in" press strip on the dark surface below the hero. */
export function MediaStrip() {
  return (
    <section className={styles.section}>
      <div className={`bw-container ${styles.row}`}>
        <span className={styles.label}>As featured in</span>
        <span className={styles.logoSerif}>Psychologies</span>
        <span className={styles.logoSans}>BBC Radio</span>
        <span className={styles.logoSerif}>The Times</span>
        <span className={styles.logoSans}>Calm</span>
        <span className={styles.logoSerif}>Stylist</span>
      </div>
    </section>
  );
}
