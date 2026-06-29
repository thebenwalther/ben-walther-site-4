import Image from "next/image";
import { Button, Kicker } from "@/components/ui";
import headshot from "@/public/images/ben-headshot.jpg";
import styles from "./MeetBen.module.css";

const creds = [
  "Certified ICF Coach (PCC)",
  "12 years in practice",
  "400+ clients coached",
  "Host of The Becoming Podcast",
];

/**
 * "Meet Ben" — homepage about section. Builds personal trust between
 * the framework and the programs. Copy here is placeholder in Ben's
 * voice; swap for his real story, credentials, and positioning.
 */
export function MeetBen() {
  return (
    <section id="about" className={styles.section}>
      <div className="bw-container">
        <div className={styles.grid}>
          <div className={styles.photoCol}>
            <div aria-hidden="true" className={styles.photoBack} />
            <div className={styles.photo}>
              <Image src={headshot} alt="Ben Walther" fill sizes="(max-width: 980px) 100vw, 460px" />
            </div>
            <div className={styles.chip}>
              <div className={styles.chipIcon} aria-hidden="true">
                ✦
              </div>
              <div>
                <div className={styles.chipBig}>You&apos;re not broken.</div>
                <div className={styles.chipSmall}>My whole approach, in three words.</div>
              </div>
            </div>
          </div>

          <div>
            <Kicker spark>Meet Ben</Kicker>
            <h2 className={styles.title}>
              I help people stop performing their life <span className="bw-em">and start living it.</span>
            </h2>
            <div className={styles.body}>
              <p>
                A decade ago I had the title, the salary, the life that looked right on paper — and a quiet,
                stubborn sense that I was living someone else&apos;s answer to my own question. It took a hard
                year and one very honest coach to show me the gap between the two. Closing it changed everything.
              </p>
              <p>
                So I don&apos;t do hype, and I don&apos;t do shame. You don&apos;t need to be fixed — you need
                someone in your corner who won&apos;t let you talk yourself out of what you already know. Calm,
                direct, and occasionally annoyingly persistent. That&apos;s the job, and I love it.
              </p>
              <p>
                For twelve years I&apos;ve worked with founders, leaders, and quietly successful people in the
                messy middle of a reinvention — the ones who are finally done waiting for permission.
              </p>
            </div>

            <ul className={styles.creds}>
              {creds.map((c) => (
                <li key={c} className={styles.cred}>
                  <span className={styles.credMark} aria-hidden="true">
                    ✦
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div className={styles.signoff}>
              <span className={styles.sig} aria-hidden="true">
                Ben
              </span>
              <Button variant="soft" href="/resources/clarity-assessment" iconRight="→">
                Start with the free assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
