//#region Imports
import type { Metadata } from "next";
import { Manrope, Libre_Baskerville } from "next/font/google";
import "./globals.css";
//#endregion

//#region Fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});
//#endregion

//#region Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://powervet.com"),

  title: {
    default: "PowerVet — Veterinary Medicine Refined for Feline Wellbeing",
    template: "%s | PowerVet",
  },

  description:
    "PowerVet offers expert veterinary care for cats, combining advanced medical treatment with personalized attention for long-term feline wellbeing.",

  applicationName: "PowerVet",

  keywords: [
    "veterinary medicine",
    "cat care",
    "feline health",
    "pet wellness",
    "veterinary clinic",
    "preventive care",
    "PowerVet",
  ],

  authors: [
    {
      name: "Guilherme Bustamante",
    },
  ],

  creator: "Guilherme Bustamante",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "PowerVet — Expert Veterinary Care for Cats",
    description:
      "Providing personalized veterinary medicine focused on feline comfort and wellbeing.",
    url: "https://powervet.vercel.app",
    siteName: "PowerVet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PowerVet — Feline Veterinary Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PowerVet — Veterinary Medicine for Cats",
    description:
      "Expert care and personalized treatments to ensure your cat’s wellbeing.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://powervet.vercel.app",
  },
};
//#endregion

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${manrope.variable} ${libreBaskerville.variable} antialiased w-full max-w-400 mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
