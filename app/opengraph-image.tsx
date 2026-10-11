import { ImageResponse } from "next/og";
export const alt = "NST — Non Standard Team. Anything but standard.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "55px 65px",
          background: "#141413",
          color: "#f1f1e9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="64" height="64" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="12" fill="#c3f85c" />
              <path
                d="M15 45V20h9v4c3-4 5-5 10-5 9 0 15 5 15 15v11H39V33c0-4-2-6-6-6-5 0-8 3-8 7v11Z"
                fill="#141413"
              />
            </svg>
            <span style={{ fontSize: 62, fontWeight: 700, letterSpacing: -5 }}>
              nst
            </span>
          </div>
          <span style={{ fontSize: 15, color: "#b1b79f", letterSpacing: 2 }}>
            NON STANDARD TEAM
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 103,
            lineHeight: 1,
            letterSpacing: -6,
          }}
        >
          <span>Anything</span>
          <span style={{ color: "#c3f85c" }}>but standard.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #3d4430",
            paddingTop: 22,
            fontSize: 17,
            color: "#a5ad93",
          }}
        >
          <span>BRANDING · WEBSITES · UI/UX · MOTION · WORDS</span>
          <span style={{ color: "#c3f85c" }}>FROM $2,000 ↗</span>
        </div>
      </div>
    ),
    size,
  );
}
