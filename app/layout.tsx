import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "The Valley Inc.",
  description:
    "A portfolio of startups built for students, local businesses, and underserved communities.",
  icons: {
    icon: "/mlogo.png",
  },
  openGraph: {
    title: "The Valley Inc.",
    description: "Products built for real people, real problems.",
    url: "https://thevalleyinc.co",
    siteName: "The Valley Inc.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
