"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between py-3 sm:py-4 gap-6">
          <Link href="/" className="flex items-center group">
            <Logo 
              width={220} 
              height={50} 
              showText={true} 
              className="group-hover:opacity-80 transition-opacity hidden sm:block text-gray-900"
            />
            <div className="sm:hidden">
              <Logo width={188} height={54} showText={true} className="group-hover:opacity-80 transition-opacity text-gray-900" />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center flex-1 ml-4">
            <nav className="flex items-center justify-between w-full max-w-5xl">
              {[
                { href: "/about", label: "About" },
                { href: "/service-area", label: "Service Area" },
                { href: "/services", label: "Services" },
                { href: "/careers", label: "Careers" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-indigo-700 font-semibold transition-colors uppercase text-xs tracking-wide whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="tel:+14376796446" className="ml-6 bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-sm whitespace-nowrap shrink-0">
              Call 437-679-6446
            </Link>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2.5 text-gray-700 hover:text-indigo-700 transition-colors rounded-lg border border-gray-300"
              aria-label="Toggle navigation menu"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-md">
            <nav className="py-4 space-y-1">
              <a
                href="tel:+14376796446"
                className="block mx-2 mb-4 bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-indigo-800 transition-colors text-center"
              >
                Call (437) 679-6446
              </a>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/service-area", label: "Service Area" },
                { href: "/services", label: "Services" },
                { href: "/careers", label: "Careers" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}