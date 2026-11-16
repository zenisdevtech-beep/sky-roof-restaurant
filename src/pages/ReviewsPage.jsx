import React from 'react';
import { 
  Star, Quote, CheckCircle, ExternalLink, MessageSquare, 
  Sparkles, ThumbsUp 
} from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export default function ReviewsPage() {
  return (
    <div className="pt-4 pb-20 relative">
      
      {/* SINGLE UNIFIED HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4.3 ⭐ Rating (808+ Google Reviews)</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Guest Reviews & Feedback
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Loved by 800+ patrons in Vadodara! Here's what our guests say about their rooftop dining moments, romantic candle-light dinners, and family celebrations.
          </p>
        </div>
      </section>

      {/* Main Reviews Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Ratings Summary Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl mb-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Big Display */}
            <div className="md:col-span-4 text-center md:text-left md:border-r border-white/10 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="text-5xl sm:text-6xl font-serif font-black text-white">
                  {REVIEWS_DATA.rating}
                </span>
                <div>
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Based on <strong className="text-white">{REVIEWS_DATA.totalReviews}</strong> Google Reviews
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center md:justify-start gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Google Business Listing</span>
              </div>
            </div>

            {/* Star Distribution Bars */}
            <div className="md:col-span-4 space-y-2.5">
              {REVIEWS_DATA.breakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-6 text-stone-400 font-bold">{row.stars} ★</span>
                  <div className="flex-1 h-2 rounded-full bg-stone-800/80 overflow-hidden p-0.5">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-stone-300 font-semibold">{row.percentage}%</span>
                </div>
              ))}
            </div>

            {/* AI Summary from Google */}
            <div className="md:col-span-4 bg-slate-900/80 p-4 sm:p-5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Google AI Review Summary</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{REVIEWS_DATA.aiSummary}"
              </p>
            </div>

          </div>
        </div>

        {/* Featured Real Quotes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REVIEWS_DATA.featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="luxe-card luxe-card-hover p-6 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                <Quote className="w-6 h-6 text-amber-500/25 mb-2 group-hover:text-amber-500/50 transition-colors" />
                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                  <span className="text-[10px] text-amber-400 font-semibold">Google Local Guide</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 group-hover:text-amber-400 transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider border border-stone-800 hover:border-stone-700 flex items-center gap-2 transition hover:-translate-y-0.5 shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Read All 808 Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-450 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:-translate-y-0.5 transition"
          >
            <Star className="w-4 h-4 fill-stone-950 text-stone-950" />
            <span>Rate & Review Us</span>
          </a>
        </div>

      </section>

    </div>
  );
}
