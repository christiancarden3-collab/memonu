import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#FAF3E0]">
      <Header />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                  memo
                </h1>
                <Pill>Electrolyte Strips</Pill>
              </div>

              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#FAF3E0]/80 leading-relaxed">
                Fuel Your Performance
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#FAF3E0] px-5 py-3 text-black font-medium
                             hover:opacity-90 transition border border-transparent"
                >
                  Shop Now
                </Link>

                <Link
                  href="/science"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium
                             border border-white/15 bg-white/[0.02] hover:bg-white/[0.05] transition"
                >
                  Science
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <SocialLink href="https://instagram.com/memonu" label="IG" />
                <SocialLink href="https://twitter.com/memonu" label="TW" />
              </div>
            </div>
          </div>

          {/* FEATURE GRID */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card title="Fast & Clean" body="Dissolves quickly. No bottle. No mess." />
            <Card title="Travel-Ready" body="Pocket strips built for runs, lifts, and flights." />
            <Card title="Performance First" body="Hydration support you can actually use mid-session." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
          <div className="text-sm text-[#FAF3E0]/70">© {new Date().getFullYear()} memo</div>
          <div className="flex flex-wrap gap-3 text-sm">
            <FooterLink href="/about" label="About" />
            <FooterLink href="/contact" label="Contact" />
            <FooterLink href="/ambassadors" label="Ambassadors" />
          </div>
        </div>
      </footer>
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="/shop" label="Shop" />
          <NavLink href="/science" label="Science" />
          <NavLink href="/about" label="About" />
          <NavLink href="/ambassadors" label="Ambassadors" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Mobile menu (CSS-only) */}
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
      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-3 py-2 text-xs sm:text-sm
                 hover:bg-white/[0.06] transition"
    >
      {label}
    </a>
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

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#FAF3E0]/75 leading-relaxed">{body}</div>
    </div>
  );
}
