import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Company', href: '#company' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#contact', isButton: true },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Agrud SVG */}
        <a href="#" className="flex items-center gap-2 group">
           <div className={`relative flex items-center ${scrolled ? 'text-white' : 'text-white'}`}>
             <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto">
                {/* Text: AGRUD */}
                <text x="10" y="30" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="currentColor" letterSpacing="-1">AGRUD</text>
                {/* Swoosh Accent - Curve crossing the A */}
                <path d="M8 24 C 12 18, 22 18, 32 26" stroke="#00d4ff" strokeWidth="3" strokeLinecap="round" />
             </svg>
           </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isButton ? (
               <button 
                key={item.label}
                className="bg-brand-primary hover:bg-brand-dark text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm uppercase tracking-wide border border-brand-primary hover:border-white/20 shadow-lg shadow-brand-primary/20"
               >
                 {item.label}
               </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium text-sm uppercase tracking-wider transition-colors duration-200 hover:text-brand-accent ${
                  scrolled ? 'text-gray-200' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            )
          ))}
          <div className={`border-l pl-6 flex items-center gap-4 ${scrolled ? 'border-gray-600' : 'border-white/30'}`}>
            <Search className={`w-5 h-5 cursor-pointer hover:text-brand-accent transition-colors ${scrolled ? 'text-white' : 'text-white'}`} />
            <Globe className={`w-5 h-5 cursor-pointer hover:text-brand-accent transition-colors ${scrolled ? 'text-white' : 'text-white'}`} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark shadow-xl border-t border-white/10">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-lg font-medium hover:text-brand-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;