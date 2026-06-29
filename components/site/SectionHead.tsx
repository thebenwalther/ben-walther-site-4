import * as React from "react";
import { Kicker } from "@/components/ui";
import styles from "./SectionHead.module.css";

export interface SectionHeadProps {
  kicker: React.ReactNode;
  title: React.ReactNode;
  center?: boolean;
  dark?: boolean;
}

/** Shared eyebrow + heading pair used to open every homepage section. */
export function SectionHead({ kicker, title, center, dark }: SectionHeadProps) {
  return (
    <div className={`${styles.wrap} ${center ? styles.center : ""}`}>
      <Kicker tone={dark ? "on-dark" : "plain"}>{kicker}</Kicker>
      <h2 className={`${styles.title} ${dark ? styles.dark : styles.light}`}>{title}</h2>
    </div>
  );
}
