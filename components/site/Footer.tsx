import Link from "next/link";
import { SparkMark } from "@/components/ui";
import { socials } from "@/lib/site";
import styles from "./Footer.module.css";

/** Site footer with explore + connect columns. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`bw-container ${styles.row}`}>
        <div>
          <div className={styles.brandRow}>
            <SparkMark size={20} />
            <span className={styles.brand}>Ben Walther</span>
          </div>
          <div className={styles.tagline}>Life &amp; growth coaching for people ready to become themselves.</div>
        </div>
        <div className={styles.cols}>
          <div>
            <div className={styles.h4}>Explore</div>
            <Link className={styles.link} href="/#out">
              What changes
            </Link>
            <Link className={styles.link} href="/#how">
              How it works
            </Link>
            <Link className={styles.link} href="/#about">
              About Ben
            </Link>
            <Link className={styles.link} href="/#prog">
              Programs
            </Link>
            <Link className={styles.link} href="/resources">
              Resources
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
            <a className={styles.link} href={socials.x.href} target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
            <a className={styles.link} href={socials.instagram.href} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className={styles.link} href={socials.linkedin.href} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <Link className={styles.link} href="/resources/reset-email-course">
              Newsletter
            </Link>
          </div>
        </div>
      </div>
      <div className={`bw-container ${styles.copy}`}>© 2026 Ben Walther · Educator &amp; coach for 15 years</div>
    </footer>
  );
}
