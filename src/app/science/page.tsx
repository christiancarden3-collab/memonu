'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Science() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6">
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-white text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            memo
          </Link>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-6 right-6 md:right-12 text-white flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors hidden md:block">Menu</span>
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
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-6">The Science</span>
          <h1 
            className="text-5xl md:text-7xl font-light mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Sublingual Delivery
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto">
            Why the area under your tongue is one of the most efficient absorption sites in your body.
          </p>
        </div>
      </section>

      {/* Speed Comparison */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-light mb-16"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Absorption Speed
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-8">
              <div className="text-4xl font-light text-emerald-400 mb-3">~30s</div>
              <div className="text-base font-light mb-2">memo strips</div>
              <div className="text-[11px] text-white/40 uppercase tracking-wider">Sublingual</div>
            </div>
            
            <div className="border border-white/10 p-8">
              <div className="text-4xl font-light text-white/30 mb-3">15-30m</div>
              <div className="text-base font-light mb-2">Drinks</div>
              <div className="text-[11px] text-white/40 uppercase tracking-wider">Digestive</div>
            </div>
            
            <div className="border border-white/10 p-8">
              <div className="text-4xl font-light text-white/30 mb-3">30-60m</div>
              <div className="text-base font-light mb-2">Pills</div>
              <div className="text-[11px] text-white/40 uppercase tracking-wider">Digestive</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-light mb-16 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            How It Works
          </h2>
          
          <div className="space-y-12">
            <div className="text-center">
              <span className="text-4xl font-light text-black/10 block mb-4">01</span>
              <h3 className="text-xl font-light mb-3">Rich Blood Supply</h3>
              <p className="text-black/50 max-w-md mx-auto">
                Dense network of blood vessels allows rapid absorption directly into your bloodstream.
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-4xl font-light text-black/10 block mb-4">02</span>
              <h3 className="text-xl font-light mb-3">Bypasses First-Pass</h3>
              <p className="text-black/50 max-w-md mx-auto">
                Unlike pills, sublingual delivery avoids the liver's first-pass effect, increasing bioavailability.
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-4xl font-light text-black/10 block mb-4">03</span>
              <h3 className="text-xl font-light mb-3">Thin Membrane</h3>
              <p className="text-black/50 max-w-md mx-auto">
                The tissue under your tongue is thin and permeable, allowing molecules to pass through efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Electrolytes */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-light mb-16"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Electrolytes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-light mb-3">Sodium</h3>
              <p className="text-white/40 text-sm">
                Primary electrolyte lost in sweat. Critical for fluid balance and muscle function.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-light mb-3">Potassium</h3>
              <p className="text-white/40 text-sm">
                Works with sodium for cellular hydration. Essential for heart rhythm and preventing cramps.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-light mb-3">Magnesium</h3>
              <p className="text-white/40 text-sm">
                Supports muscle relaxation, energy production, and overall electrolyte balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Leave Out */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-light mb-12"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What We Leave Out
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white/40 text-sm">
            <div>No added sugars</div>
            <div>No artificial colors</div>
            <div>No artificial sweeteners</div>
            <div>No fillers</div>
            <div>No caffeine</div>
            <div>No proprietary blends</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-black text-center">
        <h2 
          className="text-3xl md:text-4xl font-light mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Experience the Difference
        </h2>
        <p className="text-black/50 text-base mb-10 max-w-md mx-auto">
          Try memo and feel what fast hydration really means.
        </p>
        <Link 
          href="/shop"
          className="inline-block border border-black/20 px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-all duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <span 
            className="text-lg tracking-[0.06em] text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-white/30">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
