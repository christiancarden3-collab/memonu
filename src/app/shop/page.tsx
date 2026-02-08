'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const playfair = "var(--font-playfair), 'Playfair Display', Georgia, serif";

  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#0a0a0a]" style={{ fontFamily: playfair }}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-8 text-center">
        <Link href="/" className="text-[#0a0a0a] text-lg tracking-[0.06em]">
          memo
        </Link>
        
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
          <ul className="space-y-12 text-center">
            {['Shop', 'Science', 'About', 'Ambassadors', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#f5f5f0] text-5xl md:text-7xl font-light hover:text-[#f5f5f0]/40 transition-colors block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero - Simple Coming Soon */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-12">
            Coming Soon
          </h1>
          <p className="text-[#0a0a0a]/50 text-lg md:text-xl max-w-md mx-auto mb-20">
            We're putting the finishing touches on something special.
          </p>

          <Link 
            href="/"
            className="inline-block border border-[#0a0a0a]/30 px-14 py-5 text-[11px] tracking-[0.3em] uppercase hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all duration-300"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}
