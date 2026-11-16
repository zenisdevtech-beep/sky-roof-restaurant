import React from 'react';
import {
  Sparkles, Flame, PartyPopper, Users,
  UtensilsCrossed, Leaf, HeartHandshake, ShieldCheck
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Features({ onOpenReserve }) {
  const iconMap = {
    Sparkles: Sparkles,
    Flame: Flame,
    PartyPopper: PartyPopper,
    Users: Users,
    UtensilsCrossed: UtensilsCrossed,
    Leaf: Leaf
  };

  return (
    <section className="py-16 md:py-24 bg-[#0A1020]/60 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Vadodara Loves Sky Roof</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Unforgettable Rooftop Moments
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            From intimate anniversary candle-light dates to lively birthday bashes, every visit on our 6th floor terrace is elevated with scenic vibes, flavorful North Indian specialties, and heartwarming hospitality.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESTAURANT_INFO.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={feature.id}
                className="glass-panel hover:glass-panel-gold p-7 rounded-2xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-amber-400/80 font-medium">
                  <span>Available Daily</span>
                  <span className="group-hover:translate-x-1 transition-transform">Learn more →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking Banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-slate-900/50 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Planning a Special Celebration or Date Night?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Reserve your table early to secure front-row terrace seating and customized decorations.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            Check Availability Now
          </button>
        </div>

      </div>
    </section>
  );
}

