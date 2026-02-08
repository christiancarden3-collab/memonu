'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Sports videos - B&W filter applied via CSS
const sportsVideos = [
  "https://cdn.coverr.co/videos/coverr-a-woman-running-on-a-beach-4894/1080p.mp4", // Running
  "https://cdn.coverr.co/videos/coverr-playing-tennis-4817/1080p.mp4", // Tennis
  "https://cdn.coverr.co/videos/coverr-swimmer-doing-laps-2531/1080p.mp4", // Swimming
  "https://cdn.coverr.co/videos/coverr-cycling-on-the-road-1577/1080p.mp4", // Cycling
  "https://cdn.coverr.co/videos/coverr-jogging-in-the-park-5266/1080p.mp4", // Running 2
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cycle to next video when current one ends
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % sportsVideos.length);
  };

  // Update video source when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Full Screen Video Background - Sports Loop, B&W */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'grayscale(100%) contrast(1.1)' }}
      >
        <source src={sportsVideos[currentVideoIndex]} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Menu Button - Top Right */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 md:right-16 z-40 text-white flex items-center gap-3 group"
      >
        <span className="text-xs tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity hidden md:block font-sans">
          Menu
        </span>
        <div className="flex flex-col gap-1.5">
          <span className={`w-7 h-px bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`w-7 h-px bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </div>
      </button>

      {/* Center Logo - memo lowercase, elegant serif */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 
          className="text-white text-7xl md:text-9xl lg:text-[12rem] font-normal tracking-[0.08em]"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, 'Times New Roman', serif" }}
        >
          memo
        </h1>
      </div>

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-black transform transition-transform duration-500 ease-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end px-8 md:px-12 py-8">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white flex items-center gap-3 group"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity font-sans">
              Close
            </span>
            <div className="relative w-7 h-7 flex items-center justify-center">
              <span className="absolute w-7 h-px bg-white rotate-45" />
              <span className="absolute w-7 h-px bg-white -rotate-45" />
            </div>
          </button>
        </div>

        {/* Menu Links */}
        <nav className="px-8 md:px-12 py-16">
          <ul className="space-y-5">
            {[
              { name: 'Shop', href: '/shop' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact', href: '/contact' },
              { name: 'Ambassadors', href: '/ambassadors' },
            ].map((item, i) => (
              <li 
                key={item.name} 
                className={`overflow-hidden ${isMenuOpen ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 80 + 100}ms` }}
              >
                <Link 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-4xl md:text-5xl font-normal tracking-wide hover:opacity-40 transition-opacity duration-300 block py-1"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer in Menu */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-12 py-8 border-t border-white/10">
          <div className="flex items-center gap-6 mb-4">
            <a href="https://instagram.com/memonu" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <span className="text-xs tracking-[0.2em] uppercase font-sans">Instagram</span>
            </a>
            <a href="https://twitter.com/memonu" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <span className="text-xs tracking-[0.2em] uppercase font-sans">Twitter</span>
            </a>
            <a href="https://tiktok.com/@memonu" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <span className="text-xs tracking-[0.2em] uppercase font-sans">TikTok</span>
            </a>
          </div>
          <p className="text-white/30 text-xs tracking-wider font-sans">
            © 2026 memo
          </p>
        </div>
      </div>
    </main>
  );
}
