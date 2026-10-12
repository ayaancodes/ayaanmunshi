import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const DESCRIPTION =
  "Software engineering student interested in building systems that connect technology, markets, and people.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayaanmunshi.com"),
  title: "Ayaan Munshi",
  description: DESCRIPTION,
  icons: { icon: "/favicon.png" },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src="https://cdn.peasy.so/peasy.js"
          data-website-id="01jp2b1pbzn6wmjsng3q8v5ax0"
          async
        ></script>
      </head>

      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
