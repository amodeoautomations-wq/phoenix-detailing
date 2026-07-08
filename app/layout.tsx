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
  title: "Phoenix Detailing",
  description: "Premium Mobile Auto Detailing | Long Island & Suffolk County",

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
      <body className="bg-black text-white font-[var(--font-manrope)]">
        {children}
      </body>
    </html>
  );
}