import React, { useState } from 'react';
import { 
  Camera, X, ZoomIn, Sparkles, Heart, 
  PartyPopper, Utensils 
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import RooftopStars from '../components/RooftopStars';
import { GALLERY_IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = ['All', 'Rooftop View', 'Romantic', 'Celebrations', 'Food', 'Beverages'];

  const filteredImages = activeTab === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  return (
    <div className="pt-4 pb-20 relative overflow-hidden">
      {/* 🌌 Animated Starlight Sky */}
      <RooftopStars count={26} />
      
      {/* SINGLE UNIFIED HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 relative z-10 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Rooftop Photo Gallery</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Sky Roof in Pictures
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Take a visual tour of our 6th floor terrace in Makarpura, Vadodara: starlit open-air tables, decorated anniversary cabanas, sizzling platters, and festive party banquets.
          </p>

          {/* Filter Tabs directly inside the unified Hero Section */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg min-h-[260px] bg-slate-900"
            >
              <img
                src={img.image}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-slate-950/80 border border-white/10 text-[10px] font-bold text-amber-400 uppercase tracking-wider backdrop-blur-sm">
                  {img.tag}
                </span>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-slate-950/80 text-white flex items-center justify-center backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {img.title}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Category: {img.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Follow @skyroof_vadodara on Instagram</p>
              <p className="text-xs text-slate-400">Join 6.3K+ food lovers & get tagged in rooftop celebration stories</p>
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition shrink-0"
          >
            <span>Visit Instagram Profile</span>
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:text-amber-400 transition"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-6 bg-slate-950">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {selectedImage.tag} • {selectedImage.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
