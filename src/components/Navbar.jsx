import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Calendar, ShoppingBag, 
  MapPin, Clock, Sparkles, ChevronRight
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenReserve, cartItemsCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Menu', href: '#menu' },
    { name: 'Candle Light & Packages', href: '#packages' },
    { name: 'Celebrations & Banquet', href: '#banquet' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Ticker Bar */}
      <div className="bg-gradient-to-r from-amber-600/90 via-amber-500/90 to-amber-600/90 text-slate-950 text-xs font-semibold py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-700 animate-ping" />
            <span>Open Today: 10:00 AM – 11:45 PM • Kitchen closes 10:00 PM</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5" /> 6th Floor, Aarya's Corner Point, Makarpura, Vadodara
            </span>
            <a 
              href={`tel:${RESTAURANT_INFO.rawPhone}`}
              className="flex items-center gap-1 font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080D1A]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3' 
            : 'bg-[#080D1A]/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a href="#overview" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    Sky Roof
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    6th FLOOR
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                  Restaurant & Cafe • Vadodara
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors tracking-wide py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Call Link */}
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="p-2.5 rounded-xl text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 border border-slate-700/60 transition-all flex items-center gap-1.5 text-xs font-semibold"
                title="Call 081550 00501"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="hidden xl:inline">Call Us</span>
              </a>

              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-all flex items-center gap-1.5 text-xs font-semibold"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span className="hidden xl:inline">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Reserve Table CTA */}
              <button
                onClick={onOpenReserve}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Menu & Cart triggers */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
              >
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1020] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 font-medium text-sm transition"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Rooftop Table</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${RESTAURANT_INFO.rawPhone}`}
                  className="py-2.5 px-3 rounded-lg bg-slate-800 border border-slate-700 text-center text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call 081550 00501</span>
                </a>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-slate-800 border border-slate-700 text-center text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  <span>@skyroof_vadodara</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
