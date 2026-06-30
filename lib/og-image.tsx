import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Ben Walther — Life & Personal Growth Coaching";
export const ogContentType = "image/png";

export interface ShareImageOptions {
  /** Uppercase gold eyebrow. */
  kicker?: string;
  /** The big headline. */
  title?: string;
  /** Gold pill at the bottom. */
  cta?: string;
}

/** Shared branded social-share card (Forest & Gold), parameterized per page. */
export function renderShareImage({
  kicker = "Life & Personal Growth Coaching",
  title = "You weren't built to settle.",
  cta = "Take the free Clarity Assessment →",
}: ShareImageOptions = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#14291F",
          backgroundImage:
            "radial-gradient(circle at 88% -10%, rgba(198,166,100,0.30), rgba(20,41,31,0) 55%)",
          color: "#F3EEE4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="48" height="48" viewBox="0 0 100 100">
            <path
              fill="#C6A664"
              d="M50 5 C54.5 38 62 45.5 95 50 C62 54.5 54.5 62 50 95 C45.5 62 38 54.5 5 50 C38 45.5 45.5 38 50 5 Z"
            />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em" }}>Ben Walther</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C6A664",
              marginBottom: 26,
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#C6A664",
              color: "#14291F",
              fontSize: 26,
              fontWeight: 800,
              padding: "16px 30px",
              borderRadius: 999,
            }}
          >
            {cta}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
