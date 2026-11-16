import React, { useState, useEffect } from 'react';
import { 
  X, Calendar, Clock, Users, Heart, Sparkles, 
  CheckCircle2, Phone, PartyPopper, MessageSquare, Download, Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO, TIME_SLOTS } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1); // 1 = Details, 2 = Confirmation Ticket
  const [bookingRef, setBookingRef] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    date: today,
    time: TIME_SLOTS[2] || '06:30 PM (Sunset Hour)',
    guests: '2 Guests',
    occasion: 'Candle Light Dinner',
    seating: 'Open-Air Rooftop Terrace',
    specialNotes: '',
    wantsDecor: true,
    isJain: false
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setReservation(prev => ({
        ...prev,
        ...initialData,
        occasion: initialData.eventType || initialData.title || prev.occasion,
        guests: initialData.guestCount || prev.guests
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `SR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setStep(2);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti trigger:', err);
    }
  };

  const handleWhatsAppConfirmation = () => {
    const text = `*New Table Reservation - Sky Roof Restaurant & Cafe*
Booking Ref: *${bookingRef}*
Name: ${reservation.name}
Phone: ${reservation.phone}
Date: ${reservation.date}
Time: ${reservation.time}
Guests: ${reservation.guests}
Occasion: ${reservation.occasion}
Seating Zone: ${reservation.seating}
Decor Setup: ${reservation.wantsDecor ? 'Yes' : 'No'}
Jain Food: ${reservation.isJain ? 'Yes' : 'Standard Veg'}
Notes: ${reservation.specialNotes || 'None'}

Please confirm table availability!`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-3xl bg-[#0C1222] border border-amber-500/30 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-450 to-amber-600 px-6 py-4 flex items-center justify-between text-slate-950">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-serif text-lg font-extrabold uppercase tracking-wide">
              {step === 1 ? 'Reserve Rooftop Table' : 'Reservation Confirmed!'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/10 transition text-slate-950"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Occasion & Experience */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Select Occasion / Dining Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  'Candle Light Dinner',
                  'Birthday Celebration',
                  'Anniversary Special',
                  'Romantic Date',
                  'Family Dinner',
                  'Banquet / Party'
                ].map((occ) => (
                  <button
                    type="button"
                    key={occ}
                    onClick={() => setReservation({ ...reservation, occasion: occ })}
                    className={`p-2.5 rounded-xl border text-center font-semibold transition ${
                      reservation.occasion === occ
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reservation Date *</span>
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={reservation.date}
                  onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Time Slot *</span>
                </label>
                <select
                  value={reservation.time}
                  onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guests & Seating Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={reservation.guests}
                  onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  <option value="2 Guests (Couple Table)">2 Guests (Couple Table)</option>
                  <option value="3 to 4 Guests">3 to 4 Guests (Family Table)</option>
                  <option value="5 to 8 Guests">5 to 8 Guests (Group)</option>
                  <option value="10 to 15 Guests">10 to 15 Guests (Mini Celebration)</option>
                  <option value="15 to 30+ Guests">15 to 30+ Guests (Banquet Zone)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Seating Zone
                </label>
                <select
                  value={reservation.seating}
                  onChange={(e) => setReservation({ ...reservation, seating: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  <option value="Open-Air Rooftop Terrace">Open-Air Rooftop Terrace (Scenic)</option>
                  <option value="Romantic Candle-Light Corner">Romantic Candle-Light Corner</option>
                  <option value="Covered AC Lounge">Covered AC Lounge</option>
                  <option value="Private Banquet Hall">Private Banquet Hall</option>
                </select>
              </div>
            </div>

            {/* Addons: Decor & Jain */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                <input
                  type="checkbox"
                  checked={reservation.wantsDecor}
                  onChange={(e) => setReservation({ ...reservation, wantsDecor: e.target.checked })}
                  className="rounded text-amber-500 focus:ring-0 accent-amber-500"
                />
                <span>Include Special Table Decor (Candles / Rose Petals / Balloons)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                <input
                  type="checkbox"
                  checked={reservation.isJain}
                  onChange={(e) => setReservation({ ...reservation, isJain: e.target.checked })}
                  className="rounded text-amber-500 focus:ring-0 accent-amber-500"
                />
                <span className="text-emerald-400 font-medium">Require Pure Jain Food Preparation</span>
              </label>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vraj Shah"
                  value={reservation.name}
                  onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98250 12345"
                  value={reservation.phone}
                  onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Special Requests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Bringing birthday cake, anniversary surprise, quiet table..."
                value={reservation.specialNotes}
                onChange={(e) => setReservation({ ...reservation, specialNotes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 active:scale-95 transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Rooftop Table Booking</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                No advance booking fee needed • Instant WhatsApp confirmation
              </p>
            </div>

          </form>
        ) : (
          /* Confirmation Ticket Card */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white mb-1">
                Table Reserved Successfully!
              </h4>
              <p className="text-xs text-slate-300">
                We're excited to host you at Sky Roof Restaurant & Cafe.
              </p>
            </div>

            {/* Digital Ticket */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F172A] border border-amber-500/30 relative">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Booking Reference</span>
                  <p className="text-base font-extrabold text-amber-400 tracking-wider">{bookingRef}</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  {reservation.occasion}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-3 text-xs border-b border-white/10">
                <div>
                  <span className="text-slate-400 block text-[11px]">Guest Name:</span>
                  <strong className="text-white">{reservation.name}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Party Size:</span>
                  <strong className="text-white">{reservation.guests}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Date:</span>
                  <strong className="text-white">{reservation.date}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Time Slot:</span>
                  <strong className="text-white">{reservation.time}</strong>
                </div>
              </div>

              <div className="pt-3 text-xs text-slate-300 flex items-center justify-between">
                <span>📍 6th Floor Terrace, Makarpura</span>
                <span className="text-amber-400 font-bold">{reservation.seating}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Booking Ticket to Sky Roof WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.rawPhone}`}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call 081550 00501</span>
                </a>

                <button
                  onClick={onClose}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold border border-slate-700"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

