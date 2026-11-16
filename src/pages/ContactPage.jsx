import React from 'react';
import LocationContact from '../components/LocationContact';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactPage() {
  return (
    <div className="pt-6 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Makarpura / Maneja, Vadodara</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            Visit & Contact Sky Roof
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Located on the 6th floor terrace of Aarya's Corner Point opposite Voltamp Transformer. Call us directly or get GPS driving directions.
          </p>
        </div>
      </div>

      {/* Main Location, Contact & Map Component */}
      <LocationContact />
    </div>
  );
}
