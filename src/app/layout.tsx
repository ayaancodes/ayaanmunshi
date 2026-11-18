import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

// Set NEXT_PUBLIC_SITE_URL once a custom domain is attached; until then this
// follows whatever URL Vercel assigns so og:image resolves correctly.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://ayaanmunshi.vercel.app");

const DESCRIPTION =
  "Ayaan Munshi is a software engineer studying at Western University, with experience in applied AI, product engineering, and capital markets.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ayaan Munshi — Software Engineer",
  description: DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ayaan Munshi — Software Engineer",
    description: DESCRIPTION,
    url: "/",
    siteName: "Ayaan Munshi",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ayaan Munshi" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayaan Munshi — Software Engineer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdn.peasy.so/peasy.js"
          data-website-id="01jp2b1pbzn6wmjsng3q8v5ax0"
          async
        ></script>
      </head>

      <body className="text-body bg-[#0A0A0A] selection:bg-primary selection:text-hoverColor">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
