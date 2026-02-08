'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-8 md:px-16 py-8 flex justify-between items-center mix-blend-difference">
        <Link 
          href="/" 
          className="text-white text-2xl tracking-[0.06em]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          memo
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white flex items-center gap-3 group"
        >
          <span className="text-xs tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 hidden md:block">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="w-7 h-px bg-white" />
            <span className="w-7 h-px bg-white" />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-50 transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end px-8 md:px-16 py-8">
          <button onClick={() => setIsMenuOpen(false)} className="text-white flex items-center gap-3">
            <span className="text-xs tracking-[0.3em] uppercase opacity-60">Close</span>
            <div className="relative w-7 h-7 flex items-center justify-center">
              <span className="absolute w-7 h-px bg-white rotate-45" />
              <span className="absolute w-7 h-px bg-white -rotate-45" />
            </div>
          </button>
        </div>
        <nav className="px-8 md:px-16 py-16">
          <ul className="space-y-5">
            {['Shop', 'About Us', 'Contact', 'Ambassadors'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase().replace(' ', '-').replace('about-us', 'about')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-5xl font-normal hover:opacity-40 transition-opacity block"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-8">
        <div className="text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-black/40 block mb-8">Coming Soon</span>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Shop
          </h1>
          <p className="text-black/50 text-lg md:text-xl max-w-xl mx-auto mb-12">
            We're putting the finishing touches on something special. Join the waitlist to be first in line.
          </p>
          
          {/* Product Preview */}
          <div className="relative w-64 h-80 mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-sm flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <span 
                className="text-white text-4xl tracking-[0.1em] -rotate-90"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                memo
              </span>
            </div>
          </div>

          <Link 
            href="/"
            className="inline-block border border-black/20 px-12 py-5 text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span 
            className="text-xl tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-black/40">
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
