'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

const sportsVideos = [
  "/videos/sport-1.mp4",
  "/videos/sport-2.mp4",
  "/videos/sport-3.mp4",
  "/videos/sport-4.mp4",
];

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
    <main className="relative h-screen w-screen overflow-hidden bg-black text-[#FAF3E0]">
      {/* Video Background */}
      {sportsVideos.map((src, index) => (
        <video
          key={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-150 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: 'center 30%' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Header */}
      <Header />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-semibold tracking-tight mb-6">
          memo
        </h1>
        
        <p className="text-[#FAF3E0]/70 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase font-light mb-12">
          Fuel Your Performance
        </p>

        <Link
          href="/shop"
          className="inline-flex items-center justify-center rounded-2xl bg-[#FAF3E0] px-8 py-4 text-black font-medium
                     hover:opacity-90 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SocialLink href="https://instagram.com/memonu" label="IG" />
            <SocialLink href="https://twitter.com/memonu" label="TW" />
          </div>
          <span className="text-[#FAF3E0]/30 text-xs">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          memo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="/shop" label="Shop" />
          <NavLink href="/science" label="Science" />
          <NavLink href="/about" label="About" />
          <NavLink href="/ambassadors" label="Ambassadors" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Mobile menu */}
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-sm px-3 py-2 text-sm hover:bg-white/[0.1] transition">
            Menu
          </summary>

          <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md p-2 shadow-xl">
            <MobileLink href="/shop" label="Shop" />
            <MobileLink href="/science" label="Science" />
            <MobileLink href="/about" label="About" />
            <MobileLink href="/ambassadors" label="Ambassadors" />
            <MobileLink href="/contact" label="Contact" />
            <div className="mt-2 border-t border-white/10 pt-2 flex gap-2">
              <SocialLink href="https://instagram.com/memonu" label="Instagram" />
              <SocialLink href="https://twitter.com/memonu" label="Twitter" />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-2 text-sm text-[#FAF3E0]/80 hover:text-[#FAF3E0] hover:bg-white/[0.05] transition"
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-3 py-2 text-sm text-[#FAF3E0]/85 hover:text-[#FAF3E0] hover:bg-white/[0.05] transition"
    >
      {label}
    </Link>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-sm px-3 py-2 text-xs sm:text-sm
                 hover:bg-white/[0.1] transition"
    >
      {label}
    </a>
  );
}
