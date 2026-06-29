"use client";

import * as React from "react";
import { Button, Kicker } from "@/components/ui";
import styles from "./BookingModal.module.css";

function Field({
  label,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      {textarea ? (
        <textarea rows={3} placeholder={placeholder} className={`${styles.input} ${styles.textarea}`} />
      ) : (
        <input type={type} placeholder={placeholder} className={styles.input} required />
      )}
    </label>
  );
}

export interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  /** Personalizes the heading, e.g. "Apply for 1:1 Coaching". Defaults to the free intro call. */
  context?: string;
}

/** Booking form modal — secondary CTA across the site, not the homepage's main funnel. */
export function BookingModal({ open, onClose, context }: BookingModalProps) {
  const [sent, setSent] = React.useState(false);

  if (!open) return null;

  // Reset to the form state as the modal closes, so it reopens fresh.
  const handleClose = () => {
    setSent(false);
    onClose();
  };

  return (
    <div onClick={handleClose} className={styles.overlay}>
      <div onClick={(e) => e.stopPropagation()} className={styles.panel}>
        <button onClick={handleClose} aria-label="Close" className={styles.close}>
          ×
        </button>
        {sent ? (
          <div className={styles.successWrap}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>You&apos;re in the diary.</h3>
            <p className={styles.successBody}>
              Check your inbox — I&apos;ll send a calendar link and a couple of questions to get us started.
            </p>
            <Button variant="accent" fullWidth onClick={handleClose}>
              Done
            </Button>
          </div>
        ) : (
          <div>
            <Kicker spark>{context ? context : "Free intro call"}</Kicker>
            <h3 className={styles.title}>Let&apos;s see if we&apos;re a fit.</h3>
            <p className={styles.lead}>Twenty minutes, no pressure. Tell me where to reach you.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Your name" placeholder="Jamie Rivers" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="What's nagging at you right now?" placeholder="A sentence is plenty…" textarea />
              <div className={styles.submitRow}>
                <Button variant="accent" fullWidth iconRight="→" type="submit">
                  Request my intro call
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
