import React from 'react';
import {
  Star, MapPin, Clock, Phone, Utensils, Calendar,
  ExternalLink, Sparkles, Heart, Users, ShieldCheck, Flame
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onOpenReserve, onExploreMenu }) {
  return (
    <section id="overview" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Badges & Live Status */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Vadodara's #1 Rooftop Dining & Banquet</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{RESTAURANT_INFO.timings.busyNote}</span>
          </div>
        </div>

        {/* Hero Title & Subtext */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Dine Above The City Under <br className="hidden sm:inline" />
            <span className="glow-gold-text italic font-serif">Starlit Vadodara Skies</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Welcome to <strong className="text-amber-400 font-semibold">{RESTAURANT_INFO.name}</strong> on the 6th floor terrace.
            Featuring scenic open-air dining, romantic candle-light setups, authentic North Indian & Chinese dishes, and private banquet celebrations.
          </p>

          {/* Social Proof & Rating Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 pb-2 border-y border-white/10 text-xs sm:text-sm">
            {/* Google Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-lg font-bold border border-amber-500/30">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                <span>{RESTAURANT_INFO.rating}</span>
              </div>
              <span className="text-slate-300">
                <strong className="text-white">({RESTAURANT_INFO.reviewCount})</strong> Google Reviews
              </span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-slate-800" />

            {/* Price Range */}
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="font-bold text-amber-400 text-base">{RESTAURANT_INFO.priceRange}</span>
              <span>per person ({RESTAURANT_INFO.priceForTwo})</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-slate-800" />

            {/* Features */}
            <div className="flex items-center gap-3 text-slate-300">
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> 100% Pure Veg
              </span>
              <span>•</span>
              <span className="text-amber-300">Jain Available</span>
            </div>
          </div>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-14">
          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-450 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>Reserve a Table</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-sm tracking-wide border border-slate-700/80 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-md"
          >
            <Utensils className="w-5 h-5 text-amber-400" />
            <span>View Menu & Order</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.rawPhone}`}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-bold text-sm tracking-wide border border-emerald-500/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call 081550 00501</span>
          </a>
        </div>

        {/* Hero Image Showcase Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">

          {/* Main Visual: Rooftop Sunset & Night Ambiance */}
          <div className="md:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl min-h-[320px] md:min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Sky Roof Restaurant Vadodara Open Air Dining"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Overlay Details */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" /> 6th Floor Open-Air Terrace
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Panoramic Vadodara Cityline
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg line-clamp-2">
                Breezy evenings, illuminated skyline, and cozy rooftop cabanas designed for unforgettable conversations.
              </p>
            </div>
          </div>

          {/* Side Cards: Candle Light Setup & Paneer Special */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">

            {/* Candle Light Feature Card */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-xl min-h-[190px] md:min-h-[200px]">
              <img
                src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=800&q=80"
                alt="Romantic Candle Light Dinner at Sky Roof"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded bg-rose-500/30 text-rose-300 text-[10px] font-bold border border-rose-500/40 uppercase">
                    Romantic
                  </span>
                  <span className="text-xs text-rose-300 font-semibold">Candle-Light Table Setup</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white">Private Cabanas & Rose Petals</h3>
                <p className="text-[11px] text-slate-300 mt-0.5">Custom date nights & anniversary surprises under the open sky.</p>
              </div>
            </div>

            {/* Food Highlights Card */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-xl min-h-[190px] md:min-h-[200px]">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
                alt="Paneer Tikka Masala Sky Roof Restaurant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded bg-amber-500/30 text-amber-300 text-[10px] font-bold border border-amber-500/40 uppercase">
                    Chef's Specialty
                  </span>
                  <span className="text-xs text-amber-300 font-semibold">Paneer Tikka Masala & Kebabs</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white">Authentic North Indian Charcoal Flavors</h3>
                <p className="text-[11px] text-slate-300 mt-0.5">Hara Bhara Kebab, Sizzlers, Veg Crispy & Cold Coffee.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Highlights Row (All You Can Eat • Private Dining • Happy Hour) */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">All You Can Eat</p>
              <p className="text-[11px] text-slate-400">Unlimited multi-course feast</p>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Private Dining & Banquet</p>
              <p className="text-[11px] text-slate-400">Birthdays & parties up to 60+</p>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Candle-Light Packages</p>
              <p className="text-[11px] text-slate-400">Personalized couple styling</p>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Happy-Hour Food</p>
              <p className="text-[11px] text-slate-400">Cafe brews & quick bites</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

