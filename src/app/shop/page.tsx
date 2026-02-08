'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 mix-blend-difference">
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-white text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </Link>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-6 right-6 md:right-12 text-white flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 hidden md:block">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="w-6 h-[1px] bg-white" />
            <span className="w-6 h-[1px] bg-white" />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-50 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-end px-6 md:px-12 py-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white flex items-center gap-3 group">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors hidden md:block">Close</span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-6 h-[1px] bg-white rotate-45" />
              <span className="absolute w-6 h-[1px] bg-white -rotate-45" />
            </div>
          </button>
        </div>
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-4 text-center">
            {[
              { name: 'Shop', href: '/shop' },
              { name: 'Science', href: '/science' },
              { name: 'About', href: '/about' },
              { name: 'Ambassadors', href: '/ambassadors' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-5xl md:text-7xl font-light hover:text-white/40 transition-colors block py-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-black/40 block mb-6">Coming Soon</span>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Shop
          </h1>
          <p className="text-black/50 text-base md:text-lg max-w-md mx-auto mb-12">
            We're putting the finishing touches on something special.
          </p>
          
          {/* Product Preview */}
          <div className="relative w-48 h-64 mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-sm flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <span 
                className="text-white text-3xl tracking-[0.1em] -rotate-90"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                memo
              </span>
            </div>
          </div>

          <Link 
            href="/"
            className="inline-block border border-black/20 px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-all duration-300"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-black/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <span 
            className="text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-black/30">
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
