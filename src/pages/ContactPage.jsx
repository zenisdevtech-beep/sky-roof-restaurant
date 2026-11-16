import React, { useState } from 'react';
import { 
  MapPin, Phone, Clock, Send, CheckCircle2, 
  ExternalLink, Navigation, Sparkles 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Table Reservation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = `Hi Sky Roof! Inquiry from ${formData.name} (${formData.phone}) for ${formData.inquiryType}: ${formData.message}`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-4 pb-20 relative">
      
      {/* SINGLE UNIFIED HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Makarpura / Maneja, Vadodara</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Visit & Contact Sky Roof
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Located on the 6th floor terrace of Aarya's Corner Point opposite Voltamp Transformer. Call us directly, reach us on WhatsApp, or get GPS driving directions.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Map (Left) + Inquiry Form (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours, Call Bar & Google Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Contact & Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="glass-panel p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  Restaurant Address
                </h4>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  6th Floor, Aarya's Corner Point, 601
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Opp. Voltamp Transformer, Near Maneja Crossing, Makarpura, Maneja, Vadodara, Gujarat 390013
                </p>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                  <a
                    href="https://maps.google.com/?q=6th+floor+Aaryas+corner+point+Makarpura+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Timings Card */}
              <div className="glass-panel p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  Hours & Kitchen Timings
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300 mt-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Restaurant:</span>
                    <strong className="text-white">10:00 AM – 11:45 PM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Kitchen Last Order:</span>
                    <strong className="text-amber-400">Closes 10:00 PM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Days:</span>
                    <strong className="text-white">Open All 7 Days (Mon-Sun)</strong>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-slate-300">
                    Live: ~15 mins average wait
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Calling & WhatsApp Bar */}
            <div className="glass-panel p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold">Direct Phone Call</p>
                  <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="text-base font-extrabold text-white hover:text-amber-400">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.rawPhone}`}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Sky%20Roof%20Restaurant!%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-72 sm:h-80 bg-slate-900 relative">
              <iframe
                title="Sky Roof Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.540307137839!2d73.1904791759604!3d22.257545944445837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9c5fbdcd70b%3A0xcf3f45ee64cbf30d!2sSky%20Roof%20Restaurant%20%26%20Banquet!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-125"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 right-3">
                <a
                  href="https://maps.google.com/?q=Sky+Roof+Restaurant+and+Cafe+Vadodara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-950/90 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 shadow"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open Full Map</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact & Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
              
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Quick Inquiry & Message
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Send Us a Note
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Need details on banquet pricing, custom anniversary setups, or bulk orders? We reply promptly.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Thank You!</h4>
                  <p className="text-xs text-slate-300">
                    Your inquiry has been opened in WhatsApp to chat directly with our manager.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-amber-400 hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyansh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Inquiry For
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                      >
                        <option value="Table Reservation">Table Reservation</option>
                        <option value="Candle Light Dinner">Candle Light Dinner</option>
                        <option value="Birthday Party & Banquet">Birthday Party / Banquet</option>
                        <option value="Bulk Food Order / Catering">Bulk Catering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention preferred dates, guest count, or decor requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Restaurant</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    Instant confirmation via WhatsApp & phone call.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
