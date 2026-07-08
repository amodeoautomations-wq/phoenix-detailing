import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phoenix-detailing.vercel.app"),

  title: {
    default: "Phoenix Detailing | Premium Mobile Auto Detailing on Long Island",
    template: "%s | Phoenix Detailing",
  },

  description:
    "Professional mobile auto detailing serving Long Island and Suffolk County. Ceramic coatings, paint correction, paint protection film, window tint, interior and exterior detailing.",

  keywords: [
    "Auto Detailing Long Island",
    "Mobile Detailing Suffolk County",
    "Ceramic Coating Long Island",
    "Paint Correction",
    "Window Tint",
    "Paint Protection Film",
    "Phoenix Detailing",
    "Car Detailing",
  ],

  authors: [{ name: "Phoenix Detailing" }],

  creator: "Phoenix Detailing",

  publisher: "Phoenix Detailing",

  openGraph: {
    title: "Phoenix Detailing",
    description:
      "Premium Mobile Auto Detailing serving Long Island and Suffolk County.",
    url: "https://phoenix-detailing.vercel.app",
    siteName: "Phoenix Detailing",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phoenix Detailing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Phoenix Detailing",
    description:
      "Premium Mobile Auto Detailing serving Long Island and Suffolk County.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${manrope.variable}`}
    >
      <body className="bg-black font-[var(--font-manrope)] text-white">
        {children}
      </body>
    </html>
  );
}