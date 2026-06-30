"use client";

import * as React from "react";
import Link from "next/link";
import { Button, SparkMark } from "@/components/ui";
import styles from "./Nav.module.css";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#how", label: "How it works" },
  { href: "/#prog", label: "Programs" },
  { href: "/resources", label: "Resources" },
];

/** Sticky translucent site nav, shared across every page. */
export function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <nav className={`bw-container ${styles.nav}`}>
        <Link href="/" className={styles.brand}>
          <SparkMark size={22} className={styles.spark} />
          <span className={styles.wordmark}>Ben Walther</span>
        </Link>

        <div className={styles.right}>
          <div className={styles.links}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </div>
          <Button variant="accent" size="sm" href="/resources/clarity-assessment">
            Free assessment
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
          </button>
        </div>
      </nav>
      <div className={`bw-container ${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
