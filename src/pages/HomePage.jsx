import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { 
  Utensils, ArrowRight, Heart, Sparkles, Star, 
  MapPin, Phone, Users, Calendar, Flame, Plus, Minus
} from 'lucide-react';
import { MENU_ITEMS, REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export default function HomePage({ onOpenReserve, cart, onAddToCart, onUpdateQuantity }) {
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
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>Chef's Rooftop Signatures</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Popular Menu Specialties
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl">
                Charcoal kebabs, rich North Indian gravies, and handcrafted cafe beverages prepared fresh daily on the 6th floor terrace.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-gold-400 font-bold text-xs uppercase tracking-wider border border-stone-800 transition self-start sm:self-auto shrink-0 shadow-sm"
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
                  className="luxe-card luxe-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative h-44 overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded bg-stone-950/90 border border-emerald-500 flex items-center justify-center p-0.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </span>
                      {item.isChefSpecial && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500 text-stone-950">
                          Special
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-stone-950/80 border border-white/10 text-gold-400 text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase font-medium">Price</span>
                        <div className="text-base font-extrabold text-gold-400">
                          ₹{item.price}
                        </div>
                      </div>

                      {qty === 0 ? (
                        <button
                          onClick={() => onAddToCart(item)}
                          className="px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-gold-500 text-stone-200 hover:text-stone-950 border border-stone-800 hover:border-gold-500 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 shadow"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-500 text-stone-950 px-2 py-1 rounded-xl font-bold shadow">
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty - 1)}
                            className="p-0.5 hover:bg-gold-600 rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-black">{qty}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty + 1)}
                            className="p-0.5 hover:bg-gold-600 rounded"
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

      {/* Romantic Candle Light Spotlight */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#171210] via-[#1A1613] to-[#171210] border-y border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/15 text-rose-300 text-xs font-semibold mb-3 border border-rose-500/25">
                <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                <span>Romantic Moments in Vadodara</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Curated Candle-Light Dinners Under Starlit Skies
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                Celebrate your anniversaries, proposals, and romantic evenings on our panoramic 6th floor rooftop terrace. Rose petal table styling, glowing lanterns, soothing music, and a delicious 4-course feast.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/candle-light"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-rose-500/25 transition"
                >
                  <span>Explore Candle Light Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenReserve({ occasion: 'Candle Light Dinner' })}
                  className="px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Reserve Couple Table</span>
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl h-80 sm:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=1000&q=80"
                alt="Romantic Candle Light Dinner at Sky Roof"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-1">
                  Couples' Favorite Experience
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Starting at ₹1,499 per couple
                </h3>
                <p className="text-xs text-stone-300 mt-1">Includes personalized decor, 4 courses & sizzling brownie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Strip */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            <span>Customer Praise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Rated 4.3 ⭐ by 800+ Guests
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto mb-12">
            Read verified experiences from couples, party hosts, and food enthusiasts across Gujarat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            {REVIEWS_DATA.featuredReviews.slice(0, 3).map((r) => (
              <div key={r.id} className="luxe-card p-7 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-gold-400 mb-3">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-300 italic mb-6 leading-relaxed">
                    "{r.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{r.author}</span>
                  <span className="text-stone-400 text-[11px]">{r.date}</span>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 transition"
          >
            <span>See All 808 Google Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </section>

      {/* Banquet & Booking Banner */}
      <section className="py-14 bg-[#0A0908] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="luxe-card-gold rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                Celebrations & Banquets
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                Host Your Next Birthday or Family Party on the Rooftop
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Customized balloon decors, cake cutting setups, private sound systems, and all-you-can-eat buffet menus starting at ₹399/person.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/banquet"
                className="px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider border border-stone-800 transition"
              >
                Banquet Details
              </Link>
              <button
                onClick={() => onOpenReserve({ occasion: 'Birthday Celebration' })}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/25 transition"
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
