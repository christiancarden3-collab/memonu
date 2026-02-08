'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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

      {/* Hero - Full Screen */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop"
            alt="Athlete"
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.4)' }}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 
            className="text-[#f5f5f0] text-5xl md:text-7xl lg:text-8xl font-light mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About
          </h1>
          <p className="text-[#f5f5f0]/60 text-base md:text-lg max-w-md mx-auto">
            Born from necessity. Built for performance.
          </p>
        </div>
      </section>

      {/* The Story - SPACED OUT */}
      <section className="py-32 md:py-48 px-6 bg-[#f5f5f0] text-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]/40 block mb-12">Our Story</span>
          
          <h2 
            className="text-3xl md:text-5xl font-light mb-16 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            We got tired of carrying bottles and mixing powders.
          </h2>
          
          <div className="space-y-8 text-[#0a0a0a]/60 text-base md:text-lg leading-relaxed">
            <p>
              It started with a simple question: why does staying hydrated have to be so complicated?
            </p>
            <p>
              We were athletes who trained at 5 AM, entrepreneurs who lived on planes, parents who never had a free hand.
            </p>
            <p>
              So we spent two years developing a dissolving strip that delivers electrolytes instantly—no water, no mixing, no waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="h-[70vh] relative">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
          alt="Training"
          fill
          className="object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
      </section>

      {/* Values - SPACED OUT with B&W */}
      <section className="py-32 md:py-48 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-light text-center mb-24 text-[#f5f5f0]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What We Believe
          </h2>
          
          <div className="space-y-20">
            <div className="text-center">
              <span className="text-6xl font-light text-[#f5f5f0]/20 block mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                01
              </span>
              <h3 
                className="text-2xl font-light mb-4 text-[#f5f5f0]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Simplicity
              </h3>
              <p className="text-[#f5f5f0]/50 max-w-md mx-auto">The best solutions are the ones you actually use. No complexity, no barriers.</p>
            </div>
            
            <div className="text-center">
              <span className="text-6xl font-light text-[#f5f5f0]/20 block mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                02
              </span>
              <h3 
                className="text-2xl font-light mb-4 text-[#f5f5f0]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Performance
              </h3>
              <p className="text-[#f5f5f0]/50 max-w-md mx-auto">Every ingredient earns its place. Nothing more, nothing less.</p>
            </div>
            
            <div className="text-center">
              <span className="text-6xl font-light text-[#f5f5f0]/20 block mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                03
              </span>
              <h3 
                className="text-2xl font-light mb-4 text-[#f5f5f0]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Freedom
              </h3>
              <p className="text-[#f5f5f0]/50 max-w-md mx-auto">Hydration that goes where you go. No bottles, no limits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 px-6 bg-[#f5f5f0] text-[#0a0a0a] text-center">
        <h2 
          className="text-3xl md:text-5xl font-light mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Join the Movement
        </h2>
        <p className="text-[#0a0a0a]/50 text-base mb-12 max-w-md mx-auto">
          Be the first to experience hydration, reimagined.
        </p>
        <Link 
          href="/shop"
          className="inline-block border border-[#0a0a0a]/30 px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#f5f5f0]/10 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <span 
            className="text-lg tracking-[0.06em] text-[#f5f5f0]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/30">
            <Link href="/about" className="hover:text-[#f5f5f0] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#f5f5f0] transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
