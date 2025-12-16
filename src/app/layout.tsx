import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "GoldenBridge Care - Compassionate Elderly Care Services",
  description: "Professional elderly care services including companionship, personal assistance, and more. Serving families with dignity and respect across the GTA.",
  keywords: "elderly care, home care, senior care, companionship, GTA, Toronto, personal support",
  authors: [{ name: "GoldenBridge Care" }],
  creator: "GoldenBridge Care",
  publisher: "GoldenBridge Care",
  metadataBase: new URL('https://your-vercel-domain.vercel.app'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GoldenBridge Care - Compassionate Elderly Care Services",
    description: "Professional elderly care services with dignity and respect across the GTA",
    url: 'https://your-vercel-domain.vercel.app',
    siteName: 'GoldenBridge Care',
    images: [
      {
        url: '/apple-icon',
        width: 180,
        height: 180,
        alt: 'GoldenBridge Care Logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "GoldenBridge Care - Elderly Care Services",
    description: "Professional elderly care services across the GTA",
    images: ['/apple-icon'],
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
    <html lang="en">
      <head />
      <body className="min-h-screen">
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container relative z-10 section-padding text-white">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">GB</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">GoldenBridge Care</h3>
                <p className="text-indigo-200 font-medium">Compassionate Care Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Providing compassionate, professional elderly care services with a focus on dignity, 
              independence, and quality of life. Available 7 days a week across the GTA.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-indigo-200">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold">Emergency Line</p>
                  <p className="text-white font-bold">(437) 679-6446</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-indigo-200">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white">info@goldenbridgecare.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Companionship", href: "/services#companionship" },
                { name: "Mental Health Support", href: "/services#mental-health" },
                { name: "Health Support", href: "/services#health" },
                { name: "Daily Living Support", href: "/services#daily-living" }
              ].map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full group-hover:shadow-lg group-hover:shadow-indigo-300/50 transition-shadow"></div>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full group-hover:shadow-lg group-hover:shadow-indigo-300/50 transition-shadow"></div>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg">&copy; 2025 GoldenBridge Care. All rights reserved.</p>
            <p className="mt-2 text-indigo-300">Licensed and insured elderly care provider serving the Greater Toronto Area</p>
          </div>
        </div>
      </div>
    </footer>
  );
}