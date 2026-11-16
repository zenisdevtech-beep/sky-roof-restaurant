import React from 'react';
import BanquetSection from '../components/BanquetSection';
import { 
  Users, PartyPopper, Sparkles, CheckCircle, 
  Phone, Calendar, Utensils, ShieldCheck, Music
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function BanquetPage({ onOpenReserve }) {
  const banquetSpecs = [
    { label: "Guest Capacity", value: "15 to 80+ Guests" },
    { label: "Venue Type", value: "Open-Air Terrace + AC Hall" },
    { label: "Cuisine Mode", value: "100% Pure Veg & Dedicated Jain" },
    { label: "Buffet Packages", value: "Starting at ₹399 / head" },
    { label: "Sound & AV", value: "Wireless Mic, Music & Party Lights" },
    { label: "Location", value: "6th Floor, Aarya's Corner Point, Vadodara" }
  ];

  return (
    <div className="pt-6 pb-20">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto py-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <PartyPopper className="w-3.5 h-3.5 text-amber-400" />
            <span>Sky Roof Restaurant & Banquet Hall</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Celebrations & Party Venue
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Vadodara's favorite celebration hub! Host memorable birthdays, corporate dinners, kitty parties, and anniversaries with panoramic rooftop views and all-inclusive banquet packages.
          </p>

          {/* Key Specs Ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
            {banquetSpecs.map((spec, i) => (
              <div key={i} className="glass-panel p-3.5 rounded-xl text-center border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">{spec.label}</span>
                <strong className="text-xs sm:text-sm text-amber-400 font-extrabold mt-0.5 block">{spec.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Banquet Section */}
      <BanquetSection onOpenReserve={onOpenReserve} />

      {/* Banquet Menu Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Tailored Pure Vegetarian & Jain Banquet Buffets
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We offer customizable multi-course menus featuring 3 welcome starters, soup, paneer specialties (Paneer Tikka Masala / Kaju Butter Masala), dal makhani, authentic clay oven tandoori naans, aromatic biryani, and hot sizzling brownie desserts.
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
                Inquire Available Dates
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
