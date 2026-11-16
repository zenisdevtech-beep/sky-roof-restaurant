import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { 
  Utensils, ArrowRight, Heart, Sparkles, Star, 
  MapPin, Phone, Users, Calendar, Flame, Plus, Minus
} from 'lucide-react';
import { MENU_ITEMS, REVIEWS_DATA, RESTAURANT_INFO, CELEBRATION_PACKAGES } from '../data/restaurantData';

export default function HomePage({ onOpenReserve, cart, onAddToCart, onUpdateQuantity }) {
  // 4 top highlight dishes for preview on home
  const previewDishes = MENU_ITEMS.filter(i => i.isHighlight).slice(0, 4);

  const getItemQty = (id) => {
    const found = cart.find(i => i.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        onOpenReserve={onOpenReserve}
        onExploreMenu={() => {}}
      />

      {/* Rooftop Highlights & Features */}
      <Features onOpenReserve={onOpenReserve} />

      {/* Signature Dishes Spotlight Section */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>Chef's Rooftop Signatures</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Popular Menu Specialties
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                Charcoal kebabs, rich North Indian gravies, and handcrafted cafe beverages prepared fresh daily on the 6th floor terrace.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs uppercase tracking-wider border border-slate-700 transition self-start sm:self-auto shrink-0"
            >
              <span>Explore Full Menu (20+ Items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dish Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewDishes.map((item) => {
              const qty = getItemQty(item.id);
              return (
                <div
                  key={item.id}
                  className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded bg-slate-950/80 border border-emerald-500 flex items-center justify-center p-0.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </span>
                      {item.isChefSpecial && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                          Special
                        </span>
                      )}
                    </div>

                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-slate-950/80 border border-white/10 text-amber-400 text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400">Price</span>
                        <div className="text-base font-extrabold text-amber-400">
                          ₹{item.price}
                        </div>
                      </div>

                      {qty === 0 ? (
                        <button
                          onClick={() => onAddToCart(item)}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-500 text-slate-200 hover:text-slate-950 border border-slate-700 hover:border-amber-500 text-xs font-bold transition-all flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-amber-500 text-slate-950 px-2 py-1 rounded-xl font-bold shadow">
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty - 1)}
                            className="p-0.5 hover:bg-amber-600 rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-extrabold">{qty}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty + 1)}
                            className="p-0.5 hover:bg-amber-600 rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Romantic Candle Light & Celebrations Banner */}
      <section className="py-16 bg-gradient-to-r from-rose-950/30 via-slate-900/90 to-amber-950/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-3 border border-rose-500/30">
                <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                <span>Romantic Moments in Vadodara</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Curated Candle-Light Dinners Under Starlit Skies
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Celebrate your anniversaries, proposals, and romantic evenings on our panoramic 6th floor rooftop terrace. Rose petal table styling, glowing lanterns, soothing music, and a delicious 4-course feast.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/candle-light"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-rose-500/25 transition"
                >
                  <span>Explore Candle Light Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenReserve({ occasion: 'Candle Light Dinner' })}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Reserve Couple Table</span>
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=1000&q=80"
                alt="Romantic Candle Light Dinner at Sky Roof"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-1">
                  Couples' Favorite
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Starting at ₹1,499 per couple
                </h3>
                <p className="text-xs text-slate-300 mt-1">Includes personalized decor, 3 courses & sizzling dessert.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Social Proof Strip */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Customer Praise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Rated 4.3 ⭐ by 800+ Guests
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-10">
            Read verified experiences from couples, party hosts, and food enthusiasts across Gujarat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
            {REVIEWS_DATA.featuredReviews.slice(0, 3).map((r) => (
              <div key={r.id} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-amber-400 mb-2">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic mb-4 leading-relaxed">
                    "{r.text}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{r.author}</span>
                  <span className="text-slate-400 text-[11px]">{r.date}</span>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition"
          >
            <span>See All 808 Google Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </section>

      {/* Quick Banquet & Booking Callout Banner */}
      <section className="py-14 bg-[#0A1022] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                Celebrations & Banquets
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                Host Your Next Birthday or Family Party on the Rooftop
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Enjoy customized balloon decors, cake cutting setups, private sound systems, and all-you-can-eat buffet menus starting at ₹399/person.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/banquet"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition"
              >
                Banquet Details
              </Link>
              <button
                onClick={() => onOpenReserve({ occasion: 'Birthday Celebration' })}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition"
              >
                Book Celebration
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
