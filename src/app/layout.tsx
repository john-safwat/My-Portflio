import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "John Safwat — Mobile Application Developer",
  description:
    "Portfolio of John Safwat Boles — Mobile Application Developer specializing in Flutter, Kotlin Multiplatform, and Android Native. 3+ years building production-grade cross-platform applications.",
  keywords: [
    "John Safwat",
    "Mobile Developer",
    "Flutter Developer",
    "Kotlin Multiplatform",
    "Android Developer",
    "Portfolio",
    "Cross-platform",
  ],
  authors: [{ name: "John Safwat Boles" }],
  openGraph: {
    title: "John Safwat — Mobile Application Developer",
    description:
      "Portfolio of John Safwat Boles — Mobile Application Developer specializing in Flutter, Kotlin Multiplatform, and Android Native.",
    url: "https://johnsafwat.dev",
    siteName: "John Safwat Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Safwat — Mobile Application Developer",
    description:
      "Portfolio of John Safwat Boles — Mobile Application Developer specializing in Flutter, Kotlin Multiplatform, and Android Native.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Safwat Boles",
  jobTitle: "Mobile Application Developer",
  url: "https://johnsafwat.dev",
  email: "johnsafwat362@gmail.com",
  telephone: "+201040476728",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  sameAs: [
    "https://www.linkedin.com/in/john-safwat-b3645427a/",
    "https://github.com/john-safwat",
  ],
  knowsAbout: [
    "Flutter",
    "Kotlin Multiplatform",
    "Android Native",
    "Mobile Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "MTI University",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://johnsafwat.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
