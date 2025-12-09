import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import LandingOverlay from "@/components/LandingOverlay";

export const metadata: Metadata = {
  title: "Ayaan Munshi",
  description:
    "Software engineering student interested in building systems that connect technology, markets, and people",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Ayaan Munshi",
    description:
      "Software engineering student interested in building systems that connect technology, markets, and people",
    url: "https://salim.engineer",
    siteName: "Ayaan Munshi",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Salim Rutaganda" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salim Rutaganda",
    description:
      "A minimal personal portfolio website made with Next.js and Tailwind CSS",
    images: ["/og.png"],
    creator: "@salimnunez01",
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

      {/* full-page smooth scroll container */}
      <body className="text-body bg-[#0A0A0A] selection:bg-primary selection:text-hoverColor">
        <Analytics />
        <main className="font-sans h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
          {/* Section 1 — Landing (full viewport hero) */}
          <section className="h-screen snap-start">
            <LandingOverlay />
          </section>

          {/* Section 2 — Main portfolio content */}
          <section
            id="content"
            className="min-h-screen snap-start mx-auto my-8 max-w-[400px] px-4 md:my-16 md:max-w-[600px]"
          >
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
