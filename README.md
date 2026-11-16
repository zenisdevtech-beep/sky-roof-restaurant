# 🌟 Sky Roof Restaurant & Cafe - Web Application

A modern, responsive, rooftop-themed web application built in **React.js** with **Tailwind CSS** and **Lucide Icons** for **Sky Roof Restaurant & Cafe (and Banquet)**, located on the 6th Floor in Makarpura, Vadodara, Gujarat.

![Sky Roof Cover](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80)

---

## 📍 About Sky Roof Restaurant & Cafe
- **Location:** 6th Floor, Aarya's Corner Point, 601, Opp. Voltamp Transformer, Near Maneja Crossing, Makarpura, Maneja, Vadodara, Gujarat 390013
- **Google Rating:** ⭐ **4.3 / 5** (Based on **808+ Google Reviews**)
- **Cost:** ₹200–400 per person (~₹850 for two)
- **Cuisine:** Rooftop North Indian • Indo-Chinese • Biryani • Cafe & Mocktails • Desserts
- **Phone:** `081550 00501` / `+91 81550 00501`
- **Hours:** 10:00 AM – 11:45 PM (Kitchen Closes at 10:00 PM)
- **Instagram:** [@skyroof_vadodara](https://www.instagram.com/skyroof_vadodara/?hl=en) (6.3K+ Followers)

---

## 🚀 Key Features

### 1. 🌌 Atmospheric Rooftop Visual Design
- **Night & Sunset Theme:** Glassmorphic dark blue & starlit backdrop with warm amber/gold lighting accents matching an open-air rooftop ambiance.
- **Dynamic Live Notice:** Shows live waiting time (*"Live: A little busy • Usually up to 15 mins wait"*) and real-time kitchen closing warnings.
- **Mobile First & Responsive:** Optimized touch targets, mobile bottom quick-action bar, responsive drawers, and collapsible hamburger navigation.

### 2. 📅 Interactive Table Reservation System
- Select occasion: *Candle Light Dinner, Birthday Celebration, Anniversary Special, Romantic Date, Family Gathering, or Banquet*.
- Choose seating zone: *Open-Air Rooftop Terrace, Romantic Candle-Light Corner, Covered AC Lounge, or Private Banquet Hall*.
- Options for special table decor (rose petals, candles, balloons) and Pure Jain food preparation.
- Generates digital confirmation ticket with reference ID and celebratory **confetti fireworks**.
- **One-click WhatsApp confirmation:** Pre-populates the booking details into WhatsApp to send straight to the restaurant (`+91 81550 00501`).

### 3. 🍲 Rooftop Menu & Interactive Online Ordering
- Browse menu categories: *House Highlights, Starters & Kebabs, North Indian Curries, Breads & Rice, Indo-Chinese, Cafe & Beverages, Desserts*.
- Dish highlights from Google:
  - **Paneer Tikka Masala** (Signature charcoal tandoori gravy)
  - **Veg Hara Bhara Kebab** (Cashew-crusted spinach & pea patties)
  - **Crispy Veg Delight**
  - **Rich Cold Coffee with Ice Cream**
  - **Hot Sizzling Brownie with Vanilla Ice Cream**
  - **Veg Manchow Soup**
  - **Fresh Garden Green Salad**
  - **All-You-Can-Eat Buffet Deals**
- Instant search filter & dietary badges (*100% Pure Veg, Jain Available, Chef's Special, Spicy Chili Meter*).
- **Cart & Slide-over Basket:** Add/remove items, adjust quantities, toggle between *Dine-in Pre-order* and *Takeaway Pickup*, add table number and cooking notes, with automatic 5% GST calculation.
- **One-Click Order via WhatsApp:** Formats entire order itemized with totals and opens WhatsApp directly.

### 4. 💖 Curated Celebration Packages
- **Romantic Candle Light Dinner:** Curated 3-course couple dining with rose petal table styling, ambient lanterns, welcome mocktails, and brownie sizzler.
- **Rooftop Birthday & Party Bash:** Group packages with customized balloon decor, cake table, sound system access, and unlimited multi-course buffet.
- **Corporate & Family Banquet Hall:** Private dining hall combined with open-terrace seating for up to 80+ guests.

### 5. ⭐ Verified Google Reviews & AI Breakdown
- Exact breakdown for **4.3 ⭐ rating** across **808 reviews**.
- Google AI Summary highlight.
- Authentic customer quotes praising the food, atmosphere, affordable pricing, and rooftop sunset breeze.
- Direct links to rate and review on Google.

### 6. 📸 Filterable Visual Gallery
- Filter photos by *Rooftop Views, Romantic Candle Light, Celebrations, Food & Beverages*.
- Interactive lightbox modal for full-screen photo previews.
- Instagram follow card linking to `@skyroof_vadodara`.

### 7. 📍 Location, Map & Contact Form
- Embedded interactive Google Map centered on Makarpura, Vadodara.
- Quick buttons: *Get Directions on Google Maps, Call 081550 00501, WhatsApp Chat*.
- Direct inquiry form for custom event quotes.

---

## 🛠️ Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3 with custom glassmorphism and glowing gradients
- **Icons:** Lucide React + custom SVG brand icons
- **Effects:** Canvas Confetti

---

## 💻 How to Run Locally

```bash
# 1. Navigate to the project directory
cd /Users/zenispurohirt/Desktop/Projects/sky-roof-restaurant

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser:
# Local: http://localhost:5173/
# Network: http://<your-local-ip>:5173/

# 5. Build for production
npm run build
```

---

## 📂 Project Directory Structure

```
sky-roof-restaurant/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navbar, mobile menu & cart badge
│   │   ├── Hero.jsx                 # Rooftop hero banner, badges, rating strip
│   │   ├── Features.jsx             # Key highlights (Open-air, Candle-light, Banquet)
│   │   ├── MenuSection.jsx          # Interactive menu, filters & dish cards
│   │   ├── FoodCartDrawer.jsx       # Slide-over order cart & WhatsApp checkout
│   │   ├── CelebrationPackages.jsx  # Candlelight & Birthday packages
│   │   ├── BanquetSection.jsx       # Banquet hall specs & inquiry form
│   │   ├── ReviewsSection.jsx       # 4.3 ⭐ Google reviews breakdown & quotes
│   │   ├── GallerySection.jsx       # Photo gallery & lightbox preview
│   │   ├── LocationContact.jsx      # Google map, address, timings & contact form
│   │   ├── ReservationModal.jsx     # Table booking system with confetti
│   │   ├── Footer.jsx               # Navigation, social links & copyright
│   │   └── Icons.jsx                # Custom SVGs (Instagram, WhatsApp)
│   ├── data/
│   │   └── restaurantData.js        # Detailed data, dishes, reviews, timings
│   ├── App.jsx                      # Main app coordinator & state
│   ├── index.css                    # Tailwind & rooftop glow styling
│   └── main.jsx                     # Vite root entry
├── index.html                       # HTML template with Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```
