import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Header } from "../components/Header";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goldenbridgecare.ca";

export const metadata: Metadata = {
  title: "GoldenBridge Care - Compassionate Elderly Care Services",
  description: "Professional elderly care services including companionship, personal assistance, and more. Serving families with dignity and respect across the GTA.",
  keywords: "elderly care, home care, senior care, companionship, GTA, Toronto, personal support",
  authors: [{ name: "GoldenBridge Care" }],
  creator: "GoldenBridge Care",
  publisher: "GoldenBridge Care",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GoldenBridge Care - Compassionate Elderly Care Services",
    description: "Professional elderly care services with dignity and respect across the GTA",
    url: siteUrl,
    siteName: 'GoldenBridge Care',
    images: [
      {
        url: '/images/goldenbridge_care_logo_hq.png',
        width: 1200,
        height: 630,
        alt: 'GoldenBridge Care - Elderly Care Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GoldenBridge Care - Elderly Care Services",
    description: "Professional elderly care services across the GTA",
    images: ['/images/goldenbridge_care_logo_hq.png'],
  },
  icons: {
    icon: '/images/goldenbridge_care_logo.jpg',
    apple: '/images/goldenbridge_care_logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className={`${inter.className} min-h-screen antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17720351123"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17720351123');
          `}
        </Script>
        <Script id="localbusiness-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "GoldenBridge Care",
            url: siteUrl,
            image: `${siteUrl}/images/goldenbridge_care_logo_hq.png`,
            telephone: "+1-437-679-6446",
            email: "info@goldenbridgecare.ca",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2967 Dundas St. W. #26",
              addressLocality: "Toronto",
              addressRegion: "ON",
              postalCode: "M6P 1Z2",
              addressCountry: "CA",
            },
            areaServed: "Greater Toronto Area",
          })}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold uppercase">GoldenBridge Care</h3>
            <p className="text-gray-300 mt-3 max-w-xl">
              You make the memories. We provide compassionate home care support for families across the Greater Toronto Area.
            </p>
            <p className="text-gray-300 mt-4">
              <span className="font-semibold text-white">Hours:</span> Open 24/7
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold uppercase tracking-wide mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/services">Home Care Services</Link></li>
                  <li><Link href="/service-area">Service Area</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold uppercase tracking-wide mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Bold */}
          <div>
            <h4 className="font-semibold uppercase tracking-wide mb-6 text-indigo-300">Contact</h4>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Phone</p>
                <p className="text-4xl font-extrabold text-white">(437) 679-6446</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Address</p>
                <p className="text-2xl font-extrabold text-white leading-relaxed">
                  2967 Dundas St. W. #26<br />
                  Toronto, ON M6P 1Z2
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
          © 2026 GoldenBridge Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}