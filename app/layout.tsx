import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Dynamically determine site base URL for Vercel previews and production
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://ecomfirstlady.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ecom Firstlady — Shopify Growth Specialist",
  description:
    "Your Shopify store, built to actually sell. Stephanie helps Shopify store owners build, optimize, and scale — with a decade of real operator experience.",
  openGraph: {
    title: "Ecom Firstlady — Shopify Growth Specialist",
    description:
      "Your Shopify store, built to actually sell. Work with a Shopify specialist with a decade of real operator experience.",
    url: "/",
    siteName: "Ecom Firstlady",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "Ecom Firstlady — Shopify Growth Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecom Firstlady — Shopify Growth Specialist",
    description: "Your Shopify store, built to actually sell.",
    images: ["/og-card.svg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* GA4 placeholder */}
        {process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
