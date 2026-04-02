import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Compact Lab — Browser IDE for Midnight Smart Contracts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow accent */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(233,81,68,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Domain tag */}
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 80,
            fontSize: 18,
            color: "rgba(255,255,255,0.25)",
            fontFamily: "monospace",
          }}
        >
          compactlab.dev
        </div>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 52,
              height: 52,
              background: "#E95144",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 900,
              color: "white",
              fontFamily: "monospace",
            }}
          >
            CL
          </div>
          <span style={{ color: "white", fontSize: 30, fontWeight: 600 }}>
            Compact
            <span style={{ color: "#E95144" }}>Lab</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          Browser IDE for{" "}
          <span style={{ color: "#E95144" }}>Midnight</span>
          {" "}Smart Contracts
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 720,
            lineHeight: 1.5,
          }}
        >
          Write, simulate, and deploy Compact contracts — no setup required.
        </div>
      </div>
    ),
    { ...size },
  );
}
