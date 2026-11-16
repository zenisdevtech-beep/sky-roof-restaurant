import React from 'react';
import CelebrationPackages from '../components/CelebrationPackages';
import { 
  Heart, Sparkles, Star, Calendar, Music, 
  Wine, CheckCircle2, Phone, MessageSquare 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function CandleLightPage({ onOpenReserve }) {
  const romanticHighlights = [
    {
      title: "Prime Rooftop Corner Seating",
      desc: "Private breezy corner seating overlooking the illuminated night skyline of Vadodara with optimal privacy."
    },
    {
      title: "Fresh Rose Petals & Ambient Lanterns",
      desc: "Handcrafted table styling with fragrant fresh red rose petals, romantic fairy lights, and flickering glass candles."
    },
    {
      title: "Complimentary Welcome Mocktails",
      desc: "Chilled tropical mocktails served upon seating to set the mood for your magical evening."
    },
    {
      title: "Curated 4-Course Feast",
      desc: "Includes soup or starters, two chef-special gravies (Paneer Tikka Masala / Kaju Butter Masala), assorted naans, and rice."
    },
    {
      title: "Sizzling Brownie Finale",
      desc: "Our iconic hot sizzling Belgian chocolate walnut brownie served with vanilla ice cream and chocolate fudge."
    },
    {
      title: "Personalized Acoustic Background Music",
      desc: "Soft, soulful melodies to create an intimate atmosphere for conversation."
    }
  ];

  return (
    <div className="pt-6 pb-20">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto py-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
            <span>Vadodara's Premier Couple Dining</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Rooftop Candle-Light Dinners
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Create memories that last a lifetime. Surprise your partner with an open-air candlelight dining setup on our 6th floor terrace under starry Vadodara skies.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenReserve({ occasion: 'Candle Light Dinner' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/25 active:scale-95 transition"
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              <span>Book Candle-Light Table (₹1,499)</span>
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.rawPhone}`}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition"
            >
              <Phone className="w-4 h-4 inline mr-2 text-rose-400" />
              <span>Call for Customization</span>
            </a>
          </div>
        </div>

        {/* Visual Showcase Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl h-80 sm:h-[420px] mb-16">
          <img
            src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=1200&q=80"
            alt="Candle Light Table Setup at Sky Roof"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
              Intimate & Magical
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
              Private Terrace Cabanas
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Surprise anniversary date, birthday romance, or proposal under the stars with breathtaking open-air city views.
            </p>
          </div>
        </div>

        {/* What's Included Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
              Everything Included in Your Date Night
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We take care of every detail so you can focus entirely on each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanticHighlights.map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-rose-500/20 hover:border-rose-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Component */}
        <CelebrationPackages
          onSelectPackage={(pkg) => onOpenReserve({ occasion: pkg.title, title: pkg.title })}
        />

      </div>
    </div>
  );
}
