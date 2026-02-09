'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Science() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const playfair = "var(--font-playfair), 'Playfair Display', Georgia, serif";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]" style={{ fontFamily: playfair }}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-8 text-center">
        <Link href="/" className="text-[#f5f5f0] text-lg tracking-[0.06em]">
          memo
        </Link>
        
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

      {/* Hero - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#f5f5f0]/40 block mb-8">The Science</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-8">
            Sublingual Delivery
          </h1>
          <p className="text-[#f5f5f0]/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
            Why the area under your tongue is one of the most efficient absorption sites in your body.
          </p>
        </div>
      </section>

      {/* Speed Comparison - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]">
        <div className="text-center w-full max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-16 md:mb-24">Absorption Speed</h2>
          
          <div className="space-y-8 md:space-y-12">
            <div className="border border-[#f5f5f0]/40 p-8 md:p-12">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f5f0] mb-4">~30s</div>
              <div className="text-lg font-light mb-2">memo strips</div>
              <div className="text-[10px] text-[#f5f5f0]/40 uppercase tracking-[0.3em]">Sublingual</div>
            </div>
            
            <div className="border border-[#f5f5f0]/10 p-8 md:p-12">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f5f0]/30 mb-4">15-30m</div>
              <div className="text-lg font-light text-[#f5f5f0]/50 mb-2">Drinks</div>
              <div className="text-[10px] text-[#f5f5f0]/30 uppercase tracking-[0.3em]">Digestive</div>
            </div>
            
            <div className="border border-[#f5f5f0]/10 p-8 md:p-12">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f5f0]/30 mb-4">30-60m</div>
              <div className="text-lg font-light text-[#f5f5f0]/50 mb-2">Pills</div>
              <div className="text-[10px] text-[#f5f5f0]/30 uppercase tracking-[0.3em]">Digestive</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 01 */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#f5f5f0] text-[#0a0a0a]">
        <div className="text-center max-w-lg">
          <span className="text-7xl sm:text-8xl md:text-9xl font-light text-[#0a0a0a]/10 block mb-8">01</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8">Rich Blood Supply</h3>
          <p className="text-[#0a0a0a]/50 text-base sm:text-lg md:text-xl leading-relaxed">
            Dense network of blood vessels allows rapid absorption directly into your bloodstream.
          </p>
        </div>
      </section>

      {/* How It Works - 02 */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#f5f5f0] text-[#0a0a0a]">
        <div className="text-center max-w-lg">
          <span className="text-7xl sm:text-8xl md:text-9xl font-light text-[#0a0a0a]/10 block mb-8">02</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8">Bypasses First-Pass</h3>
          <p className="text-[#0a0a0a]/50 text-base sm:text-lg md:text-xl leading-relaxed">
            Unlike pills, sublingual delivery avoids the liver's first-pass effect, increasing bioavailability.
          </p>
        </div>
      </section>

      {/* How It Works - 03 */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#f5f5f0] text-[#0a0a0a]">
        <div className="text-center max-w-lg">
          <span className="text-7xl sm:text-8xl md:text-9xl font-light text-[#0a0a0a]/10 block mb-8">03</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8">Thin Membrane</h3>
          <p className="text-[#0a0a0a]/50 text-base sm:text-lg md:text-xl leading-relaxed">
            The tissue under your tongue is thin and permeable, allowing molecules to pass through efficiently.
          </p>
        </div>
      </section>

      {/* Electrolytes - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]">
        <div className="text-center w-full max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-16 md:mb-24">The Electrolytes</h2>
          
          <div className="space-y-12 md:space-y-16">
            <div>
              <h3 className="text-xl sm:text-2xl font-light mb-4">Sodium</h3>
              <p className="text-[#f5f5f0]/40 text-sm sm:text-base md:text-lg leading-relaxed">
                Primary electrolyte lost in sweat. Critical for fluid balance and muscle function.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-light mb-4">Potassium</h3>
              <p className="text-[#f5f5f0]/40 text-sm sm:text-base md:text-lg leading-relaxed">
                Works with sodium for cellular hydration. Essential for heart rhythm and preventing cramps.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-light mb-4">Magnesium</h3>
              <p className="text-[#f5f5f0]/40 text-sm sm:text-base md:text-lg leading-relaxed">
                Supports muscle relaxation, energy production, and overall electrolyte balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Leave Out - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]">
        <div className="text-center w-full max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-16 md:mb-24">What We Leave Out</h2>
          
          <div className="space-y-6 text-[#f5f5f0]/40 text-base sm:text-lg md:text-xl">
            <p>No added sugars</p>
            <p>No artificial colors</p>
            <p>No artificial sweeteners</p>
            <p>No fillers</p>
            <p>No caffeine</p>
            <p>No proprietary blends</p>
          </div>
        </div>
      </section>

      {/* CTA - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#f5f5f0] text-[#0a0a0a]">
        <div className="text-center max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8">
            Experience the Difference
          </h2>
          <p className="text-[#0a0a0a]/50 text-base sm:text-lg md:text-xl mb-12">
            Try memo and feel what fast hydration really means.
          </p>
          <Link 
            href="/shop"
            className="inline-block border border-[#0a0a0a] px-10 sm:px-14 py-4 sm:py-5 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 px-6 border-t border-[#f5f5f0]/10 bg-[#0a0a0a] text-center">
        <span className="text-lg tracking-[0.06em] block mb-8">memo</span>
        <div className="flex gap-8 justify-center text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/30">
          <Link href="/about" className="hover:text-[#f5f5f0] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#f5f5f0] transition-colors">Contact</Link>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
