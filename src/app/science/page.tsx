import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'The Science | memo - How Sublingual Electrolyte Delivery Works',
  description: 'Learn the science behind memo\'s fast-dissolving electrolyte strips and why sublingual absorption is the future of hydration.',
};

export default function SciencePage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              The Science
            </h1>
            <p className="text-xl text-gray-600">
              Why sublingual delivery changes everything about hydration.
            </p>
          </div>
        </section>

        {/* Sublingual Absorption */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-8">Sublingual Absorption</h2>
            <p className="text-lg text-gray-600 mb-6">
              The area under your tongue (sublingual mucosa) is one of the most efficient absorption sites in your body. Here's why:
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <div>
                    <strong className="block mb-1">Rich Blood Supply</strong>
                    <span className="text-gray-600">The sublingual area has a dense network of blood vessels, allowing rapid absorption directly into your bloodstream.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <div>
                    <strong className="block mb-1">Bypasses First-Pass Metabolism</strong>
                    <span className="text-gray-600">Unlike pills that go through your digestive system, sublingual delivery avoids the liver's first-pass effect, increasing bioavailability.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <div>
                    <strong className="block mb-1">Thin Membrane</strong>
                    <span className="text-gray-600">The tissue under your tongue is thin and permeable, allowing molecules to pass through quickly and efficiently.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-600">
              This is the same delivery method used for nitroglycerin (heart medication), certain vitamins, and CBD products—chosen specifically because it works fast.
            </p>
          </div>
        </section>

        {/* Speed Comparison */}
        <section className="py-16 px-6 bg-[#0a0a0a] text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">Absorption Speed Comparison</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-2xl p-6 text-center">
                <div className="text-4xl font-light text-emerald-400 mb-2">~30 sec</div>
                <div className="text-lg font-medium mb-2">memo strips</div>
                <div className="text-sm text-gray-400">Sublingual absorption</div>
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-6 text-center">
                <div className="text-4xl font-light text-gray-400 mb-2">15-30 min</div>
                <div className="text-lg font-medium mb-2">Electrolyte drinks</div>
                <div className="text-sm text-gray-400">Stomach → intestines → blood</div>
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-6 text-center">
                <div className="text-4xl font-light text-gray-400 mb-2">30-60 min</div>
                <div className="text-lg font-medium mb-2">Capsules / Pills</div>
                <div className="text-sm text-gray-400">Must dissolve first</div>
              </div>
            </div>
          </div>
        </section>

        {/* Electrolytes */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-8">The Electrolytes</h2>
            <p className="text-lg text-gray-600 mb-8">
              We include only the essential electrolytes your body needs—nothing more, nothing less.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Sodium</h3>
                <p className="text-gray-600">
                  The primary electrolyte lost in sweat. Critical for fluid balance, nerve function, and muscle contractions. We use the optimal amount for rapid replenishment.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Potassium</h3>
                <p className="text-gray-600">
                  Works with sodium to maintain cellular hydration. Essential for heart rhythm, muscle function, and preventing cramps.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Magnesium</h3>
                <p className="text-gray-600">
                  Involved in over 300 enzymatic reactions. Supports muscle relaxation, energy production, and electrolyte balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Don't Include */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-8">What We Leave Out</h2>
            <p className="text-lg text-gray-600 mb-8">
              Just as important as what we include is what we don't:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-500">✗</span>
                <span>No added sugars</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-500">✗</span>
                <span>No artificial colors</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-500">✗</span>
                <span>No artificial sweeteners</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-500">✗</span>
                <span>No fillers or binders</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-500">✗</span>
                <span>No caffeine</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-500">✗</span>
                <span>No proprietary blends</span>
              </div>
            </div>
          </div>
        </section>

        {/* Patent */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Patent Pending</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our unique formulation and delivery method is protected by a pending patent (Application #63/976,885). We're not just making another supplement—we're pioneering a new category.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-emerald-600 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Experience the Difference</h2>
            <p className="text-lg text-emerald-100 mb-8">
              Try memo and feel what fast hydration really means.
            </p>
            <Link 
              href="/shop"
              className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
