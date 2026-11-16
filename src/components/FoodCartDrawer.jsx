import React, { useState } from 'react';
import {
  X, ShoppingBag, Plus, Minus, Trash2,
  ArrowRight, Check, MessageSquare, Phone, Utensils
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function FoodCartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart
}) {
  const [orderType, setOrderType] = useState('Dine-In Table Order');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [cookingNotes, setCookingNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + gst;

  const handleSendOrderWhatsApp = () => {
    if (cart.length === 0) return;

    let itemsText = cart.map(item => `• ${item.quantity}x ${item.name} - ₹${item.price * item.quantity}`).join('\n');

    const text = `*New Food Order - Sky Roof Restaurant & Cafe*
Order Type: *${orderType}*
Customer Name: ${customerName || 'Guest'}
Phone: ${customerPhone || 'Not provided'}
${orderType.includes('Dine-In') ? `Table No: ${tableNumber || 'To be seated'}` : ''}

*Ordered Items:*
${itemsText}

Subtotal: ₹${subtotal}
GST (5%): ₹${gst}
*Total Payable: ₹${grandTotal}*

Special Cooking Notes: ${cookingNotes || 'None'}

Please confirm receipt of order!`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0B101E] border-l border-white/10 shadow-2xl flex flex-col justify-between">

          {/* Cart Header */}
          <div className="p-5 border-b border-white/10 bg-slate-900/90 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Your Food Basket</h3>
                <p className="text-[11px] text-slate-400">Sky Roof 6th Floor Kitchen</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <Utensils className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Your Basket is Empty</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Add savory kebabs, sizzling North Indian curries, cold coffee or hot brownie from our menu!
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Order Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Dine-In Table Order', 'Takeaway Pickup'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setOrderType(type)}
                        className={`p-2.5 rounded-xl border text-center font-semibold transition ${orderType === type
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>Items ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
                    <button
                      onClick={onClearCart}
                      className="text-rose-400 hover:underline flex items-center gap-1 normal-case text-[11px]"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div>
                          <h5 className="text-xs font-bold text-white line-clamp-1">{item.name}</h5>
                          <span className="text-xs font-extrabold text-amber-400">₹{item.price}</span>
                        </div>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-1.5 bg-slate-800 px-2 py-1 rounded-lg border border-slate-700">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded text-slate-400 hover:text-white"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-extrabold text-white w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded text-slate-400 hover:text-white"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Shah"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">
                        Table No. (if seated)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. T-4"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Cooking Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Medium spicy, Jain preparation..."
                      value={cookingNotes}
                      onChange={(e) => setCookingNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Bill Breakdown */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Items Subtotal:</span>
                    <span className="text-white font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>GST (5%):</span>
                    <span className="text-white font-medium">₹{gst}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-black">
                    <span className="text-white">Total Amount:</span>
                    <span className="text-amber-400 text-base">₹{grandTotal}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Cart Footer Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-slate-900/90 space-y-2">
              <button
                onClick={handleSendOrderWhatsApp}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Place Order via WhatsApp (₹{grandTotal})</span>
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 pt-1">
                <span>Kitchen open till 10:00 PM</span>
                <span>•</span>
                <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="text-amber-400 hover:underline">
                  Call Kitchen
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

