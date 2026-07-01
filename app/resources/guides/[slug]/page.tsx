import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/site/PageHeader";
import { EmailGate } from "@/components/site/EmailGate";
import { getGuide, guideSlugs } from "@/lib/data/guides";
import styles from "./guide.module.css";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide not found — Ben Walther" };
  return {
    title: `${guide.title} — Ben Walther`,
    description: guide.lead,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const titleNode = guide.accentWord ? (
    <>
      {guide.title.replace(guide.accentWord, "").trim()}{" "}
      <span className="bw-em">{guide.accentWord}</span>
    </>
  ) : (
    guide.title
  );

  return (
    <>
      <PageHeader
        kicker={guide.kind}
        title={titleNode}
        lead={guide.lead}
        back={{ href: "/resources", label: "All resources" }}
        wide
      />

      <section className={styles.section}>
        <div className="bw-container">
          <div className={styles.layout}>
            <div>
              <div className={styles.intro}>
                {guide.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className={styles.steps}>
                {guide.steps.map((s, i) => (
                  <div key={i} className={styles.step}>
                    <div className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <h2 className={styles.stepTitle}>{s.title}</h2>
                      <p className={styles.stepBody}>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className={styles.outro}>{guide.outro}</p>
            </div>

            <aside className={styles.aside}>
              <div className={styles.insideCard}>
                <div className={styles.insideLabel}>What&apos;s inside</div>
                <ul className={styles.insideList}>
                  {guide.inside.map((item, i) => (
                    <li key={i} className={styles.insideItem}>
                      <span className={styles.tick} aria-hidden="true">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.gateWrap}>
        <div className={`bw-container ${styles.gateInner}`}>
          <EmailGate
            kicker="Free download"
            title={guide.download.title}
            lead={guide.download.lead}
            cta={guide.download.cta}
            successTitle="On its way."
            successBody="Check your inbox for the printable PDF. While you wait, the Clarity Assessment will tell you which guide to use next."
          />
        </div>
      </section>
    </>
  );
}
