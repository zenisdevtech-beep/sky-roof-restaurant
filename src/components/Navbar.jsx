import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Calendar, ShoppingBag, 
  MapPin, Clock, Sparkles, ChevronRight, Crown
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenReserve, cartItemsCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Candle Light', path: '/candle-light' },
    { name: 'Banquet', path: '/banquet' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Refined Ticker */}
      <div className="bg-[#090807] border-b border-white/[0.06] text-stone-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">Open Today:</span>
            <span className="text-stone-300">10:00 AM – 11:45 PM</span>
            <span className="text-stone-600">•</span>
            <span className="text-gold-400 font-medium">Kitchen closes 10:00 PM</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden sm:flex items-center gap-1.5 text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>6th Floor, Aarya's Corner Point, Vadodara</span>
            </span>

            <a 
              href={`tel:${RESTAURANT_INFO.rawPhone}`}
              className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-bold transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>081550 00501</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Luxury Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0E0D0C]/95 backdrop-blur-md shadow-2xl border-b border-gold-500/20 py-3' 
            : 'bg-[#0E0D0C]/90 backdrop-blur-md py-4 border-b border-white/[0.08]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-gold-400 via-amber-500 to-gold-600 flex items-center justify-center text-stone-950 shadow-md shadow-gold-500/15 group-hover:scale-105 transition-transform">
                <Crown className="w-5 h-5 text-stone-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors">
                    Sky Roof
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gold-500/15 text-gold-400 border border-gold-500/25 uppercase tracking-wider">
                    6th Floor
                  </span>
                </div>
                <p className="text-[10px] text-stone-400 font-medium tracking-wider uppercase">
                  Rooftop Dining & Banquet
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 tracking-wide relative ${
                      isActive
                        ? 'text-gold-400 bg-gold-500/10 border border-gold-500/30 shadow-sm'
                        : 'text-stone-300 hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Group */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Call Us Link */}
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-gold-400 border border-stone-800 text-xs font-semibold transition"
                title="Call 081550 00501"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden xl:inline">Call Us</span>
              </a>

              {/* Food Cart */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 sm:px-3 sm:py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-800 transition-all flex items-center gap-2 text-xs font-semibold"
                aria-label="View Food Basket"
              >
                <ShoppingBag className="w-4 h-4 text-gold-400" />
                <span className="hidden sm:inline">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="bg-gradient-to-r from-gold-400 to-amber-500 text-stone-950 text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Reserve Table CTA */}
              <button
                onClick={onOpenReserve}
                className="px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-400 text-stone-950 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-stone-950" />
                <span>Reserve Table</span>
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-stone-900 text-stone-200 border border-stone-800 hover:bg-stone-800 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12100E] border-b border-gold-500/20 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-gold-500/15 text-gold-400 border border-gold-500/30'
                        : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Rooftop Table</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href={`tel:${RESTAURANT_INFO.rawPhone}`}
                  className="py-2.5 px-3 rounded-xl bg-stone-900 border border-stone-800 text-center font-semibold text-stone-200 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call 081550 00501</span>
                </a>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-stone-900 border border-stone-800 text-center font-semibold text-stone-200 flex items-center justify-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
