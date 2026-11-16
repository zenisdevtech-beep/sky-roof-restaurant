import React from 'react';
import MenuSection from '../components/MenuSection';
import { Sparkles, Utensils, ShieldCheck, Flame, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function MenuPage({ cart, onAddToCart, onUpdateQuantity, onOpenCart }) {
  return (
    <div className="pt-6 pb-16">
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>Pure Vegetarian & Jain Friendly</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            Our Rooftop Culinary Menu
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            From smoky clay oven kebabs to slow-cooked satin paneer curries, Indo-Chinese noodles, and refreshing thick cold coffees.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Pure Veg</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-amber-400 font-bold">₹200–400</span>
              <span>Avg per head</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>All-You-Can-Eat Buffet Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu Component */}
      <MenuSection
        cart={cart}
        onAddToCart={onAddToCart}
        onUpdateQuantity={onUpdateQuantity}
        onOpenCart={onOpenCart}
        showHeader={false}
      />
    </div>
  );
}

