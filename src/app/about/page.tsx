'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white text-xl tracking-[0.06em]"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
        >
          memo
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white flex items-center gap-3 group"
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
            ].map((item, i) => (
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
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-md mx-auto">
            Born from necessity. Built for performance.
          </p>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p 
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            We got tired of carrying bottles, mixing powders, and timing our hydration around water access.
          </p>
          <p 
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug mt-6 text-white/40"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            So we built something better.
          </p>
        </div>
      </section>

      {/* Image Break */}
      <section className="h-[60vh] relative">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
          alt="Training"
          fill
          className="object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
      </section>

      {/* The Story */}
      <section className="py-24 md:py-32 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black/40 block mb-6">The Story</span>
            <h2 
              className="text-3xl md:text-5xl font-light"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              A strip that changed everything
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6 text-black/60 text-base md:text-lg leading-relaxed text-center">
            <p>
              It started with a simple question: why does staying hydrated have to be so complicated?
            </p>
            <p>
              We were athletes who trained at 5 AM, entrepreneurs who lived on planes, parents who never had a free hand. The solutions on the market weren't built for us.
            </p>
            <p>
              So we spent two years developing a dissolving strip that delivers electrolytes instantly—no water, no mixing, no waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-light text-center mb-20"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What We Believe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { num: '01', title: 'Simplicity', desc: 'The best solutions are the ones you actually use.' },
              { num: '02', title: 'Performance', desc: 'Every ingredient earns its place.' },
              { num: '03', title: 'Freedom', desc: 'Hydration that goes where you go.' },
            ].map((value) => (
              <div key={value.num}>
                <span className="text-5xl font-light text-white/10 block mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {value.num}
                </span>
                <h3 
                  className="text-xl font-light mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-white/40 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-black text-center border-t border-white/10">
        <h2 
          className="text-3xl md:text-5xl font-light mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Join the Movement
        </h2>
        <p className="text-white/40 text-base mb-10 max-w-md mx-auto">
          Be the first to experience hydration, reimagined.
        </p>
        <Link 
          href="/shop"
          className="inline-block border border-white/30 px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <span 
            className="text-lg tracking-[0.06em]"
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
