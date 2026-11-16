import React, { useState } from 'react';
import {
  Users, PartyPopper, Cake, Music, Sparkles,
  CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function BanquetSection({ onOpenReserve }) {
  const [guestCount, setGuestCount] = useState('25-40 Guests');
  const [eventType, setEventType] = useState('Birthday Celebration');

  const banquetFeatures = [
    { title: "Capacity up to 80+ Guests", desc: "Combination of open-air terrace lounge & covered air-conditioned dining." },
    { title: "Themed Decor & Balloon Styling", desc: "Custom balloon arches, neon signage, LED fairy canopies, and stage setup." },
    { title: "Unlimited Multi-Course Buffet", desc: "Starters, mocktails, rich North Indian curries, assorted naans, and desserts." },
    { title: "Dedicated Sound & Mic Setup", desc: "Celebration music playlist control, wireless mics for speeches, and cake sparklers." },
    { title: "100% Pure Veg & Dedicated Jain Prep", desc: "Separate hygienic kitchen cooking honoring all dietary traditions." },
    { title: "Dedicated Banquet Manager", desc: "End-to-end event coordination so you and your guests can truly relax and celebrate." },
  ];

  return (
    <section id="banquet" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle backdrop shapes */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80"
                alt="Birthday Party Banquet at Sky Roof"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider mb-2 inline-block">
                  Sky Roof Banquet Hall
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
            <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl">

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
                <PartyPopper className="w-3.5 h-3.5" />
                <span>Private Banquet & Party Bookings</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                Book Your Celebration Venue
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Take the stress out of event planning. Our team handles table styling, custom stage setups, personalized catering menus, and background music.
              </p>

              {/* Quick Banquet Inquiry Form */}
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

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenReserve({ eventType, guestCount })}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition"
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

                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-400">
                    Prefer talking directly? Call Manager:{' '}
                    <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="text-amber-400 font-bold hover:underline">
                      081550 00501
                    </a>
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

