'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Local processed videos - cinematic B&W, 0.75s each
const sportsVideos = [
  "/videos/sport-1.mp4",
  "/videos/sport-2.mp4",
  "/videos/sport-3.mp4",
  "/videos/sport-4.mp4",
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Switch videos every 0.75 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % sportsVideos.length);
    }, 750);

    return () => clearInterval(interval);
  }, []);

  // Preload all videos
  useEffect(() => {
    sportsVideos.forEach((src, i) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
    });
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#0a0a0a]">
      {/* Video Background Stack - all videos layered, opacity controlled */}
      {sportsVideos.map((src, index) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[index] = el; }}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      
      {/* Refined Overlay - subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
        {/* Left - Tagline */}
        <div className="hidden md:block">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-light">
            Electrolyte Strips
          </span>
        </div>

        {/* Center - could add something here */}
        <div className="flex-1" />

        {/* Right - Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors hidden md:block">
            Menu
          </span>
          <div className="flex flex-col gap-[5px]">
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </div>
        </button>
      </header>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        {/* Logo */}
        <h1 
          className="text-white text-6xl md:text-8xl lg:text-[10rem] font-light tracking-[0.02em] mb-4 w-full text-center"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
        >
          memo
        </h1>
        
        {/* Subtle tagline */}
        <p className="text-white/40 text-[11px] tracking-[0.35em] uppercase font-light">
          Fuel Your Performance
        </p>

        {/* CTA */}
        <Link 
          href="/shop"
          className="mt-12 px-8 py-3 border border-white/30 text-white text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Bottom Bar */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-6 md:px-12 py-6">
        {/* Left - Social */}
        <div className="flex items-center gap-6">
          <a 
            href="https://instagram.com/memonu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/30 hover:text-white transition-colors text-[10px] tracking-[0.2em] uppercase"
          >
            IG
          </a>
          <a 
            href="https://twitter.com/memonu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/30 hover:text-white transition-colors text-[10px] tracking-[0.2em] uppercase"
          >
            TW
          </a>
        </div>

        {/* Right - Copyright */}
        <span className="text-white/20 text-[10px] tracking-wider">
          © 2026
        </span>
      </footer>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-50 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 md:right-12 text-white flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors hidden md:block">
            Close
          </span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute w-6 h-[1px] bg-white rotate-45" />
            <span className="absolute w-6 h-[1px] bg-white -rotate-45" />
          </div>
        </button>

        {/* Menu Content */}
        <div className="h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <nav>
            <ul className="space-y-2">
              {[
                { name: 'Shop', href: '/shop' },
                { name: 'Science', href: '/science' },
                { name: 'About', href: '/about' },
                { name: 'Ambassadors', href: '/ambassadors' },
                { name: 'Contact', href: '/contact' },
              ].map((item, i) => (
                <li 
                  key={item.name}
                  className={`overflow-hidden transition-all duration-500 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${i * 60 + 100}ms` : '0ms' }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-tight hover:text-white/40 transition-colors duration-300 block py-1"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="absolute bottom-6 left-6 md:left-16 lg:left-24 right-6 flex items-end justify-between">
            <div className="flex items-center gap-8">
              <a 
                href="https://instagram.com/memonu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 hover:text-white transition-colors text-[10px] tracking-[0.25em] uppercase"
              >
                Instagram
              </a>
              <a 
                href="https://twitter.com/memonu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 hover:text-white transition-colors text-[10px] tracking-[0.25em] uppercase"
              >
                Twitter
              </a>
            </div>
            <span className="text-white/20 text-[10px] tracking-wider hidden md:block">
              Electrolyte Strips — Fuel Your Performance
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
