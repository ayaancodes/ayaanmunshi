import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

// Set NEXT_PUBLIC_SITE_URL once a custom domain is attached; until then this
// follows whatever URL Vercel assigns so og:image resolves correctly.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const DESCRIPTION =
  "Software engineering student interested in building systems that connect technology, markets, and people.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ayaan Munshi",
  description: DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ayaan Munshi",
    description: DESCRIPTION,
    url: "/",
    siteName: "Ayaan Munshi",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ayaan Munshi" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayaan Munshi",
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
