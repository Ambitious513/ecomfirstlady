import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export const alt = "Ecom Firstlady — Shopify Growth Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let portraitBase64 = "";
  try {
    const imagePath = path.join(process.cwd(), "public", "hero-portrait.png");
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      portraitBase64 = `data:image/png;base64,${imageBuffer.toString("base64")}`;
    }
  } catch (e) {
    console.error("OG Image loading fallback:", e);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0D0F0D",
          backgroundImage:
            "radial-gradient(circle at 85% 30%, rgba(23, 58, 46, 0.95) 0%, #0D0F0D 65%)",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Outer Gold Border */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            right: "24px",
            bottom: "24px",
            border: "1px solid rgba(201, 162, 39, 0.35)",
            borderRadius: "20px",
            pointerEvents: "none",
          }}
        />

        {/* Left Content Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "620px",
          }}
        >
          {/* Eyebrow badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "2px",
                backgroundColor: "#C9A227",
              }}
            />
            <span
              style={{
                color: "#C9A227",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Shopify Growth Specialist
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "50px",
              lineHeight: 1.12,
              fontWeight: 800,
              margin: 0,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Your Shopify store,{" "}
            <span style={{ color: "#C9A227" }}>built</span> to actually sell.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              fontSize: "20px",
              lineHeight: 1.5,
              margin: 0,
              marginBottom: "36px",
            }}
          >
            A decade of real operator experience. Store Builds · CRO · SEO
          </p>

          {/* Brand Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                backgroundColor: "#173A2E",
                padding: "8px 18px",
                borderRadius: "6px",
                border: "1px solid rgba(201, 162, 39, 0.4)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#C9A227",
                }}
              />
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Ecom Firstlady · Stephanie
              </span>
            </div>
          </div>
        </div>

        {/* Right Frame — with Portrait or Monogram */}
        <div
          style={{
            width: "360px",
            height: "460px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(201, 162, 39, 0.4)",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#173A2E",
            position: "relative",
          }}
        >
          {portraitBase64 ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={portraitBase64}
              alt="Stephanie"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#0D0F0D",
              }}
            >
              <span
                style={{
                  color: "#C9A227",
                  fontSize: "90px",
                  fontWeight: 700,
                  fontFamily: "serif",
                }}
              >
                EF
              </span>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.8,
                  marginTop: "10px",
                }}
              >
                A Decade of Shopify
              </span>
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
