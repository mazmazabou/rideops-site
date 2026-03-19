import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFadeObserver from "@/components/ScrollFadeObserver";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

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
    type: "website",
    siteName: "RideOps",
    title: "RideOps — Campus Transportation Operations Platform",
    description:
      "Real-time dispatch, rider booking, driver management, and analytics for university accessibility transportation programs.",
    url: "https://ride-ops.com",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RideOps — Campus Transportation Operations Platform",
    description:
      "Real-time dispatch, rider booking, driver management, and analytics for university accessibility transportation programs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://plausible.io/js/pa-NQ6TjP5dbN8SvFqPldSnq.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollFadeObserver />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
