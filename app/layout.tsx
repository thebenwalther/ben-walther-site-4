import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ben Walther — Life & Personal Growth Coaching",
  description:
    "High-accountability coaching for people finally ready to close the gap between who they are and who they know they could be. Take the free Clarity Assessment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
