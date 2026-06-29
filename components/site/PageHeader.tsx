import * as React from "react";
import Link from "next/link";
import { Kicker } from "@/components/ui";
import styles from "./PageHeader.module.css";

export interface PageHeaderProps {
  kicker: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  back?: { href: string; label: string };
  wide?: boolean;
}

/** Dark interior-page header band that sits under the (dark) sticky nav. */
export function PageHeader({ kicker, title, lead, back, wide }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div aria-hidden="true" className={styles.glow} />
      <div className="bw-container">
        <div className={`${styles.inner} ${wide ? styles.wide : ""}`}>
          {back ? (
            <Link href={back.href} className={styles.back}>
              ← {back.label}
            </Link>
          ) : null}
          <Kicker tone="on-dark" spark>
            {kicker}
          </Kicker>
          <h1 className={styles.title}>{title}</h1>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </div>
      </div>
    </header>
  );
}
