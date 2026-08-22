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
            "radial-gradient(circle at 85% 35%, rgba(23, 58, 46, 0.9) 0%, #0D0F0D 68%)",
          padding: "50px 60px",
          position: "relative",
        }}
      >
        {/* Subtle Outer Frame */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "1px solid rgba(201, 162, 39, 0.3)",
            borderRadius: "20px",
            display: "flex",
          }}
        />

        {/* ── Left Content Column ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "630px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "2px",
                backgroundColor: "#C9A227",
                marginRight: "12px",
              }}
            />
            <div
              style={{
                color: "#C9A227",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              SHOPIFY GROWTH SPECIALIST
            </div>
          </div>

          {/* Headline — Clean flex row to guarantee ZERO text/glyph overlap in Satori */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "52px",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1px",
                display: "flex",
                marginBottom: "6px",
              }}
            >
              Your Shopify store,
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                fontSize: "52px",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              <span
                style={{
                  color: "#C9A227",
                  marginRight: "14px",
                  display: "flex",
                }}
              >
                built
              </span>
              <span
                style={{
                  color: "#FFFFFF",
                  display: "flex",
                }}
              >
                to actually sell.
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              fontSize: "19px",
              lineHeight: 1.45,
              display: "flex",
              flexDirection: "column",
              marginBottom: "32px",
            }}
          >
            <div>A decade of real Shopify operator experience.</div>
            <div style={{ color: "#6FA98A", fontSize: "16px", marginTop: "4px" }}>
              Store Builds · Conversion Rate Optimization · SEO
            </div>
          </div>

          {/* Founder Badge */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#173A2E",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid rgba(201, 162, 39, 0.4)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: "#C9A227",
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  display: "flex",
                }}
              >
                Ecom Firstlady · Stephanie
              </span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Portrait Card ── */}
        <div
          style={{
            width: "410px",
            height: "510px",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1.5px solid rgba(201, 162, 39, 0.45)",
            boxShadow: "0 24px 70px rgba(0, 0, 0, 0.8)",
            display: "flex",
            position: "relative",
            backgroundColor: "#173A2E",
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
                objectPosition: "center 10%",
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
                  display: "flex",
                }}
              >
                EF
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
