import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#c3f85c",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 64 64">
          <path
            d="M15 45V20h9v4c3-4 5-5 10-5 9 0 15 5 15 15v11H39V33c0-4-2-6-6-6-5 0-8 3-8 7v11Z"
            fill="#141413"
          />
        </svg>
      </div>
    ),
    size,
  );
}
