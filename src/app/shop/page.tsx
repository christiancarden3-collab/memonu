'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#0a0a0a]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-8">
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-[#0a0a0a] text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </Link>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-8 right-6 md:right-12 text-[#0a0a0a] flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]/50 group-hover:text-[#0a0a0a] hidden md:block">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="w-6 h-[1px] bg-[#0a0a0a]" />
            <span className="w-6 h-[1px] bg-[#0a0a0a]" />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-50 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-8 right-6 md:right-12 text-[#f5f5f0] flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f5f0]/50 group-hover:text-[#f5f5f0] transition-colors hidden md:block">Close</span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute w-6 h-[1px] bg-[#f5f5f0] rotate-45" />
            <span className="absolute w-6 h-[1px] bg-[#f5f5f0] -rotate-45" />
          </div>
        </button>
        
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-6 text-center">
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
                  className="text-[#f5f5f0] text-4xl md:text-6xl font-light hover:text-[#f5f5f0]/40 transition-colors block py-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Simple Hero - Just Coming Soon */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Coming Soon
          </h1>
          <p className="text-[#0a0a0a]/50 text-base md:text-lg max-w-md mx-auto mb-16">
            We're putting the finishing touches on something special.
          </p>

          <Link 
            href="/"
            className="inline-block border border-[#0a0a0a]/30 px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all duration-300"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}
