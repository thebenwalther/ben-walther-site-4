import Image from "next/image";
import { Button, Kicker } from "@/components/ui";
import headshot from "@/public/images/ben-headshot.jpg";
import styles from "./MeetBen.module.css";

const creds = [
  "Educator & coach for 15 years",
  "Coached basketball & golf",
  "Countless students & athletes guided",
  "Focused on the inner game, not just the outer",
];

/**
 * "Meet Ben" — homepage about section. Builds personal trust between
 * the framework and the programs. Story and credentials here are real
 * (educator & basketball/golf coach for 15 years); positioning line is
 * still open and can be refined.
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
              For years, I played smaller than <span className="bw-em">I knew I could be.</span>
            </h2>
            <div className={styles.body}>
              <p>
                I backed away from anything that risked real failure, then punished myself for backing away.
                The drift was quiet. A relationship I almost lost. A career that kept shrinking. A son on the way,
                and no solid ground to stand on. Then something broke — and in the breaking, I finally started
                to move.
              </p>
              <p>
                I knew why I coach the day I saw it in my nephew. He was making the same trades I&apos;d made.
                Dodging the assignment he didn&apos;t understand, because being called lazy hurt less than being
                called not smart enough. He was choosing the safer wound. I recognized it instantly, and I
                couldn&apos;t let it go.
              </p>
              <p>
                Here&apos;s the strange thing I&apos;ve learned about myself. I can see in other people what I
                spent years unable to see in me. That gap, between how clearly I read others and how blind I was
                to my own patterns, is exactly what I coach. I know the loop from the inside. And I know what it
                quietly takes from a life when no one names it.
              </p>
              <p>
                If you recognize yourself in any of this, good — that recognition is where the work starts.
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
