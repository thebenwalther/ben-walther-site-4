"use client";

import * as React from "react";
import { Button } from "@/components/ui";
import styles from "./EmailGate.module.css";

export interface EmailGateProps {
  kicker?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  cta?: string;
  placeholder?: string;
  /** Confirmation copy shown after the (frontend-only) submit. */
  successTitle?: string;
  successBody?: React.ReactNode;
  note?: string;
}

/**
 * Reusable email-capture block for guides and the email course. No
 * backend — submitting shows a confirmation state (UI stub). Swap the
 * onSubmit handler for a real list provider when one is wired up.
 */
export function EmailGate({
  kicker = "Free download",
  title,
  lead,
  cta = "Send it to me",
  placeholder = "you@email.com",
  successTitle = "Check your inbox.",
  successBody = "It's on the way — give it a minute, and check spam if it's hiding. While you wait, the Clarity Assessment is a good next five minutes.",
  note = "One email with the download. No spam, unsubscribe anytime.",
}: EmailGateProps) {
  const [sent, setSent] = React.useState(false);

  return (
    <div className={styles.gate}>
      {sent ? (
        <div>
          <div className={styles.successIcon} aria-hidden="true">
            ✓
          </div>
          <h2 className={styles.title}>{successTitle}</h2>
          <p className={styles.successBody}>{successBody}</p>
        </div>
      ) : (
        <>
          <div className={styles.kicker}>{kicker}</div>
          <h2 className={styles.title}>{title}</h2>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input type="email" required placeholder={placeholder} className={styles.input} aria-label="Email address" />
            <Button variant="accent" type="submit" iconRight="→">
              {cta}
            </Button>
          </form>
          <p className={styles.note}>{note}</p>
        </>
      )}
    </div>
  );
}
