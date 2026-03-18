import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowToUse from './components/HowToUse';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ShopifyBuyButton from './components/ShopifyBuyButton';

const VARIANT_ID = import.meta.env.VITE_SHOPIFY_VARIANT_ID || 'gid://shopify/ProductVariant/44609465647127';
const PRODUCT_IMAGE = '/assets/product/optimacellt-producto-packshot.png';
const COMPARE_PRICE = 44.99;
const CURRENT_PRICE = 32.99;
const DISCOUNT = Math.round((1 - CURRENT_PRICE / COMPARE_PRICE) * 100);

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const scrollToCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      const element = document.getElementById('checkout');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const totalPrice = (CURRENT_PRICE * quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBuyClick={scrollToCheckout} />
      
      <main className="pt-16">
        <Hero onBuyClick={scrollToCheckout} />
        
        <Benefits id="beneficios" />
        
        <HowToUse id="como-tomar" />
        
        <Testimonials id="testimonios" />
        
        <FAQ id="faq" />
        
        <section id="checkout" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Oferta Especial
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Consigue Optimacell ahora
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
              <img 
                src={PRODUCT_IMAGE} 
                alt="Optimacell" 
                className="w-48 h-48 object-cover rounded-xl mx-auto mb-6"
              />
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Optimacell
              </h3>
              <p className="text-gray-500 mb-4">
                Nutrición Avanzada en Forma Activa | 90 cápsulas
              </p>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">${CURRENT_PRICE}</span>
                <span className="text-lg text-gray-400 line-through">${COMPARE_PRICE}</span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{DISCOUNT}%
                </span>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad</label>
                <div className="flex items-center justify-center gap-4">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= 10}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                {quantity > 1 && (
                  <p className="text-sm text-green-600 mt-2 font-medium">
                    Total: ${totalPrice}
                  </p>
                )}
              </div>
              
              <ShopifyBuyButton 
                variantId={VARIANT_ID}
                quantity={quantity}
                buttonText="Comprar ahora" 
                className="w-full text-lg py-4"
              />
              
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Envío gratis
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30 días garantía
                </span>
              </div>
            </div>
          </div>
        </section>
        
        <FinalCTA onBuyClick={scrollToCheckout} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
