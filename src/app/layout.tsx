import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

import "aos/dist/aos.css";

import "@/assets/css/fontawesome.css";
import "@/assets/css/style.css";
// import "@/assets/css/gallery.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
// import AOSInitializer from "@/components/AOSInitializer";
import JavaScriptInitializer from "@/components/JavaScriptInitializer";
import AOSInitializer from "@/components/AOSInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Singles Revolution - #JesusAtTheCenter | Global Gospel Movement",
  description:
    "Join The Singles Revolution - a global Gospel movement for redeemed singleness, purposeful dating, and Christ-centered identity. Get your free copy of 'Single and Ready' and discover biblical identity, spiritual wholeness, and undivided devotion to Jesus Christ.",
  keywords: [
    "singles revolution",
    "christian singles",
    "biblical identity",
    "single and ready book",
    "jesus at the center",
    "christ-centered dating",
    "spiritual formation",
    "global discipleship",
    "redeemed singleness",
    "purposeful dating",
    "christian community",
    "gospel movement",
    "undivided devotion",
    "holy assignment",
    "spiritual wholeness",
  ],
  authors: [{ name: "The Singles Revolution" }],
  creator: "The Singles Revolution",
  publisher: "The Singles Revolution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thesinglesrevolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Singles Revolution - #JesusAtTheCenter",
    description:
      "A global Gospel movement for redeemed singleness, purposeful dating, and Christ-centered identity. Join 20,000 singles worldwide discovering biblical identity and spiritual wholeness.",
    url: "https://thesinglesrevolution.com",
    siteName: "The Singles Revolution",
    images: [
      {
        url: "/assets/img/logo.webp",
        width: 1200,
        height: 630,
        alt: "The Singles Revolution - Global Gospel Movement",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Singles Revolution - #JesusAtTheCenter",
    description:
      "A global Gospel movement for redeemed singleness, purposeful dating, and Christ-centered identity.",
    images: ["/assets/img/logo.webp"],
    creator: "@singlesrevolution",
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
    google: "your-google-verification-code",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="The Singles Revolution"
        />

        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>

        <link
          rel="stylesheet"
          href="https://bootstrapmade.com/content/vendors/fontawesome-free/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitializer />
        <JavaScriptInitializer />
        <Header />
        {children}
        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
        <Script src="/assets/js/main.js"></Script>
        {/* <Script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></Script> */}
      </body>
    </html>
  );
}
