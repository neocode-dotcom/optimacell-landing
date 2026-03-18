import { useState } from 'react';

export default function Navbar({ onBuyClick }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#como-tomar', label: 'Cómo tomarlo' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="A Lo Natural" className="h-12 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onBuyClick}
              className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
            >
              Comprar ahora
            </button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-green-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={onBuyClick}
              className="mt-4 w-full bg-green-700 text-white px-5 py-2 rounded-lg font-medium"
            >
              Comprar ahora
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
