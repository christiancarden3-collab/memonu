import Link from "next/link";
import Image from "next/image";

export default function Shop() {
  return (
    <main className="min-h-screen bg-black text-[#FAF3E0]">
      <Header />

      {/* HERO - Full Width Image */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop"
            alt="Shop"
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%) brightness(0.35)' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="relative z-10 text-center px-6">
          <Pill>Shop</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Coming Soon
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#FAF3E0]/80 leading-relaxed">
            We're putting the finishing touches on something special.
          </p>
        </div>
      </section>

      {/* WAITLIST */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold">Join the Waitlist</h2>
            <p className="mt-4 text-[#FAF3E0]/70">
              Be the first to know when we launch.
            </p>
            
            <form className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                           placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#FAF3E0] px-6 py-3 text-black font-medium
                           hover:opacity-90 transition"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>What's Coming</SectionTitle>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card 
              title="Starter Pack" 
              body="Perfect for first-timers. Try all our flavors and find your favorite."
            />
            <Card 
              title="Monthly Subscription" 
              body="Never run out. Delivered to your door every month with savings."
            />
            <Card 
              title="Bulk Orders" 
              body="For teams, gyms, and serious athletes. Custom quantities available."
            />
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{children}</h2>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#FAF3E0]/75 leading-relaxed">{body}</div>
    </div>
  );
}
