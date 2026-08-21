import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecom Firstlady — Shopify Growth Specialist",
  description:
    "Your Shopify store, built to actually sell. Stephanie helps Shopify store owners build, optimize, and scale — with a decade of real operator experience.",
  openGraph: {
    title: "Ecom Firstlady — Shopify Growth Specialist",
    description:
      "Your Shopify store, built to actually sell. Work with a Shopify specialist who's been in the trenches.",
    url: "https://ecomfirstlady.com",
    siteName: "Ecom Firstlady",
    images: [{ url: "/hero-portrait.png", width: 900, height: 1200 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecom Firstlady — Shopify Growth Specialist",
    description: "Your Shopify store, built to actually sell.",
    images: ["/hero-portrait.png"],
  },
  metadataBase: new URL("https://ecomfirstlady.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Analytics placeholders — wire in before launch */}
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
      <body>{children}</body>
    </html>
  );
}
