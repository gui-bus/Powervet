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
  title: "PowerVet - Veterinary medicine, refined for feline wellbeing.",
  description: "Veterinary medicine focused on feline health and comfort.",
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
