import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F9F8F3",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  category: "education",
  keywords: [
    "online learning",
    "product design courses",
    "technology courses",
    "business skills",
    "creative learning",
    "Luma Learning",
    "practical courses",
    "expert-led education",
  ],
  authors: [{ name: "Luma Learning Team", url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luma Learning: practical courses in design, technology, business, and creative skills.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luma Learning: practical courses in design, technology, business, and creative skills.",
      },
    ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 512,
          height: 512,
        },
        image: `${siteUrl}/og-image.png`,
        description: siteDescription,
        email: "contact@luma.com",
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@luma.com",
          contactType: "customer support",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "Course",
        "@id": `${siteUrl}/#featured-course`,
        url: `${siteUrl}/#courses`,
        name: "Designing products people understand.",
        description:
          "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
        provider: { "@id": `${siteUrl}/#organization` },
        educationalLevel: "Intermediate",
        timeRequired: "PT2H40M",
        inLanguage: "en",
        teaches: "Product design",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT2H40M",
          instructor: {
            "@type": "Person",
            name: "Maya Chen",
            jobTitle: "Senior Product Designer",
          },
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Roboto:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-canvas text-brand-dark antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
