import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFadeObserver from "@/components/ScrollFadeObserver";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ride-ops.com"),
  title: "RideOps — Campus Transportation Operations Platform",
  description:
    "Real-time dispatch, rider booking, driver management, and analytics for university accessibility transportation programs.",
  icons: {
    icon: "/icon.svg",
    apple: "/logoWithBackground.png",
  },
  openGraph: {
    title: "RideOps — Campus Transportation Operations Platform",
    description:
      "Real-time dispatch, rider booking, driver management, and analytics for university accessibility transportation programs.",
    images: ["/screenshots/dispatch-board-usc.png"],
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
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollFadeObserver />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
