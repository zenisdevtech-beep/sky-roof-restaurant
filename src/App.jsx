import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import CelebrationPackages from './components/CelebrationPackages';
import BanquetSection from './components/BanquetSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import FoodCartDrawer from './components/FoodCartDrawer';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [reserveInitialData, setReserveInitialData] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  // Cart operations
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    // Show temporary toast
    showToast(`Added "${item.name}" to your basket!`);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== itemId));
    } else {
      setCart((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, quantity: newQuantity } : i))
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleOpenReserve = (data = {}) => {
    setReserveInitialData(data);
    setIsReserveOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    handleOpenReserve({
      title: pkg.title,
      eventType: pkg.title,
      occasion: pkg.title,
      wantsDecor: true
    });
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 relative">

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-amber-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-2xl border border-amber-300 animate-in slide-in-from-top-2 duration-200 flex items-center gap-2">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        onOpenReserve={() => handleOpenReserve()}
        cartItemsCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenReserve={() => handleOpenReserve()}
        onExploreMenu={handleExploreMenu}
      />

      {/* Highlights & Features */}
      <Features onOpenReserve={() => handleOpenReserve()} />

      {/* Menu & Cart Section */}
      <MenuSection
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Celebration Packages (Candle Light & Birthdays) */}
      <CelebrationPackages onSelectPackage={handleSelectPackage} />

      {/* Banquet & Event Venue */}
      <BanquetSection onOpenReserve={handleOpenReserve} />

      {/* Customer Reviews & Google Rating Breakdown */}
      <ReviewsSection />

      {/* Photo Gallery & Rooftop Views */}
      <GallerySection />

      {/* Location, Hours, Map & Contact Form */}
      <LocationContact />

      {/* Footer */}
      <Footer onOpenReserve={() => handleOpenReserve()} />

      {/* Table Reservation Interactive Modal */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
        initialData={reserveInitialData}
      />

      {/* Food Cart Slide-over Drawer */}
      <FoodCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Mobile Floating Action Sticky Bar */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-30 flex items-center gap-2">
        <a
          href={`tel:${RESTAURANT_INFO.rawPhone}`}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-900/95 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 shadow-xl backdrop-blur-md"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => handleOpenReserve()}
          className="flex-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xl shadow-amber-500/25 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Reserve Table</span>
        </button>

        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Sky%20Roof%20Restaurant!%20I%20would%20like%20to%20reserve%20a%20table.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-600 text-white shadow-xl flex items-center justify-center"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}

