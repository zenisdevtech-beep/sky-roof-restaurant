import React, { useState } from 'react';
import { 
  Users, PartyPopper, Cake, Music, Sparkles, 
  CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, Clock
} from 'lucide-react';
import RooftopStars from '../components/RooftopStars';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function BanquetPage({ onOpenReserve }) {
  const [guestCount, setGuestCount] = useState('25-40 Guests');
  const [eventType, setEventType] = useState('Birthday Celebration');

  const banquetSpecs = [
    { label: "Guest Capacity", value: "15 to 80+ Guests" },
    { label: "Venue Ambience", value: "Open-Air Terrace + AC Hall" },
    { label: "Cuisine Mode", value: "100% Pure Veg & Jain Prep" },
    { label: "Buffet Packages", value: "Starting at ₹399 / head" },
    { label: "Sound & AV", value: "Wireless Mic, Music & Lights" },
    { label: "Location", value: "6th Floor, Aarya's Corner Point" }
  ];

  const banquetFeatures = [
    { title: "Capacity up to 80+ Guests", desc: "Combination of open-air terrace lounge & covered air-conditioned dining." },
    { title: "Themed Decor & Balloon Styling", desc: "Custom balloon arches, neon signage, LED fairy canopies, and cake stage setup." },
    { title: "Unlimited Multi-Course Buffet", desc: "Starters, mocktails, rich North Indian gravies, assorted naans, and desserts." },
    { title: "Dedicated Sound & Mic Setup", desc: "Celebration music playlist control, wireless mics for speeches, and cake sparklers." },
    { title: "100% Pure Veg & Dedicated Jain Prep", desc: "Separate hygienic kitchen cooking honoring all dietary traditions." },
    { title: "Dedicated Banquet Manager", desc: "End-to-end event coordination so you and your guests can truly relax and celebrate." },
  ];

  return (
    <div className="pt-4 pb-20 relative overflow-hidden">
      {/* 🌌 Animated Rooftop Night Sky & Stars */}
      <RooftopStars count={24} />

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none animate-glow-breathe" />

      {/* SINGLE UNIFIED HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 relative z-10 animate-fade-in-up">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <PartyPopper className="w-4 h-4 text-amber-400" />
            <span>Sky Roof Restaurant & Banquet Hall</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Celebrations & Party Venue
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Vadodara's favorite rooftop party destination. Host birthdays, corporate dinners, kitty parties, and anniversaries with panoramic open-air city views and all-inclusive banquet packages.
          </p>

          {/* Key Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mt-8">
            {banquetSpecs.map((spec, i) => (
              <div key={i} className="glass-panel p-3 rounded-xl text-center border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">{spec.label}</span>
                <strong className="text-xs sm:text-sm text-amber-400 font-extrabold mt-0.5 block">{spec.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content: Visual Showcase (Left) & Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group min-h-[300px] sm:min-h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80"
                alt="Birthday Party Banquet at Sky Roof"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider mb-2 inline-block">
                  6th Floor Rooftop Terrace
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                  Celebrate Life's Big Moments
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Birthdays, ring ceremonies, baby showers, kitty parties & corporate dinners.
                </p>
              </div>
            </div>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {banquetFeatures.slice(0, 4).map((f, i) => (
                <div key={i} className="glass-panel p-3.5 rounded-xl flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">{f.title}</h5>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Inquiry & Planning Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl h-full flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Banquet Date & Availability Check</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Plan Your Event With Us
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Tell us your occasion and guest count. Our banquet manager handles table styling, balloon setups, customized catering menus, and sound equipment.
                </p>

                {/* Form Controls */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Occasion / Event Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary Party">Anniversary Party</option>
                      <option value="Engagement / Roka">Engagement / Roka Gathering</option>
                      <option value="Corporate / Team Dinner">Corporate / Team Dinner</option>
                      <option value="Family Get-Together">Family Get-Together</option>
                      <option value="Kitty Party">Kitty Party</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Expected Number of Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="10-20 Guests">10 to 20 Guests (Intimate Terrace Lounge)</option>
                      <option value="20-35 Guests">20 to 35 Guests (Semi-Private Banquet)</option>
                      <option value="35-50 Guests">35 to 50 Guests (Full Banquet Hall)</option>
                      <option value="50-80+ Guests">50 to 80+ Guests (Full Rooftop & Hall Exclusive)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenReserve({ eventType, guestCount, occasion: eventType })}
                    className="btn-shimmer flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-450 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire Banquet Dates</span>
                  </button>

                  <a
                    href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Sky%20Roof%20Restaurant!%20I%20want%20to%20inquire%20about%20booking%20the%20banquet%20for%20${encodeURIComponent(eventType)}%20with%20${encodeURIComponent(guestCount)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition"
                  >
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <p className="text-xs text-center text-slate-400">
                  Prefer talking directly? Call Manager:{' '}
                  <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="text-amber-400 font-bold hover:underline">
                    081550 00501
                  </a>
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* Banquet Menu Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Pure Vegetarian & Jain Options</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Tailored Multi-Course Banquet Buffets
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We offer customizable multi-course menus featuring 3 welcome starters, soup, paneer specialties (Paneer Tikka Masala / Kaju Butter Masala), dal makhani, authentic clay oven tandoori naans, aromatic biryani, and hot sizzling brownie desserts starting at ₹399/person.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow transition"
              >
                Talk to Banquet Manager: 081550 00501
              </a>
              <button
                onClick={() => onOpenReserve({ occasion: 'Banquet & Party' })}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition"
              >
                Check Available Dates
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
