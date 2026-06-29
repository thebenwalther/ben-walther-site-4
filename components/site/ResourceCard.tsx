import Link from "next/link";
import type { Resource } from "@/lib/data/resources";
import styles from "./ResourceCard.module.css";

/** Linked card summarising a single resource on the hub. */
export function ResourceCard({ resource }: { resource: Resource }) {
  const { featured } = resource;
  return (
    <Link
      href={resource.href}
      className={`${styles.card} ${featured ? styles.featured : styles.standard}`}
    >
      <div className={styles.top}>
        <div className={styles.icon} aria-hidden="true">
          {resource.icon}
        </div>
        <span className={styles.kind}>{resource.kind}</span>
      </div>
      <h3 className={styles.title}>{resource.title}</h3>
      <p className={styles.blurb}>{resource.blurb}</p>
      <div className={styles.footer}>
        <span className={styles.meta}>{resource.meta}</span>
        <span className={styles.go}>Open →</span>
      </div>
    </Link>
  );
}
