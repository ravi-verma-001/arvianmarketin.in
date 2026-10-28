import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Arvian Marketing | Performance Marketing & Strategic Web Experiences",
    template: "%s | Arvian Marketing",
  },
  description: "Arvian Marketing is Delhi NCR & Noida's premier performance marketing & web development agency. Custom websites, high-converting landing pages, Meta Ads, and SEO solutions.",
  keywords: [
    "Website Development Company in Delhi NCR",
    "Website Designer in Noida",
    "Web Design Agency in Delhi",
    "Digital Marketing Agency in Noida",
    "Meta Ads Agency India",
    "SEO Company in Delhi NCR",
    "Social Media Marketing Agency in Noida",
    "Arvian Marketing"
  ],
  authors: [{ name: "Arvian Marketing Team" }],
  creator: "Arvian Marketing",
  publisher: "Arvian Marketing",
  metadataBase: new URL("https://arvianmarketing.in"),
  openGraph: {
    title: "Arvian Marketing | Performance Marketing & Strategic Web Experiences",
    description: "Grow your business online through strategic Meta Ads, professional websites, conversion-focused landing pages, and SEO solutions.",
    url: "https://arvianmarketing.in",
    siteName: "Arvian Marketing",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvian Marketing | Performance Marketing & Web Experiences",
    description: "Grow your business online through strategic Meta Ads, professional websites, conversion-focused landing pages, and SEO solutions.",
    creator: "@ArvianMarketing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://arvianmarketing.in/#organization",
      "name": "Arvian Marketing",
      "url": "https://arvianmarketing.in",
      "logo": "https://arvianmarketing.in/arvianlogo.webp",
      "description": "Strategic Performance Marketing, Website Design and Conversion Landing Pages in Noida, Delhi NCR.",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61593074286842",
        "https://www.instagram.com/arvianmarketing/",
        "https://www.linkedin.com/in/ravi-verma-41a291212/"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://arvianmarketing.in/#localbusiness",
      "name": "Arvian Marketing",
      "url": "https://arvianmarketing.in",
      "logo": "https://arvianmarketing.in/arvianlogo.webp",
      "image": "https://arvianmarketing.in/arvianlogo.webp",
      "description": "Top Performance Marketing Agency & Website Development Company in Noida and Delhi NCR.",
      "telephone": "+91 89204 42422",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Noida",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5355,
        "longitude": 77.3910
      },
      "areaServed": ["Noida", "Delhi", "Ghaziabad", "Delhi NCR", "India"],
      "priceRange": "$$"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${inter.variable} bg-[#F6F8FC] text-[#0f131a] font-sans antialiased selection:bg-[#dbe1ff] selection:text-[#001539]`}
      >
        {/* Google Analytics Placeholder */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* JSON-LD Schema */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
