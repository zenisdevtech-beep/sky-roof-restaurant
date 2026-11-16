import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import FoodCartDrawer from './components/FoodCartDrawer';

// Multi-Page Routes
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CandleLightPage from './pages/CandleLightPage';
import BanquetPage from './pages/BanquetPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

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

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080D1A] text-slate-100 relative flex flex-col justify-between">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-20 right-4 z-50 bg-amber-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-2xl border border-amber-300 animate-in slide-in-from-top-2 duration-200 flex items-center gap-2">
            <span>✨</span>
            <span>{toastMessage}</span>
          </div>
        )}

        <div>
          {/* Global Multi-Page Navigation Header */}
          <Navbar
            onOpenReserve={() => handleOpenReserve()}
            cartItemsCount={totalCartCount}
            onOpenCart={() => setIsCartOpen(true)}
          />

          {/* Page Routing */}
          <main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    onOpenReserve={handleOpenReserve}
                    cart={cart}
                    onAddToCart={handleAddToCart}
                    onUpdateQuantity={handleUpdateQuantity}
                  />
                } 
              />
              <Route 
                path="/menu" 
                element={
                  <MenuPage 
                    cart={cart}
                    onAddToCart={handleAddToCart}
                    onUpdateQuantity={handleUpdateQuantity}
                    onOpenCart={() => setIsCartOpen(true)}
                  />
                } 
              />
              <Route 
                path="/candle-light" 
                element={<CandleLightPage onOpenReserve={handleOpenReserve} />} 
              />
              <Route 
                path="/banquet" 
                element={<BanquetPage onOpenReserve={handleOpenReserve} />} 
              />
              <Route 
                path="/gallery" 
                element={<GalleryPage />} 
              />
              <Route 
                path="/reviews" 
                element={<ReviewsPage />} 
              />
              <Route 
                path="/contact" 
                element={<ContactPage />} 
              />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>

        {/* Global Footer */}
        <Footer onOpenReserve={() => handleOpenReserve()} />

        {/* Global Table Reservation Interactive Modal */}
        <ReservationModal
          isOpen={isReserveOpen}
          onClose={() => setIsReserveOpen(false)}
          initialData={reserveInitialData}
        />

        {/* Global Food Basket Slide-Over Drawer */}
        <FoodCartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onClearCart={handleClearCart}
        />

        {/* Mobile Sticky Floating Action Bar */}
        <div className="sm:hidden fixed bottom-3 left-3 right-3 z-30 flex items-center gap-2">
          <a
            href={`tel:${RESTAURANT_INFO.rawPhone}`}
            className="flex-1 py-3 px-3 rounded-xl bg-slate-900/95 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 shadow-xl backdrop-blur-md"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call</span>
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
    </BrowserRouter>
  );
}
