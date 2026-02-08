'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ShopPage() {
  const [quantity, setQuantity] = useState(1);
  
  const products = [
    {
      id: 'starter',
      name: 'Starter Pack',
      strips: 10,
      price: 14.99,
      description: 'Perfect for trying memo',
      popular: false,
    },
    {
      id: 'monthly',
      name: 'Monthly Pack',
      strips: 30,
      price: 34.99,
      description: 'Most popular choice',
      popular: true,
    },
    {
      id: 'pro',
      name: 'Pro Pack',
      strips: 60,
      price: 59.99,
      description: 'Best value for athletes',
      popular: false,
    },
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light tracking-tight mb-4">Shop</h1>
            <p className="text-xl text-gray-600">
              Choose the pack that's right for you.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="py-8 px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className={`relative rounded-2xl p-6 border-2 transition-all ${
                    product.popular 
                      ? 'border-emerald-500 bg-emerald-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h2 className="text-xl font-medium mb-1">{product.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-light">${product.price}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {product.strips} strips
                      <span className="text-gray-400 text-sm block">
                        (${(product.price / product.strips).toFixed(2)} per strip)
                      </span>
                    </p>
                    
                    <button 
                      className={`w-full py-3 rounded-full font-medium transition-colors ${
                        product.popular
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-[#0a0a0a] text-white hover:bg-gray-800'
                      }`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Features */}
            <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🚚</div>
                <p className="text-sm text-gray-600">Free shipping on orders $35+</p>
              </div>
              <div>
                <div className="text-2xl mb-2">↩️</div>
                <p className="text-sm text-gray-600">30-day money back guarantee</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🔒</div>
                <p className="text-sm text-gray-600">Secure checkout</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📦</div>
                <p className="text-sm text-gray-600">Subscribe & save 15%</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
