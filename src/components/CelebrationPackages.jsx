import React from 'react';
import {
  Heart, Sparkles, Check, PartyPopper, Users, Calendar,
  Flame, Music, ShieldCheck, ArrowRight
} from 'lucide-react';
import { CELEBRATION_PACKAGES } from '../data/restaurantData';

export default function CelebrationPackages({ onSelectPackage }) {
  const getPackageIcon = (id) => {
    switch (id) {
      case 'candle-light':
        return <Heart className="w-6 h-6 text-rose-400" />;
      case 'birthday-bash':
        return <PartyPopper className="w-6 h-6 text-amber-400" />;
      case 'private-banquet':
        return <Users className="w-6 h-6 text-blue-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-gradient-to-b from-[#0A1020] to-[#080D1A] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
            <span>Celebrations Under The Open Sky</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Curated Celebration Packages
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Elevate your special milestones with custom rooftop decorations, candlelight arrangements, fairy light canopies, and lavish North Indian dining spreads.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CELEBRATION_PACKAGES.map((pkg) => {
            const isRomantic = pkg.id === 'candle-light';
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group ${isRomantic
                  ? 'bg-gradient-to-b from-rose-950/30 via-slate-900/90 to-slate-900 border-2 border-rose-500/40 shadow-2xl shadow-rose-950/40 md:-translate-y-2'
                  : 'glass-panel hover:border-amber-500/40'
                  }`}
              >
                {/* Popular Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-lg ${isRomantic
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                    : 'bg-amber-500 text-slate-950'
                    }`}>
                    {pkg.badge}
                  </span>
                </div>

                <div>
                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 mt-2">
                    {getPackageIcon(pkg.id)}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 font-medium">
                    {pkg.subtitle}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      /{pkg.unit}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-300">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action button */}
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-md ${isRomantic
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white shadow-rose-500/25'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                    }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Customization Callout */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            Have specific decor, balloon themes, or custom Jain menu requests?{' '}
            <a
              href="tel:08155000501"
              className="text-amber-400 font-bold hover:underline"
            >
              Speak with our Celebration Coordinator at 081550 00501
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

