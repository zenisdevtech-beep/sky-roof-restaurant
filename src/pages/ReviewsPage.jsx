import React from 'react';
import ReviewsSection from '../components/ReviewsSection';
import { Star, MessageSquare, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO, REVIEWS_DATA } from '../data/restaurantData';

export default function ReviewsPage() {
  return (
    <div className="pt-6 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.3 ⭐ Overall Rating (808+ Reviews)</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            Guest Reviews & Feedback
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Read verified reviews from guests who enjoyed our open-air terrace dining, candle-light setups, and authentic North Indian dishes.
          </p>
        </div>
      </div>

      {/* Main Reviews Component */}
      <ReviewsSection />
    </div>
  );
}
