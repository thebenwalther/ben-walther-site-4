import * as React from "react";
import { Button } from "@/components/ui";
import styles from "./DownloadCard.module.css";

export interface DownloadCardProps {
  kicker?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  cta?: string;
  /** Path to the served file, e.g. "/downloads/values-compass.pdf". */
  file: string;
  note?: string;
}

/**
 * Instant, no-email download block for real files in public/downloads.
 * The honest counterpart to EmailGate: the file is the promise, so the
 * button just delivers it.
 */
export function DownloadCard({
  kicker = "Free download",
  title,
  lead,
  cta = "Download the PDF",
  file,
  note = "Free. No email needed — it's yours.",
}: DownloadCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.kicker}>{kicker}</div>
      <h2 className={styles.title}>{title}</h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
      <div className={styles.row}>
        <Button variant="accent" iconRight="↓" href={file} download>
          {cta}
        </Button>
        <span className={styles.note}>{note}</span>
      </div>
    </div>
  );
}
