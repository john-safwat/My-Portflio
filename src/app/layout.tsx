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
  title: "John Safwat — Software Engineer",
  description:
    "Portfolio of John Safwat Boles — Software Engineer. Mobile (Android/Kotlin, Flutter, Kotlin Multiplatform) & Backend (Java, Spring Boot). 3+ years building production-grade apps and services.",
  keywords: [
    "John Safwat",
    "Software Engineer",
    "Mobile Software Engineer",
    "Mobile Developer",
    "Flutter Developer",
    "Kotlin Multiplatform",
    "Android Developer",
    "Spring Boot",
    "Portfolio",
  ],
  authors: [{ name: "John Safwat Boles" }],
  openGraph: {
    title: "John Safwat — Software Engineer",
    description:
      "Portfolio of John Safwat Boles — Software Engineer specializing in Mobile (Android/Kotlin, Flutter, KMP) & Backend (Java, Spring Boot).",
    url: "https://johnsafwat.dev",
    siteName: "John Safwat Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Safwat — Software Engineer",
    description:
      "Portfolio of John Safwat Boles — Software Engineer specializing in Mobile (Android/Kotlin, Flutter, KMP) & Backend (Java, Spring Boot).",
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
  jobTitle: "Software Engineer",
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
    "Kotlin",
    "Java",
    "Spring Boot",
    "Flutter",
    "Kotlin Multiplatform",
    "Android Native",
    "Mobile Development",
    "Backend Development",
    "Microservices",
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
