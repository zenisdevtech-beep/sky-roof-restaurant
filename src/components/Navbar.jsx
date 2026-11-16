import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Calendar, ShoppingBag, 
  MapPin, Sparkles, ChevronRight, Utensils
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenReserve, cartItemsCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
      {/* Top Announcements & Quick Info Bar */}
      <div className="bg-[#070605] border-b border-white/[0.06] text-stone-300 text-xs py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">Open Now:</span>
            <span className="text-stone-300">10:00 AM – 11:45 PM</span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="text-amber-400/90 font-medium hidden sm:inline">Kitchen closes 10:00 PM</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden md:flex items-center gap-1.5 text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Aarya's Corner Point, Makarpura, Vadodara</span>
            </span>

            <a 
              href={`tel:${RESTAURANT_INFO.rawPhone}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>081550 00501</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Sticky Luxury Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0E0D0C]/98 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-2.5' 
            : 'bg-[#0E0D0C]/90 backdrop-blur-md py-3.5 border-b border-white/[0.08]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-stone-950" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors leading-none">
                    Sky Roof
                  </span>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
                    6th Floor
                  </span>
                </div>
                <span className="text-[10px] text-stone-400 font-medium tracking-wider uppercase mt-1">
                  Restaurant • Cafe • Banquet
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors relative whitespace-nowrap ${
                      isActive
                        ? 'text-amber-400'
                        : 'text-stone-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.7)]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Intermediate (lg to xl) Compact Navigation */}
            <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors relative whitespace-nowrap ${
                      isActive
                        ? 'text-amber-400'
                        : 'text-stone-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Call Us Link */}
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-amber-400 border border-stone-800 text-xs font-bold tracking-wider uppercase transition shrink-0"
                title="Call 081550 00501"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call</span>
              </a>

              {/* Food Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2 sm:px-3 sm:py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-800 transition-all flex items-center gap-2 text-xs font-bold tracking-wider uppercase shrink-0"
                aria-label="View Food Basket"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Reserve Table CTA (Prominently Visible & Non-Overflowing) */}
              <button
                onClick={onOpenReserve}
                className="btn-shimmer px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-450 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                <span>Reserve Table</span>
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-stone-900 text-stone-200 border border-stone-800 hover:bg-stone-800 transition shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#110F0E] border-b border-amber-500/20 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
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
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Rooftop Table</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-semibold">
                <a
                  href={`tel:${RESTAURANT_INFO.rawPhone}`}
                  className="py-2.5 px-3 rounded-xl bg-stone-900 border border-stone-800 text-center text-stone-200 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>081550 00501</span>
                </a>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-stone-900 border border-stone-800 text-center text-stone-200 flex items-center justify-center gap-1.5"
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
