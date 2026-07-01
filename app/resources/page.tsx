import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { ResourceCard } from "@/components/site/ResourceCard";
import { resources } from "@/lib/data/resources";
import styles from "./resources.module.css";

export const metadata: Metadata = {
  title: "Free resources — Ben Walther",
  description:
    "Free tools, frameworks, courses, and guides to help you get clear, get unstuck, and get moving — starting with the Clarity Assessment.",
};

export default function ResourcesPage() {
  const featured = resources.filter((r) => r.featured);
  const rest = resources.filter((r) => !r.featured);

  return (
    <>
      <PageHeader
        kicker="The toolkit"
        title={
          <>
            Everything you need to start <span className="bw-em">on your own.</span>
          </>
        }
        lead="You don't need a coach to begin — you need a clear next move. These are the real tools, frameworks, and courses I use with clients, free to use right now. Start with the assessment; it'll point you to the rest."
        wide
      />

      <section className={styles.section}>
        <div className="bw-container">
          <div className={styles.featuredGrid}>
            {featured.map((r) => (
              <ResourceCard key={r.slug} resource={r} />
            ))}
            <div className={styles.featuredNote}>
              <h2 className={styles.noteTitle}>Where to start</h2>
              <p className={styles.noteBody}>
                Not sure which one you need? Take the <strong>Clarity Assessment</strong> first. It&apos;s five
                minutes, and it tells you exactly where the gap is right now — then points you to the framework,
                course, or guide built for that gap.
              </p>
              <p className={styles.noteBody}>
                Everything here is free. No call required. Use what helps, ignore the rest.
              </p>
            </div>
          </div>

          <h2 className={styles.groupHead}>More free resources</h2>
          <div className={styles.grid}>
            {rest.map((r) => (
              <ResourceCard key={r.slug} resource={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
