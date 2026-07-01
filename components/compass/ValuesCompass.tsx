"use client";

import * as React from "react";
import { Button } from "@/components/ui";
import styles from "./ValuesCompass.module.css";

const STORAGE_KEY = "bw-values-compass-v1";
const SLOTS = 3;
const STEPS = ["Evidence", "The value underneath", "Your core five", "Your decision filter"];

interface CompassState {
  step: number;
  done: boolean;
  alive: string[];
  drained: string[];
  aliveValues: string[];
  drainedValues: string[];
  five: string[];
  topIndex: number;
  filter: string;
  hydrated: boolean;
}

function emptyArr(n: number): string[] {
  return Array.from({ length: n }, () => "");
}

const DEFAULT_STATE: CompassState = {
  step: 0,
  done: false,
  alive: emptyArr(SLOTS),
  drained: emptyArr(SLOTS),
  aliveValues: emptyArr(SLOTS),
  drainedValues: emptyArr(SLOTS),
  five: emptyArr(5),
  topIndex: 0,
  filter: "",
  hydrated: false,
};

function coerceArr(v: unknown, n: number): string[] {
  const base = emptyArr(n);
  if (Array.isArray(v)) {
    for (let i = 0; i < n; i++) if (typeof v[i] === "string") base[i] = v[i];
  }
  return base;
}

function loadSavedState(): Omit<CompassState, "hydrated"> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const p = JSON.parse(raw);
    return {
      step: typeof p.step === "number" ? p.step : 0,
      done: Boolean(p.done),
      alive: coerceArr(p.alive, SLOTS),
      drained: coerceArr(p.drained, SLOTS),
      aliveValues: coerceArr(p.aliveValues, SLOTS),
      drainedValues: coerceArr(p.drainedValues, SLOTS),
      five: coerceArr(p.five, 5),
      topIndex: typeof p.topIndex === "number" ? p.topIndex : 0,
      filter: typeof p.filter === "string" ? p.filter : "",
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

/**
 * The Values Compass — a real interactive worksheet. It reverse-engineers
 * your values from lived evidence (peak + resentful moments), narrows to a
 * core five, and turns your top value into a one-line decision filter.
 * Everything is stored in localStorage only; nothing is sent anywhere.
 */
export function ValuesCompass() {
  const [s, setS] = React.useState<CompassState>(DEFAULT_STATE);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setS({ ...loadSavedState(), hydrated: true });
  }, []);

  React.useEffect(() => {
    if (!s.hydrated) return;
    const { hydrated, ...persist } = s;
    void hydrated;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persist));
  }, [s]);

  function patch(next: Partial<CompassState>) {
    setS((prev) => ({ ...prev, ...next }));
  }

  function setItem(key: "alive" | "drained" | "aliveValues" | "drainedValues" | "five", i: number, value: string) {
    setS((prev) => {
      const copy = [...prev[key]];
      copy[i] = value;
      return { ...prev, [key]: copy };
    });
  }

  // Filled moments, paired with their named value, for steps 2–3.
  const namedValues = React.useMemo(() => {
    const out: string[] = [];
    s.alive.forEach((m, i) => {
      if (m.trim() && s.aliveValues[i].trim()) out.push(s.aliveValues[i].trim());
    });
    s.drained.forEach((m, i) => {
      if (m.trim() && s.drainedValues[i].trim()) out.push(s.drainedValues[i].trim());
    });
    return out;
  }, [s.alive, s.drained, s.aliveValues, s.drainedValues]);

  function seedFive(prev: CompassState): string[] {
    if (prev.five.some((v) => v.trim())) return prev.five;
    const seen = new Set<string>();
    const unique: string[] = [];
    for (const v of namedValues) {
      const k = v.toLowerCase();
      if (!seen.has(k)) {
        seen.add(k);
        unique.push(v);
      }
    }
    const five = emptyArr(5);
    unique.slice(0, 5).forEach((v, i) => (five[i] = v));
    return five;
  }

  function next() {
    setS((prev) => {
      if (prev.step === 1) return { ...prev, step: 2, five: seedFive(prev) };
      if (prev.step === STEPS.length - 1) return { ...prev, done: true };
      return { ...prev, step: prev.step + 1 };
    });
  }

  function back() {
    setS((prev) => ({ ...prev, step: Math.max(0, prev.step - 1) }));
  }

  function restart() {
    setS({ ...DEFAULT_STATE, hydrated: true });
  }

  // ---- validation gates ----
  const filledAlive = s.alive.filter((m) => m.trim()).length;
  const filledDrained = s.drained.filter((m) => m.trim()).length;
  const filledFive = s.five.filter((v) => v.trim()).length;

  const canAdvance =
    (s.step === 0 && filledAlive >= 1 && filledDrained >= 1) ||
    (s.step === 1 && namedValues.length >= 2) ||
    (s.step === 2 && filledFive >= 3) ||
    (s.step === 3 && s.filter.trim().length > 0);

  const gateHint =
    s.step === 0
      ? "Add at least one of each to continue — one alive, one draining."
      : s.step === 1
        ? "Name the value under at least two of your moments."
        : s.step === 2
          ? "Choose at least three values to continue."
          : "Write your one-line filter to finish.";

  if (s.done) {
    const cleanFive = s.five.map((v) => v.trim()).filter(Boolean);
    const top = cleanFive[s.topIndex] ?? cleanFive[0] ?? "";
    const rest = cleanFive.filter((_, i) => i !== s.topIndex);
    return (
      <div className={styles.wrap}>
        <div className={styles.result}>
          <div aria-hidden="true" className={styles.resultGlow} />
          <div className={styles.resultInner}>
            <div className={styles.resultKicker}>Your Values Compass</div>
            <h2 className={styles.resultTitle}>The handful you actually live by.</h2>

            <div className={styles.coreValue}>
              <div className={styles.coreLabel}>Your true north</div>
              <div className={styles.coreName}>
                <span className={styles.coreSpark} aria-hidden="true">
                  ✦
                </span>
                {top || "—"}
              </div>
            </div>

            {rest.length > 0 && (
              <ul className={styles.restList}>
                {rest.map((v, i) => (
                  <li key={i} className={styles.restItem}>
                    {v}
                  </li>
                ))}
              </ul>
            )}

            {s.filter.trim() && (
              <div className={styles.filterBox}>
                <div className={styles.filterLabel}>Your decision filter</div>
                <p className={styles.filterText}>&ldquo;{s.filter.trim()}&rdquo;</p>
              </div>
            )}
          </div>

          <div className={styles.resultActions}>
            <Button variant="accent" onClick={() => window.print()}>
              Print or save as PDF
            </Button>
            <Button variant="outline-on-dark" href="/resources/clarity-assessment" iconRight="→">
              Take the Clarity Assessment
            </Button>
          </div>
        </div>
        <button type="button" className={styles.restart} onClick={restart}>
          Start the Compass over
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>{STEPS[s.step]}</span>
        <span className={styles.progressCount}>
          Step {s.step + 1} of {STEPS.length}
        </span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${((s.step + 1) / STEPS.length) * 100}%` }} />
      </div>

      <div className={styles.card}>
        {s.step === 0 && (
          <>
            <div className={styles.stepKicker}>Pass 1 · Mine the evidence</div>
            <h2 className={styles.title}>When did you feel most alive — and most resentful?</h2>
            <p className={styles.intro}>
              Skip the poster words. Your real values hide in specific moments. Jot a few down — fragments are
              fine.
            </p>
            <div className={styles.groupLabel}>
              <span className={styles.spark} aria-hidden="true">
                ✦
              </span>
              Moments you felt most alive
            </div>
            {s.alive.map((v, i) => (
              <label key={i} className={styles.field}>
                <input
                  className={styles.input}
                  placeholder={i === 0 ? "e.g. the week I finally shipped the thing on my own terms" : "Another…"}
                  value={v}
                  onChange={(e) => setItem("alive", i, e.target.value)}
                />
              </label>
            ))}
            <div className={styles.groupLabel}>
              <span className={styles.spark} aria-hidden="true">
                ✦
              </span>
              Moments you felt most resentful or drained
            </div>
            {s.drained.map((v, i) => (
              <label key={i} className={styles.field}>
                <input
                  className={styles.input}
                  placeholder={i === 0 ? "e.g. saying yes to the project I knew wasn't mine" : "Another…"}
                  value={v}
                  onChange={(e) => setItem("drained", i, e.target.value)}
                />
              </label>
            ))}
          </>
        )}

        {s.step === 1 && (
          <>
            <div className={styles.stepKicker}>Pass 2 · Name what&apos;s underneath</div>
            <h2 className={styles.title}>What was being honored — or violated?</h2>
            <p className={styles.intro}>
              For each alive moment, ask: what value was being <b>honored</b>? For each draining one: what value
              was being <b>stepped on</b>? One or two words each.
            </p>
            {s.alive.map((m, i) =>
              m.trim() ? (
                <div key={`a${i}`} className={styles.momentRow}>
                  <p className={styles.momentText}>
                    <span className={styles.momentTag}>Alive</span>
                    {m}
                  </p>
                  <input
                    className={`${styles.input} ${styles.valueInput}`}
                    placeholder="The value honored… e.g. autonomy"
                    value={s.aliveValues[i]}
                    onChange={(e) => setItem("aliveValues", i, e.target.value)}
                  />
                </div>
              ) : null,
            )}
            {s.drained.map((m, i) =>
              m.trim() ? (
                <div key={`d${i}`} className={styles.momentRow}>
                  <p className={styles.momentText}>
                    <span className={styles.momentTag}>Drained</span>
                    {m}
                  </p>
                  <input
                    className={`${styles.input} ${styles.valueInput}`}
                    placeholder="The value violated… e.g. honesty"
                    value={s.drainedValues[i]}
                    onChange={(e) => setItem("drainedValues", i, e.target.value)}
                  />
                </div>
              ) : null,
            )}
          </>
        )}

        {s.step === 2 && (
          <>
            <div className={styles.stepKicker}>Pass 3 · Cut it to five</div>
            <h2 className={styles.title}>Your core five.</h2>
            <p className={styles.intro}>
              I pre-filled these from your moments. Now force the list down to five — keep only the ones
              you&apos;ve actually <b>sacrificed</b> something to protect. Edit freely.
            </p>
            <div className={styles.fiveGrid}>
              {s.five.map((v, i) => (
                <div key={i} className={styles.fiveRow}>
                  <span className={styles.fiveNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <input
                    className={styles.input}
                    placeholder={`Value ${i + 1}`}
                    value={v}
                    onChange={(e) => setItem("five", i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {s.step === 3 && (
          <>
            <div className={styles.stepKicker}>Pass 4 · Make it a filter</div>
            <h2 className={styles.title}>Turn your top value into a question.</h2>
            <p className={styles.intro}>Pick the one that matters most, then write it as a question you can ask in the moment.</p>
            <div className={styles.pickRow}>
              {s.five
                .map((v, i) => ({ v: v.trim(), i }))
                .filter(({ v }) => v)
                .map(({ v, i }) => (
                  <button
                    key={i}
                    type="button"
                    className={`${styles.pick} ${s.topIndex === i ? styles.pickActive : ""}`}
                    onClick={() => patch({ topIndex: i })}
                  >
                    {v}
                  </button>
                ))}
            </div>
            <div className={styles.filterHelp}>
              Template: <b>&ldquo;Does this protect my {(s.five[s.topIndex] || "core value").trim()}, or trade it
              away?&rdquo;</b> — make it yours.
            </div>
            <textarea
              className={styles.textarea}
              placeholder="Write your one-line decision filter…"
              value={s.filter}
              onChange={(e) => patch({ filter: e.target.value })}
            />
            <p className={styles.privacyNote}>Saved only in this browser — never sent anywhere.</p>
          </>
        )}
      </div>

      <div className={styles.nav}>
        <button type="button" className={styles.back} onClick={back} disabled={s.step === 0}>
          ← Back
        </button>
        {!canAdvance ? <span className={styles.hint}>{gateHint}</span> : null}
        <Button variant="accent" onClick={next} disabled={!canAdvance}>
          {s.step === STEPS.length - 1 ? "See my Compass →" : "Next →"}
        </Button>
      </div>
    </div>
  );
}
