'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

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

  const playfair = "var(--font-playfair), 'Playfair Display', Georgia, serif";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % sportsVideos.length);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sportsVideos.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
    });
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#0a0a0a]" style={{ fontFamily: playfair }}>
      {/* Video Background */}
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
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-8 text-center">
        <span className="text-[#f5f5f0] text-lg tracking-[0.06em]">memo</span>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-8 right-6 md:right-12 text-[#f5f5f0] flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f5f0]/50 group-hover:text-[#f5f5f0] transition-colors hidden md:block">
            Menu
          </span>
          <div className="flex flex-col gap-[5px]">
            <span className={`w-6 h-[1px] bg-[#f5f5f0] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`w-6 h-[1px] bg-[#f5f5f0] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </div>
        </button>
      </header>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <h1 className="text-[#f5f5f0] text-6xl md:text-8xl lg:text-[10rem] font-light tracking-[0.02em] mb-8">
          memo
        </h1>
        
        <p className="text-[#f5f5f0]/70 text-base md:text-lg tracking-[0.4em] uppercase font-light mb-20">
          Fuel Your Performance
        </p>

        <Link 
          href="/shop"
          className="px-12 py-5 border border-[#f5f5f0]/40 text-[#f5f5f0] text-[11px] tracking-[0.3em] uppercase hover:bg-[#f5f5f0] hover:text-[#0a0a0a] transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-6 md:px-12 py-8">
        <div className="flex items-center gap-8">
          <a href="https://instagram.com/memonu" target="_blank" rel="noopener noreferrer" className="text-[#f5f5f0]/30 hover:text-[#f5f5f0] transition-colors text-[10px] tracking-[0.2em] uppercase">
            IG
          </a>
          <a href="https://twitter.com/memonu" target="_blank" rel="noopener noreferrer" className="text-[#f5f5f0]/30 hover:text-[#f5f5f0] transition-colors text-[10px] tracking-[0.2em] uppercase">
            TW
          </a>
        </div>
        <span className="text-[#f5f5f0]/20 text-[10px] tracking-wider">© 2026</span>
      </footer>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-6 md:right-12 text-[#f5f5f0] flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f5f0]/50 group-hover:text-[#f5f5f0] transition-colors hidden md:block">
            Close
          </span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute w-6 h-[1px] bg-[#f5f5f0] rotate-45" />
            <span className="absolute w-6 h-[1px] bg-[#f5f5f0] -rotate-45" />
          </div>
        </button>

        <div className="h-full flex flex-col items-center justify-center px-6 text-center">
          <nav>
            <ul className="space-y-12">
              {['Shop', 'Science', 'About', 'Ambassadors', 'Contact'].map((item, i) => (
                <li 
                  key={item}
                  className={`transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: isMenuOpen ? `${i * 60 + 100}ms` : '0ms' }}
                >
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#f5f5f0] text-5xl md:text-7xl font-light hover:text-[#f5f5f0]/40 transition-colors duration-300 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 flex items-end justify-between">
            <div className="flex items-center gap-8">
              <a href="https://instagram.com/memonu" target="_blank" rel="noopener noreferrer" className="text-[#f5f5f0]/30 hover:text-[#f5f5f0] transition-colors text-[10px] tracking-[0.25em] uppercase">
                Instagram
              </a>
              <a href="https://twitter.com/memonu" target="_blank" rel="noopener noreferrer" className="text-[#f5f5f0]/30 hover:text-[#f5f5f0] transition-colors text-[10px] tracking-[0.25em] uppercase">
                Twitter
              </a>
            </div>
            <span className="text-[#f5f5f0]/20 text-[10px] tracking-wider hidden md:block">
              Electrolyte Strips
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
