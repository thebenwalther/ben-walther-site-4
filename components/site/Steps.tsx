import { SectionHead } from "./SectionHead";
import { Button } from "@/components/ui";
import { framework } from "@/lib/data/framework";
import styles from "./Steps.module.css";

/** Condensed "How it works" strip — the Becoming Framework, homepage version. */
export function Steps() {
  return (
    <section id="how" className={styles.section}>
      <div className={`bw-container ${styles.inner}`}>
        <SectionHead center dark kicker="How it works" title="A simple system that actually sticks." />
        <div className={styles.grid}>
          {framework.map((s) => (
            <div key={s.n} className={styles.card}>
              <div className={`bw-em ${styles.number}`}>{s.n}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.summary}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Button variant="outline-on-dark" href="/resources/becoming-framework" iconRight="→">
            Read the full Becoming Framework
          </Button>
        </div>
      </div>
    </section>
  );
}
