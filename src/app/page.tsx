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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-8">
        {/* Centered Logo */}
        <div className="flex justify-center">
          <span 
            className="text-white text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            memo
          </span>
        </div>

        {/* Menu Button - Absolute Right */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-8 right-6 md:right-12 text-white flex items-center gap-3 group"
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
          className="text-white text-6xl md:text-8xl lg:text-[10rem] font-light tracking-[0.02em] mb-6 w-full text-center"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
        >
          memo
        </h1>
        
        {/* Subtle tagline - more visible */}
        <p className="text-white/70 text-sm md:text-base tracking-[0.35em] uppercase font-light mb-16">
          Fuel Your Performance
        </p>

        {/* CTA */}
        <Link 
          href="/shop"
          className="px-10 py-4 border border-white/40 text-white text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Bottom Bar */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-6 md:px-12 py-8">
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

      {/* Full Screen Menu Overlay - MORE SPACING */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-50 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-6 md:right-12 text-white flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors hidden md:block">
            Close
          </span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute w-6 h-[1px] bg-white rotate-45" />
            <span className="absolute w-6 h-[1px] bg-white -rotate-45" />
          </div>
        </button>

        {/* Menu Content - MORE SPACING */}
        <div className="h-full flex flex-col items-center justify-center px-6">
          <nav>
            <ul className="space-y-6 text-center">
              {[
                { name: 'Shop', href: '/shop' },
                { name: 'Science', href: '/science' },
                { name: 'About', href: '/about' },
                { name: 'Ambassadors', href: '/ambassadors' },
                { name: 'Contact', href: '/contact' },
              ].map((item, i) => (
                <li 
                  key={item.name}
                  className={`transition-all duration-500 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${i * 60 + 100}ms` : '0ms' }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-4xl md:text-6xl font-light tracking-tight hover:text-white/40 transition-colors duration-300 block py-2"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 flex items-end justify-between">
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
              Electrolyte Strips
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
