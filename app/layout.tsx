import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodaCoding Solutions - Digital Solutions That Drive Growth | Coming Soon",
  description: "CodaCoding Solutions is building next-generation digital solutions for businesses. Professional web development, mobile apps, and innovative technology solutions launching soon.",
  keywords: [
    "CodaCoding",
    "CodaCoding Solutions",
    "digital solutions",
    "web development",
    "mobile app development",
    "software development",
    "technology solutions",
    "digital transformation",
    "coming soon",
    "codacoding.dev"
  ],
  authors: [{ name: "CodaCoding Solutions" }],
  creator: "CodaCoding Solutions",
  publisher: "CodaCoding Solutions",
  metadataBase: new URL("https://codacoding.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codacoding.dev",
    title: "CodaCoding Solutions - Digital Solutions That Drive Growth",
    description: "Building next-generation digital solutions for businesses. Professional web development, mobile apps, and innovative technology solutions launching soon.",
    siteName: "CodaCoding Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodaCoding Solutions - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodaCoding Solutions - Digital Solutions That Drive Growth",
    description: "Building next-generation digital solutions for businesses. Launching soon!",
    creator: "@codacodingdev",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code", // Replace with actual code after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

