import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": "https://duskymoon.is-a.dev/#kxrn",
      "name": "Kxrn",
      "alternateName": "Chitresh",
      "url": "https://duskymoon.is-a.dev/roster",
      "image": "https://duskymoon.is-a.dev/assets/artists/kxrn.jpg",
      "description": "Indian independent music producer, software developer, and founder of DuskyMoon Productions.",
      "sameAs": [
        "https://kxrn.is-a.dev",
        "https://www.wikidata.org/wiki/Q141046426",
        "https://musicbrainz.org/artist/efbc6b4f-363b-4bbd-a5db-f4d4e8817607",
        "https://www.instagram.com/kxrn_gupta/",
        "https://open.spotify.com/artist/57sDiEfeHnIZX2g7gvPBR2"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://duskymoon.is-a.dev/#organization",
      "name": "DuskyMoon Productions",
      "url": "https://duskymoon.is-a.dev",
      "description": "Independent record label founded by Kxrn. Shaping the sound of tomorrow.",
      "founder": {
        "@id": "https://duskymoon.is-a.dev/#kxrn"
      },
      "sameAs": [
        "https://www.instagram.com/duskymoonproductions",
        "https://www.youtube.com/@DUSKYMOON_PRODUCTIONS"
      ],
      "knowsAbout": ["Music Production", "Independent Label", "Audio Engineering"],
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressCountry": "IN"
        }
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Kxrn",
          "jobTitle": "Founder & Artist"
        },
        {
          "@type": "Person",
          "name": "Ankit",
          "jobTitle": "Artist",
          "sameAs": ["https://www.instagram.com/ankiisinghh/"]
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: {
    template: "%s | DuskyMoon Productions",
    default: "DuskyMoon Productions - The Future of Sound",
  },
  description: "Independent record label founded by Kxrn. Shaping the sound of tomorrow.",
  keywords: ["DuskyMoon Productions", "Kxrn", "Chitresh Gupta", "Record Label", "Music Producer", "Delhi", "Independent Music", "Ankit"],
  authors: [{ name: "Kxrn (Chitresh Gupta)" }],
  openGraph: {
    title: "DuskyMoon Productions",
    description: "The official record label founded by Kxrn.",
    url: "https://duskymoon.is-a.dev",
    siteName: "DuskyMoon Productions",
    images: [
      {
        url: "/assets/og-image-duskymoon.jpg",
        width: 1200,
        height: 630,
        alt: "DuskyMoon Productions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kxrn_gupta",
  },
  metadataBase: new URL("https://duskymoon.is-a.dev"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#EAEAEA]">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
