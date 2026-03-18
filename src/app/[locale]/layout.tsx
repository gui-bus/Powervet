//#region Imports
import type { Metadata } from "next";

import { Libre_Baskerville, Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
  metadataBase: new URL("https://powervet.vercel.app"),
  title: {
    default: "PowerVet — Veterinary Medicine Refined for Feline Wellbeing",
    template: "%s | PowerVet",
  },
  description:
    "PowerVet offers expert veterinary care for cats, combining advanced medical treatment with personalized attention for long-term feline wellbeing.",
  applicationName: "PowerVet",
  icons: {
    icon: "/favicon.ico",
  },
};
//#endregion

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeFromParams } = await params;

  // Garantir que temos um locale válido
  const locale = ["en", "pt"].includes(localeFromParams)
    ? localeFromParams
    : "pt";

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${manrope.variable} ${libreBaskerville.variable} antialiased w-full max-w-450 mx-auto`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
