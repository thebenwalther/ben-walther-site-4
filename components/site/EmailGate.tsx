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
  /** Confirmation copy shown after submit. */
  successTitle?: string;
  successBody?: React.ReactNode;
  note?: string;
  /**
   * Wire this to the email provider (subscribe the address, trigger the
   * delivery). Until it's set, submitting just shows the confirmation —
   * the frontend-only stub behavior.
   */
  onSubmitEmail?: (email: string) => void | Promise<void>;
}

/**
 * Reusable email-capture block for guides and the email course. Pass
 * `onSubmitEmail` once a list provider exists; without it, submitting
 * shows the confirmation state only (UI stub).
 */
export function EmailGate({
  kicker = "Free download",
  title,
  lead,
  cta = "Send it to me",
  placeholder = "you@email.com",
  successTitle = "Check your inbox.",
  successBody = "It's on the way. Give it a minute, and check spam if it's hiding. While you wait, the Clarity Assessment is a good next five minutes.",
  note = "One email with the download. No spam, unsubscribe anytime.",
  onSubmitEmail,
}: EmailGateProps) {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState("");

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
            onSubmit={async (e) => {
              e.preventDefault();
              await onSubmitEmail?.(email);
              setSent(true);
            }}
          >
            <input
              type="email"
              required
              placeholder={placeholder}
              className={styles.input}
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
