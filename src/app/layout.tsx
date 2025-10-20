import type { Metadata } from "next";
import Link from "next/link";
import Logo from "../components/Logo";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoldenBridge Care - Compassionate Elderly Care Services",
  description: "Professional elderly care services including mental health support, companionship, medical assistance, and more. Serving families with dignity and respect.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo 
              width={220} 
              height={50} 
              showText={true} 
              className="hover:opacity-80 transition-opacity hidden sm:block text-white" 
            />
            {/* Mobile logo - icon only */}
            <div className="sm:hidden">
              <Logo width={140} height={40} showText={true} className="hover:opacity-80 transition-opacity text-white" />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/services" className="text-gray-300 hover:text-white font-medium transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white font-medium transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GoldenBridge Care</h3>
                <p className="text-gray-400 text-sm">Compassionate Care Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing compassionate, professional elderly care services with a focus on dignity, 
              independence, and quality of life. Available 7 days a week across the GTA.
            </p>
            <div className="text-sm text-gray-400">
              <p>📞 Emergency Line: (437) 360-9088</p>
              <p>📧 info@goldenbridgecare.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services#companionship" className="hover:text-white">Companionship</Link></li>
              <li><Link href="/services#mental-health" className="hover:text-white">Mental Health Support</Link></li>
              <li><Link href="/services#medical" className="hover:text-white">Medical Assistance</Link></li>
              <li><Link href="/services#daily-living" className="hover:text-white">Daily Living Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 GoldenBridge Care. All rights reserved. Licensed and insured elderly care provider.</p>
        </div>
      </div>
    </footer>
  );
}