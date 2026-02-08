'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-8 md:px-16 py-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white text-2xl tracking-[0.06em]"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
        >
          memo
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white flex items-center gap-3 group"
        >
          <span className="text-xs tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity hidden md:block">Menu</span>
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
        <div className="relative z-10 text-center px-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-normal mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About Us
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto">
            Born from necessity. Built for performance.
          </p>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            We got tired of carrying bottles, mixing powders, and timing our hydration around water access.
          </p>
          <p 
            className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mt-8 text-white/40"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            So we built something better.
          </p>
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

      {/* The Story */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-black/40 block mb-8">The Story</span>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                A strip that changed everything
              </h2>
              <div className="space-y-6 text-black/60 text-lg leading-relaxed">
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
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2940&auto=format&fit=crop"
                alt="Product development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-normal text-center mb-24"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What We Believe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                num: '01', 
                title: 'Simplicity', 
                desc: 'The best solutions are the ones you actually use. No complexity, no barriers.' 
              },
              { 
                num: '02', 
                title: 'Performance', 
                desc: 'Every ingredient earns its place. Nothing more, nothing less.' 
              },
              { 
                num: '03', 
                title: 'Freedom', 
                desc: 'Hydration that goes where you go. No bottles, no limits.' 
              },
            ].map((value) => (
              <div key={value.num} className="text-center">
                <span className="text-6xl md:text-7xl font-normal text-white/10 block mb-6"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {value.num}
                </span>
                <h3 
                  className="text-2xl font-normal mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-white/50">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote 
            className="text-3xl md:text-5xl font-normal leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            "The best hydration is the kind you actually use."
          </blockquote>
          <cite className="text-black/40 text-sm tracking-[0.2em] uppercase mt-8 block not-italic">
            — Founding Team
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-black text-center">
        <h2 
          className="text-4xl md:text-6xl font-normal mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Join the Movement
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
          Be the first to experience hydration, reimagined.
        </p>
        <Link 
          href="/"
          className="inline-block border border-white/30 px-12 py-5 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Join Waitlist
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span 
            className="text-xl tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-white/40">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
