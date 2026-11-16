import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, Phone, MapPin, Clock, 
  Heart, Calendar, Utensils, Star, ExternalLink, ArrowUp
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ onOpenReserve }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080706] text-stone-300 border-t border-white/[0.08] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-500 flex items-center justify-center text-stone-950 font-bold shadow-md">
                <Crown className="w-5 h-5 text-stone-950" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  Sky Roof
                </span>
                <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-gold-500/15 text-gold-400 border border-gold-500/25">
                  6th FLOOR
                </span>
                <p className="text-xs text-stone-400">Rooftop Restaurant, Cafe & Banquet</p>
              </div>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Vadodara's premier open-air rooftop dining destination. Known for romantic candle-light setups, sizzling North Indian & Indo-Chinese platters, and joyful birthday party banquets under the stars.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center bg-gold-500/10 text-gold-400 px-3 py-1 rounded-lg text-xs font-bold border border-gold-500/25">
                <Star className="w-3.5 h-3.5 fill-gold-400 mr-1" />
                <span>4.3 ⭐ (808+ Google Reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-pink-600/30 hover:text-pink-400 text-stone-300 flex items-center justify-center transition border border-stone-800"
                title="Instagram @skyroof_vadodara"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-gold-500/30 hover:text-gold-400 text-stone-300 flex items-center justify-center transition border border-stone-800"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-emerald-500/30 hover:text-emerald-400 text-stone-300 flex items-center justify-center transition border border-stone-800"
                title="Call 081550 00501"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pages Multi-Page Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/" className="hover:text-gold-400 transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-gold-400 transition">Rooftop Menu</Link></li>
              <li><Link to="/candle-light" className="hover:text-gold-400 transition">Candle Light Packages</Link></li>
              <li><Link to="/banquet" className="hover:text-gold-400 transition">Banquet & Birthdays</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400 transition">Photo Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-gold-400 transition">Guest Reviews (808+)</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition">Directions & Map</Link></li>
            </ul>
          </div>

          {/* Menu Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Menu Specialties
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• Paneer Tikka Masala</li>
              <li>• Veg Hara Bhara Kebab</li>
              <li>• Signature Cold Coffee with Ice Cream</li>
              <li>• Sizzling Brownie with Vanilla Ice cream</li>
              <li>• Crispy Veg Delight & Chinese</li>
              <li>• Dal Makhani & Garlic Butter Naan</li>
              <li>• All-You-Can-Eat Buffet Specials</li>
            </ul>
          </div>

          {/* Location & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Visit & Timings
            </h4>
            <div className="space-y-2 text-xs text-stone-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  601, 6th Floor, Aarya's Corner Point, Opp. Voltamp Transformer, Near Maneja Crossing, Makarpura, Vadodara 390013
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open Daily: 10:00 AM – 11:45 PM</span>
              </p>

              <p className="flex items-center gap-2 text-gold-300 font-medium pl-6">
                Kitchen Closes at 10:00 PM
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenReserve}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Sky Roof Restaurant & Cafe, Vadodara. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-gold-400 transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
