import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RideOps — Campus Transportation Operations Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%)",
          position: "relative",
        }}
      >
        {/* Subtle dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37, 99, 235, 0.15), transparent)",
          }}
        />

        {/* Logo circle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#2563EB",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            RO
          </span>
        </div>

        {/* Brand name */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#2563EB",
              letterSpacing: "-1px",
            }}
          >
            Ride
          </span>
          <span
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Ops
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 16,
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Campus transportation ops, finally under control.
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: "#64748b",
            marginTop: 12,
          }}
        >
          Real-time dispatch &middot; Rider booking &middot; Driver management &middot; Analytics
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
