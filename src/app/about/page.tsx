'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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

      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden text-center">
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
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-10">
            About
          </h1>
          <p className="text-[#f5f5f0]/60 text-lg md:text-xl max-w-md mx-auto">
            Born from necessity. Built for performance.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-64 md:py-80 px-6 bg-[#f5f5f0] text-[#0a0a0a] text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#0a0a0a]/40 block mb-20">Our Story</span>
          
          <h2 className="text-3xl md:text-5xl font-light mb-24 leading-relaxed">
            We got tired of carrying bottles and mixing powders.
          </h2>
          
          <div className="space-y-16 text-[#0a0a0a]/60 text-lg md:text-xl leading-loose">
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
      <section className="h-screen relative">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
          alt="Training"
          fill
          className="object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
      </section>

      {/* Values */}
      <section className="py-64 md:py-96 px-6 bg-[#0a0a0a] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-48 md:mb-64 text-[#f5f5f0]">
            What We Believe
          </h2>
          
          <div className="space-y-64 md:space-y-80">
            <div>
              <span className="text-8xl md:text-9xl font-light text-[#f5f5f0]/10 block mb-12">01</span>
              <h3 className="text-3xl md:text-4xl font-light mb-10 text-[#f5f5f0]">Simplicity</h3>
              <p className="text-[#f5f5f0]/50 max-w-md mx-auto text-lg md:text-xl leading-relaxed">
                The best solutions are the ones you actually use. No complexity, no barriers.
              </p>
            </div>
            
            <div>
              <span className="text-8xl md:text-9xl font-light text-[#f5f5f0]/10 block mb-12">02</span>
              <h3 className="text-3xl md:text-4xl font-light mb-10 text-[#f5f5f0]">Performance</h3>
              <p className="text-[#f5f5f0]/50 max-w-md mx-auto text-lg md:text-xl leading-relaxed">
                Every ingredient earns its place. Nothing more, nothing less.
              </p>
            </div>
            
            <div>
              <span className="text-8xl md:text-9xl font-light text-[#f5f5f0]/10 block mb-12">03</span>
              <h3 className="text-3xl md:text-4xl font-light mb-10 text-[#f5f5f0]">Freedom</h3>
              <p className="text-[#f5f5f0]/50 max-w-md mx-auto text-lg md:text-xl leading-relaxed">
                Hydration that goes where you go. No bottles, no limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-64 md:py-80 px-6 bg-[#f5f5f0] text-[#0a0a0a] text-center">
        <h2 className="text-3xl md:text-5xl font-light mb-16">
          Join the Movement
        </h2>
        <p className="text-[#0a0a0a]/50 text-lg md:text-xl mb-20 max-w-md mx-auto">
          Be the first to experience hydration, reimagined.
        </p>
        <Link 
          href="/shop"
          className="inline-block border border-[#0a0a0a]/30 px-14 py-5 text-[11px] tracking-[0.3em] uppercase hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-[#f5f5f0]/10 bg-[#0a0a0a] text-center">
        <span className="text-lg tracking-[0.06em] text-[#f5f5f0] block mb-8">memo</span>
        <div className="flex gap-8 justify-center text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/30">
          <Link href="/about" className="hover:text-[#f5f5f0] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#f5f5f0] transition-colors">Contact</Link>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
