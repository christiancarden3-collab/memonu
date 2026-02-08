'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Science() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-8">
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-[#f5f5f0] text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            memo
          </Link>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-8 right-6 md:right-12 text-[#f5f5f0] flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f5f0]/50 group-hover:text-[#f5f5f0] transition-colors hidden md:block">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="w-6 h-[1px] bg-[#f5f5f0]" />
            <span className="w-6 h-[1px] bg-[#f5f5f0]" />
          </div>
        </button>
      </header>

      {/* Menu Overlay - EXPANDED */}
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
          <ul className="space-y-10 text-center">
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
                  className="text-[#f5f5f0] text-4xl md:text-6xl font-light hover:text-[#f5f5f0]/40 transition-colors block"
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
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f5f0]/40 block mb-10">The Science</span>
          <h1 
            className="text-5xl md:text-7xl font-light mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Sublingual Delivery
          </h1>
          <p className="text-[#f5f5f0]/50 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Why the area under your tongue is one of the most efficient absorption sites in your body.
          </p>
        </div>
      </section>

      {/* Speed Comparison - MEGA SPACED */}
      <section className="py-48 md:py-64 px-6 border-t border-[#f5f5f0]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl font-light mb-24"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Absorption Speed
          </h2>
          
          <div className="space-y-16">
            <div className="border border-[#f5f5f0]/30 p-12 md:p-16">
              <div className="text-6xl md:text-7xl font-light text-[#f5f5f0] mb-6">~30s</div>
              <div className="text-xl font-light mb-4">memo strips</div>
              <div className="text-[11px] text-[#f5f5f0]/40 uppercase tracking-widest">Sublingual</div>
            </div>
            
            <div className="border border-[#f5f5f0]/10 p-12 md:p-16">
              <div className="text-6xl md:text-7xl font-light text-[#f5f5f0]/30 mb-6">15-30m</div>
              <div className="text-xl font-light text-[#f5f5f0]/50 mb-4">Drinks</div>
              <div className="text-[11px] text-[#f5f5f0]/30 uppercase tracking-widest">Digestive</div>
            </div>
            
            <div className="border border-[#f5f5f0]/10 p-12 md:p-16">
              <div className="text-6xl md:text-7xl font-light text-[#f5f5f0]/30 mb-6">30-60m</div>
              <div className="text-xl font-light text-[#f5f5f0]/50 mb-4">Pills</div>
              <div className="text-[11px] text-[#f5f5f0]/30 uppercase tracking-widest">Digestive</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - MEGA SPACED */}
      <section className="py-48 md:py-64 px-6 bg-[#f5f5f0] text-[#0a0a0a]">
        <div className="max-w-2xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-light mb-32 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            How It Works
          </h2>
          
          <div className="space-y-32">
            <div className="text-center">
              <span className="text-6xl md:text-7xl font-light text-[#0a0a0a]/10 block mb-10">01</span>
              <h3 className="text-2xl font-light mb-8">Rich Blood Supply</h3>
              <p className="text-[#0a0a0a]/50 max-w-md mx-auto text-lg leading-relaxed">
                Dense network of blood vessels allows rapid absorption directly into your bloodstream.
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-6xl md:text-7xl font-light text-[#0a0a0a]/10 block mb-10">02</span>
              <h3 className="text-2xl font-light mb-8">Bypasses First-Pass</h3>
              <p className="text-[#0a0a0a]/50 max-w-md mx-auto text-lg leading-relaxed">
                Unlike pills, sublingual delivery avoids the liver's first-pass effect, increasing bioavailability.
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-6xl md:text-7xl font-light text-[#0a0a0a]/10 block mb-10">03</span>
              <h3 className="text-2xl font-light mb-8">Thin Membrane</h3>
              <p className="text-[#0a0a0a]/50 max-w-md mx-auto text-lg leading-relaxed">
                The tissue under your tongue is thin and permeable, allowing molecules to pass through efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Electrolytes - MEGA SPACED */}
      <section className="py-48 md:py-64 px-6 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl font-light mb-32"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Electrolytes
          </h2>
          
          <div className="space-y-24">
            <div>
              <h3 className="text-2xl font-light mb-8">Sodium</h3>
              <p className="text-[#f5f5f0]/40 text-lg leading-relaxed max-w-md mx-auto">
                Primary electrolyte lost in sweat. Critical for fluid balance and muscle function.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-8">Potassium</h3>
              <p className="text-[#f5f5f0]/40 text-lg leading-relaxed max-w-md mx-auto">
                Works with sodium for cellular hydration. Essential for heart rhythm and preventing cramps.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-8">Magnesium</h3>
              <p className="text-[#f5f5f0]/40 text-lg leading-relaxed max-w-md mx-auto">
                Supports muscle relaxation, energy production, and overall electrolyte balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Leave Out - MEGA SPACED */}
      <section className="py-48 md:py-64 px-6 border-t border-[#f5f5f0]/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl font-light mb-24"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What We Leave Out
          </h2>
          
          <div className="space-y-8 text-[#f5f5f0]/40 text-lg">
            <p>No added sugars</p>
            <p>No artificial colors</p>
            <p>No artificial sweeteners</p>
            <p>No fillers</p>
            <p>No caffeine</p>
            <p>No proprietary blends</p>
          </div>
        </div>
      </section>

      {/* CTA - MEGA SPACED */}
      <section className="py-48 md:py-64 px-6 bg-[#f5f5f0] text-[#0a0a0a] text-center">
        <h2 
          className="text-3xl md:text-5xl font-light mb-12"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Experience the Difference
        </h2>
        <p className="text-[#0a0a0a]/50 text-lg mb-16 max-w-md mx-auto">
          Try memo and feel what fast hydration really means.
        </p>
        <Link 
          href="/shop"
          className="inline-block border border-[#0a0a0a]/30 px-12 py-5 text-[11px] tracking-[0.25em] uppercase hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#f5f5f0]/10 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <span 
            className="text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/30">
            <Link href="/about" className="hover:text-[#f5f5f0] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#f5f5f0] transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
