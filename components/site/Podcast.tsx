"use client";

import * as React from "react";
import { Kicker } from "@/components/ui";
import { episodes } from "@/lib/data/episodes";
import styles from "./Podcast.module.css";

function Episode({ ep, len, title, onPlay }: { ep: string; len: string; title: string; onPlay: () => void }) {
  return (
    <div>
      <div onClick={onPlay} className={styles.epArt} role="button" tabIndex={0} aria-label={`Play ${title}`}>
        <div aria-hidden="true" className={styles.epGlow} />
        <span className={styles.epPlay} aria-hidden="true">
          ▶
        </span>
      </div>
      <div className={styles.epMeta}>
        {ep} · {len}
      </div>
      <h3 className={styles.epTitle}>{title}</h3>
    </div>
  );
}

function NowPlaying({ track, onClose }: { track: string | null; onClose: () => void }) {
  if (!track) return null;
  return (
    <div className={styles.nowPlaying}>
      <span className={styles.npIcon} aria-hidden="true">
        ❙❙
      </span>
      <div style={{ minWidth: 0 }}>
        <div className={styles.npLabel}>Now playing</div>
        <div className={styles.npTrack}>{track}</div>
      </div>
      <button onClick={onClose} aria-label="Stop" className={styles.npClose}>
        ×
      </button>
    </div>
  );
}

/** Podcast section with a fake "now playing" bar. */
export function Podcast() {
  const [track, setTrack] = React.useState<string | null>(null);
  return (
    <section id="pod" className={styles.section}>
      <div className="bw-container">
        <div className={styles.head}>
          <div>
            <Kicker spark>The Becoming Podcast</Kicker>
            <h2 className={styles.title}>Weekly conversations on doing the work.</h2>
          </div>
          <a href="#pod" className={styles.allLink}>
            All episodes →
          </a>
        </div>
        <div className={styles.grid}>
          {episodes.map((e) => (
            <Episode
              key={e.ep}
              ep={e.ep}
              len={e.len}
              title={e.title}
              onPlay={() => setTrack(`${e.ep} — ${e.title}`)}
            />
          ))}
        </div>
      </div>
      <NowPlaying track={track} onClose={() => setTrack(null)} />
    </section>
  );
}
