import React, { useState, useMemo } from 'react';
import { 
  Search, Flame, Star, Plus, Minus, Check, 
  Utensils, Coffee, Soup, Sparkles, Filter, ShieldCheck, ShoppingBag
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuSection({ cart, onAddToCart, onUpdateQuantity, onOpenCart, showHeader = true }) {
  const [activeCategory, setActiveCategory] = useState('highlights');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterJainOnly, setFilterJainOnly] = useState(false);
  const [filterChefSpecialOnly, setFilterChefSpecialOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (activeCategory === 'highlights' && !item.isHighlight) {
        return false;
      }
      if (activeCategory !== 'all' && activeCategory !== 'highlights' && item.category !== activeCategory) {
        return false;
      }

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      if (filterJainOnly && !item.isJainAvailable) {
        return false;
      }

      if (filterChefSpecialOnly && !item.isChefSpecial) {
        return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, filterJainOnly, filterChefSpecialOnly]);

  const getItemQuantity = (id) => {
    const found = cart.find(i => i.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Utensils className="w-3.5 h-3.5" />
              <span>Curated Culinary Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Rooftop Menu & Specialties
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Delicately spiced charcoal kebabs, rich North Indian gravies, Indo-Chinese platters, and refreshing cafe brews prepared fresh for you.
            </p>
          </div>
        )}

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search Paneer Tikka, Hara Bhara Kebab, Cold Coffee, Soups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-stone-900 border border-stone-800 rounded-2xl text-white placeholder-stone-400 text-sm focus:outline-none focus:border-gold-500 transition shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Toggles */}
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <button
                onClick={() => setFilterJainOnly(!filterJainOnly)}
                className={`flex-1 sm:flex-none px-4 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-1.5 transition-all ${
                  filterJainOnly 
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md' 
                    : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Jain Available</span>
              </button>

              <button
                onClick={() => setFilterChefSpecialOnly(!filterChefSpecialOnly)}
                className={`flex-1 sm:flex-none px-4 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-1.5 transition-all ${
                  filterChefSpecialOnly 
                    ? 'bg-gold-500/20 text-gold-300 border-gold-500/50 shadow-md' 
                    : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
                }`}
              >
                <Flame className="w-4 h-4 text-gold-400" />
                <span>Chef Specials</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-stone-950 shadow-lg shadow-gold-500/20 scale-105'
                    : 'bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="luxe-card p-12 text-center rounded-3xl max-w-md mx-auto my-12">
            <Utensils className="w-12 h-12 text-stone-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Dishes Found</h3>
            <p className="text-xs text-stone-400 mb-4">
              We couldn't find any dishes matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setFilterJainOnly(false);
                setFilterChefSpecialOnly(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-gold-500 text-stone-950 font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);
              return (
                <div
                  key={item.id}
                  className="luxe-card luxe-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
                >
                  {/* Dish Image */}
                  <div className="relative h-48 overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="w-5 h-5 rounded bg-stone-950/90 border border-emerald-500 flex items-center justify-center p-0.5" title="Pure Vegetarian">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </span>

                      {item.isJainAvailable && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/80 text-white backdrop-blur-sm">
                          Jain Option
                        </span>
                      )}

                      {item.isChefSpecial && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500 text-stone-950 flex items-center gap-1 shadow">
                          <Flame className="w-3 h-3 fill-stone-950 text-stone-950" />
                          <span>Special</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-stone-950/85 border border-white/10 text-gold-400 text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      <span>{item.rating}</span>
                    </div>

                    {item.spicyLevel > 0 && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-0.5 bg-stone-950/80 px-2 py-0.5 rounded-md text-[10px] text-rose-300 font-medium backdrop-blur-sm">
                        <span>Spicy: </span>
                        {Array.from({ length: item.spicyLevel }).map((_, i) => (
                          <span key={i}>🌶️</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dish Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1 mb-1.5">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price & Add to Cart Controls */}
                    <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase font-medium">Price</span>
                        <div className="text-lg font-extrabold text-gold-400">
                          ₹{item.price}
                        </div>
                      </div>

                      {qty === 0 ? (
                        <button
                          onClick={() => onAddToCart(item)}
                          className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-gold-500 text-stone-200 hover:text-stone-950 border border-stone-800 hover:border-gold-500 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95 shadow"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2.5 bg-gradient-to-r from-gold-500 to-amber-500 text-stone-950 px-2.5 py-1.5 rounded-xl font-bold shadow-md">
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty - 1)}
                            className="p-1 rounded-md hover:bg-gold-600 active:scale-90 transition text-stone-950"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs w-4 text-center font-black">{qty}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty + 1)}
                            className="p-1 rounded-md hover:bg-gold-600 active:scale-90 transition text-stone-950"
                            aria-label="Increase quantity"
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
        )}

        {/* Floating Cart Indicator Banner */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-lg">
            <div className="p-4 rounded-3xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 shadow-2xl flex items-center justify-between border border-gold-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-950 text-gold-400 flex items-center justify-center font-black">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-extrabold text-stone-900">
                    {cart.reduce((sum, i) => sum + i.quantity, 0)} Items Added
                  </p>
                  <p className="text-base font-black">
                    ₹{cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)} Total
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenCart}
                className="px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-stone-900 text-gold-400 text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow"
              >
                <span>View Cart</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
