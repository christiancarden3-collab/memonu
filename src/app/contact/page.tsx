'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <main className="min-h-screen bg-black text-[#FAF3E0]">
      <Header />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <Pill>Get in Touch</Pill>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#FAF3E0]/80 leading-relaxed">
              Questions? Partnerships? Just say hello.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Form */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-2xl font-semibold mb-4">Message sent!</div>
                  <p className="text-[#FAF3E0]/70">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-[#FAF3E0]/70 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                                 placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#FAF3E0]/70 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                                 placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#FAF3E0]/70 mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                                 placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-xl bg-[#FAF3E0] px-6 py-3 text-black font-medium
                               hover:opacity-90 transition disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-sm text-[#FAF3E0]/50 mb-2">Email</div>
                <a href="mailto:hello@memonu.com" className="text-lg hover:text-[#FAF3E0]/70 transition">
                  hello@memonu.com
                </a>
              </div>
              
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-sm text-[#FAF3E0]/50 mb-2">Social</div>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/memonu" 
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/[0.02] px-4 py-2 text-sm hover:bg-white/[0.05] transition"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://twitter.com/memonu"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/[0.02] px-4 py-2 text-sm hover:bg-white/[0.05] transition"
                  >
                    Twitter
                  </a>
                </div>
              </div>
              
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-sm text-[#FAF3E0]/50 mb-2">Response Time</div>
                <div className="text-lg">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          memo
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="/shop" label="Shop" />
          <NavLink href="/science" label="Science" />
          <NavLink href="/about" label="About" />
          <NavLink href="/ambassadors" label="Ambassadors" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer rounded-xl border border-white/15 bg-white/[0.02] px-3 py-2 text-sm hover:bg-white/[0.05] transition">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-black p-2 shadow-xl">
            <MobileLink href="/shop" label="Shop" />
            <MobileLink href="/science" label="Science" />
            <MobileLink href="/about" label="About" />
            <MobileLink href="/ambassadors" label="Ambassadors" />
            <MobileLink href="/contact" label="Contact" />
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
        <div className="text-sm text-[#FAF3E0]/70">© {new Date().getFullYear()} memo</div>
        <div className="flex flex-wrap gap-3 text-sm">
          <FooterLink href="/about" label="About" />
          <FooterLink href="/contact" label="Contact" />
          <FooterLink href="/ambassadors" label="Ambassadors" />
        </div>
      </div>
    </footer>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="rounded-xl px-3 py-2 text-sm text-[#FAF3E0]/80 hover:text-[#FAF3E0] hover:bg-white/[0.05] transition">
      {label}
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block rounded-xl px-3 py-2 text-sm text-[#FAF3E0]/85 hover:text-[#FAF3E0] hover:bg-white/[0.05] transition">
      {label}
    </Link>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-[#FAF3E0]/75 hover:text-[#FAF3E0] transition">
      {label}
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs text-[#FAF3E0]/80">
      {children}
    </span>
  );
}
