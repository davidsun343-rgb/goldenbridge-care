"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center group">
            <Logo 
              width={220} 
              height={50} 
              showText={true} 
              className="group-hover:opacity-80 transition-opacity hidden sm:block text-gray-900" 
            />
            {/* Mobile logo - icon only */}
            <div className="sm:hidden">
              <Logo width={140} height={40} showText={true} className="group-hover:opacity-80 transition-opacity text-gray-900" />
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="btn-primary">
              <span>Contact Us</span>
            </Link>
          </nav>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-700 hover:text-indigo-600 transition-colors rounded-xl hover:bg-indigo-50"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              <Link 
                href="/services" 
                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/pricing" 
                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="block mx-2 mt-4 bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}