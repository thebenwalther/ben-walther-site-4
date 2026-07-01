"use client";

import * as React from "react";
import { Button } from "@/components/ui";
import { BookingCta } from "@/components/site/BookingCta";
import { courseDays } from "@/lib/data/course";
import styles from "./CourseRunner.module.css";

const STORAGE_KEY = "bw-reset-course-v1";
const TOTAL = courseDays.length;

interface CourseState {
  activeDay: number;
  completed: number[];
  notes: Record<number, string>;
  /** Flips true once the mount effect below has read localStorage. */
  hydrated: boolean;
}

const DEFAULT_STATE: CourseState = { activeDay: 1, completed: [], notes: {}, hydrated: false };

function loadSavedState(): Omit<CourseState, "hydrated"> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { activeDay: 1, completed: [], notes: {} };
    const parsed = JSON.parse(raw);
    const completed: number[] = Array.isArray(parsed.completed) ? parsed.completed : [];
    const notes: Record<number, string> = parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {};
    const activeDay = courseDays.find((d) => !completed.includes(d.day))?.day ?? TOTAL;
    return { activeDay, completed, notes };
  } catch {
    return { activeDay: 1, completed: [], notes: {} };
  }
}

/**
 * The 5-Day Reset, run right here in the browser — no email backend
 * yet, so this is the real course: full lesson content, a saved
 * reflection prompt per day, and progress tracked in localStorage only
 * (never sent anywhere).
 */
export function CourseRunner() {
  const [state, setState] = React.useState<CourseState>(DEFAULT_STATE);

  React.useEffect(() => {
    // One-time sync from localStorage after mount: the server has no
    // window, so reading storage during the initial render (instead of
    // here) would make the client's first paint disagree with the
    // server-rendered HTML. `hydrated` then gates the write-back effect
    // below so it can't fire with the pre-load default state and
    // clobber whatever was already saved.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ ...loadSavedState(), hydrated: true });
  }, []);

  React.useEffect(() => {
    if (!state.hydrated) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completed: state.completed, notes: state.notes }),
    );
  }, [state]);

  const day = courseDays.find((d) => d.day === state.activeDay) ?? courseDays[0];
  const isDone = state.completed.length === TOTAL;

  function goToDay(dayNumber: number) {
    setState((prev) => ({ ...prev, activeDay: dayNumber }));
  }

  function setNote(dayNumber: number, value: string) {
    setState((prev) => ({ ...prev, notes: { ...prev.notes, [dayNumber]: value } }));
  }

  function markComplete() {
    setState((prev) => {
      const completed = prev.completed.includes(day.day) ? prev.completed : [...prev.completed, day.day];
      const activeDay = day.day < TOTAL ? day.day + 1 : day.day;
      return { ...prev, completed, activeDay };
    });
  }

  function restart() {
    setState((prev) => ({ ...prev, completed: [], notes: {}, activeDay: 1 }));
  }

  if (isDone) {
    return (
      <div className={styles.wrap}>
        <div className={`${styles.card} ${styles.doneWrap}`}>
          <div className={styles.doneIcon} aria-hidden="true">
            ✓
          </div>
          <h2 className={styles.doneTitle}>You did the Reset.</h2>
          <p className={styles.doneBody}>
            Five days, five small honest moves. That&apos;s not nothing — it&apos;s proof you can keep a promise
            to yourself. If you want a read on where to point that momentum next, take the Clarity Assessment.
            If you&apos;d rather talk it through, I&apos;m here for that too.
          </p>
          <div className={styles.doneRow}>
            <Button variant="accent" iconRight="→" href="/resources/clarity-assessment">
              Take the free Clarity Assessment
            </Button>
            <BookingCta variant="outline" context="After the 5-Day Reset">
              Book a free intro call
            </BookingCta>
          </div>
          <button type="button" className={styles.restart} onClick={restart}>
            Start the Reset over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>{day.stage}</span>
        <span className={styles.progressCount}>
          Day {day.day} of {TOTAL}
        </span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${(state.completed.length / TOTAL) * 100}%` }} />
      </div>

      <div className={styles.pills}>
        {courseDays.map((d) => {
          const done = state.completed.includes(d.day);
          const active = d.day === state.activeDay;
          return (
            <button
              key={d.day}
              type="button"
              className={`${styles.pill} ${active ? styles.pillActive : ""} ${done ? styles.pillDone : ""}`}
              onClick={() => goToDay(d.day)}
            >
              {done ? (
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
              ) : null}
              Day {d.day}
            </button>
          );
        })}
      </div>

      <div className={styles.card}>
        <div className={styles.stage}>
          Day {day.day} · {day.stage}
        </div>
        <h2 className={styles.title}>{day.title}</h2>
        <div className={styles.body}>
          {day.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className={styles.practice}>
          <div className={styles.practiceLabel}>Today&apos;s practice</div>
          <p className={styles.practicePrompt}>{day.practice.prompt}</p>
          <textarea
            className={styles.textarea}
            placeholder={day.practice.placeholder}
            value={state.notes[day.day] ?? ""}
            onChange={(e) => setNote(day.day, e.target.value)}
          />
          <p className={styles.privacyNote}>Saved only in this browser — never sent anywhere.</p>
        </div>

        <p className={styles.closing}>{day.closing}</p>
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          className={styles.back}
          onClick={() => goToDay(Math.max(1, state.activeDay - 1))}
          disabled={state.activeDay === 1}
        >
          ← Previous day
        </button>
        <Button variant="accent" onClick={markComplete}>
          {state.activeDay === TOTAL ? "Mark complete & finish" : `Mark Day ${state.activeDay} complete →`}
        </Button>
      </div>
    </div>
  );
}
