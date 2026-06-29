import Link from "next/link";
import styles from "./Footer.module.css";

/** Site footer with explore + connect columns. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`bw-container ${styles.row}`}>
        <div>
          <div className={styles.brand}>Ben Walther</div>
          <div className={styles.tagline}>Life &amp; growth coaching for people ready to become themselves.</div>
        </div>
        <div className={styles.cols}>
          <div>
            <div className={styles.h4}>Explore</div>
            <Link className={styles.link} href="/#out">
              Results
            </Link>
            <Link className={styles.link} href="/#how">
              How it works
            </Link>
            <Link className={styles.link} href="/#prog">
              Programs
            </Link>
            <Link className={styles.link} href="/resources">
              Resources
            </Link>
            <Link className={styles.link} href="/#pod">
              Podcast
            </Link>
          </div>
          <div>
            <div className={styles.h4}>Free resources</div>
            <Link className={styles.link} href="/resources/clarity-assessment">
              Clarity Assessment
            </Link>
            <Link className={styles.link} href="/resources/becoming-framework">
              The Becoming Framework
            </Link>
            <Link className={styles.link} href="/resources/reset-email-course">
              5-Day Reset course
            </Link>
            <Link className={styles.link} href="/resources">
              Guides &amp; tools
            </Link>
          </div>
          <div>
            <div className={styles.h4}>Connect</div>
            <a className={styles.link} href="#">
              Instagram
            </a>
            <a className={styles.link} href="#">
              LinkedIn
            </a>
            <a className={styles.link} href="#">
              YouTube
            </a>
            <a className={styles.link} href="#">
              Newsletter
            </a>
          </div>
        </div>
      </div>
      <div className={`bw-container ${styles.copy}`}>© 2026 Ben Walther · Certified ICF Coach</div>
    </footer>
  );
}
