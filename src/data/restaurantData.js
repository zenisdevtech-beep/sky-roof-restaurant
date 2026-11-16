export const RESTAURANT_INFO = {
  name: "Sky Roof Restaurant & Cafe",
  subtitle: "Rooftop Open-Air Dining & Banquet",
  tagline: "Experience Magic Under The Stars in Vadodara",
  rating: 4.3,
  reviewCount: 808,
  priceRange: "₹200–400",
  priceForTwo: "₹850 for two (approx.)",
  cuisineType: "North Indian • Indo-Chinese • Cafe & Beverages • Biryani",
  phone: "081550 00501",
  rawPhone: "+918155000501",
  whatsapp: "918155000501",
  instagram: "skyroof_vadodara",
  instagramUrl: "https://www.instagram.com/skyroof_vadodara/?hl=en",
  address: "6th Floor, Aarya's Corner Point, 601, Opp. Voltamp Transformer, Near Maneja Crossing, Makarpura, Maneja, Vadodara, Gujarat 390013",
  googleMapsUrl: "https://maps.google.com/?q=Sky+Roof+Restaurant+and+Cafe+Vadodara",
  googleReserveUrl: "https://www.google.com/maps/reserve/v/dine/c/HX4gM1u713s",
  zomatoUrl: "https://www.zomato.com/vadodara/sky-roof-restaurant-cafe-makarpura",
  timings: {
    restaurant: "10:00 AM – 11:45 PM",
    kitchen: "10:00 AM – 10:00 PM",
    liveStatus: "Open Now",
    busyNote: "Live: A little busy • Usually up to 15 mins wait",
    averageTimeSpent: "45–90 min (Celebrations & Dinners)"
  },
  features: [
    {
      id: "rooftop",
      title: "Scenic Rooftop Terrace",
      desc: "6th floor panoramic open-air city views of Vadodara with breezy evening vibes and fairy light canopies.",
      icon: "Sparkles"
    },
    {
      id: "candlelight",
      title: "Candle-Light Dinners",
      desc: "Specially curated romantic setups with rose petals, ambient lanterns, mood music & customized date menus.",
      icon: "Flame"
    },
    {
      id: "celebration",
      title: "Birthday & Party Venue",
      desc: "Vadodara's favorite celebration hub! Balloon decors, cake cutting tables, music setup & banquet capacity.",
      icon: "PartyPopper"
    },
    {
      id: "banquet",
      title: "Private Dining & Banquet",
      desc: "Host family reunions, corporate dinners, kitty parties and engagements with tailored buffet menus.",
      icon: "Users"
    },
    {
      id: "allyoucaneat",
      title: "All-You-Can-Eat & Happy Hour",
      desc: "Wholesome unlimited multi-course dining deals and refreshing cafe specials at pocket-friendly rates.",
      icon: "UtensilsCrossed"
    },
    {
      id: "pureveg",
      title: "100% Pure Vegetarian & Jain",
      desc: "Fresh, hygienic ingredients with extensive Jain options available on request by our master chefs.",
      icon: "Leaf"
    }
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", name: "Full Menu", icon: "Utensils" },
  { id: "highlights", name: "House Highlights", icon: "Flame" },
  { id: "starters", name: "Kebabs & Starters", icon: "UtensilsCrossed" },
  { id: "main-course", name: "North Indian Curries", icon: "Soup" },
  { id: "tandoor", name: "Breads & Rice", icon: "Wheat" },
  { id: "chinese", name: "Indo-Chinese", icon: "Wok" },
  { id: "cafe", name: "Cafe & Beverages", icon: "Coffee" },
  { id: "desserts", name: "Desserts & Ice Cream", icon: "IceCream" }
];

export const MENU_ITEMS = [
  // Highlights from user prompt
  {
    id: "m1",
    name: "Paneer Tikka Masala",
    category: "main-course",
    price: 260,
    rating: 4.8,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: true,
    isHighlight: true,
    spicyLevel: 2,
    description: "Char-grilled cottage cheese cubes simmered in rich spiced tomato & cashew gravy with smoky rooftop tandoor aroma.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m2",
    name: "Veg Hara Bhara Kebab",
    category: "starters",
    price: 190,
    rating: 4.7,
    isVeg: true,
    isJainAvailable: false,
    isChefSpecial: true,
    isHighlight: true,
    spicyLevel: 1,
    description: "Pan-fried spinach, green pea and spiced potato patties with crunchy cashew nuts served with tangy mint chutney.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m3",
    name: "Crispy Veg Delight",
    category: "starters",
    price: 210,
    rating: 4.6,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: false,
    isHighlight: true,
    spicyLevel: 2,
    description: "Battered and wok-tossed farm garden vegetables in sweet-spicy garlic sauce with sesame garnish.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m4",
    name: "Rich Cold Coffee with Ice Cream",
    category: "cafe",
    price: 140,
    rating: 4.9,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: true,
    isHighlight: true,
    spicyLevel: 0,
    description: "Signature rooftop thick blended espresso brew topped with a generous scoop of vanilla ice cream and chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m5",
    name: "Hot Sizzling Brownie with Venila Icecream",
    category: "desserts",
    price: 180,
    rating: 4.9,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: true,
    isHighlight: true,
    spicyLevel: 0,
    description: "Warm Belgian chocolate walnut brownie served on a smoking cast iron sizzler with vanilla ice cream and hot chocolate fudge.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m6",
    name: "Chef's Special Veg Manchow Soup",
    category: "starters",
    price: 130,
    rating: 4.5,
    isVeg: true,
    isJainAvailable: false,
    isChefSpecial: false,
    isHighlight: true,
    spicyLevel: 2,
    description: "Zesty Indo-Chinese soup loaded with chopped vegetables, fresh coriander, ginger notes and crispy noodles topping.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m7",
    name: "Fresh Garden Green Salad",
    category: "starters",
    price: 90,
    rating: 4.3,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: false,
    isHighlight: true,
    spicyLevel: 0,
    description: "Crisp slices of English cucumber, juicy vine tomatoes, carrots and crunchy onions garnished with green chili and lemon wedges.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
  },
  // Other signature favorites
  {
    id: "m8",
    name: "Dal Makhani Sky Special",
    category: "main-course",
    price: 240,
    rating: 4.8,
    isVeg: true,
    isJainAvailable: false,
    isChefSpecial: true,
    isHighlight: false,
    spicyLevel: 1,
    description: "Slow-simmered whole black lentils cooked overnight with cream, butter and mild aromatic spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m9",
    name: "Kaju Butter Masala",
    category: "main-course",
    price: 280,
    rating: 4.7,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: true,
    isHighlight: false,
    spicyLevel: 1,
    description: "Roasted premium cashews in a velvety, buttery tomato-cream sauce subtly sweetened and delicately spiced.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m10",
    name: "Paneer Butter Masala",
    category: "main-course",
    price: 250,
    rating: 4.7,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: false,
    isHighlight: false,
    spicyLevel: 1,
    description: "Melt-in-mouth cottage cheese simmered in smooth satin tomato gravy enriched with fresh cream and butter.",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m11",
    name: "Cheese Garlic Butter Naan",
    category: "tandoor",
    price: 90,
    rating: 4.9,
    isVeg: true,
    isJainAvailable: false,
    isChefSpecial: true,
    isHighlight: false,
    spicyLevel: 0,
    description: "Fluffy leavened tandoor flatbread stuffed with mozzarella cheese, roasted garlic and fresh cilantro butter.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m12",
    name: "Hyderabadi Veg Dum Biryani with Raita",
    category: "tandoor",
    price: 250,
    rating: 4.7,
    isVeg: true,
    isJainAvailable: false,
    isChefSpecial: true,
    isHighlight: false,
    spicyLevel: 2,
    description: "Aromatic basmati rice layered with garden vegetables, saffron milk, fried onions, served with cooling boondi raita.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m13",
    name: "Paneer Chilli Dry (Indo-Chinese)",
    category: "chinese",
    price: 230,
    rating: 4.6,
    isVeg: true,
    isJainAvailable: false,
    isChefSpecial: false,
    isHighlight: false,
    spicyLevel: 3,
    description: "Crispy paneer cubes tossed with bell peppers, spring onions, green chillies and dark soya glaze.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m14",
    name: "Veg Hakka Noodles",
    category: "chinese",
    price: 180,
    rating: 4.5,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: false,
    isHighlight: false,
    spicyLevel: 1,
    description: "Traditional wok-tossed noodles with shredded cabbage, carrots, bell peppers, light soya and white pepper.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m15",
    name: "Blue Lagoon Rooftop Mocktail",
    category: "cafe",
    price: 130,
    rating: 4.6,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: false,
    isHighlight: false,
    spicyLevel: 0,
    description: "Electric blue curacao flavor topped with sparkling lemonade, mint leaves and crushed ice in a tall hurricane glass.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m16",
    name: "Royal All-You-Can-Eat Buffet (Per Person)",
    category: "highlights",
    price: 349,
    rating: 4.9,
    isVeg: true,
    isJainAvailable: true,
    isChefSpecial: true,
    isHighlight: true,
    spicyLevel: 1,
    description: "Unlimited 3 starters, 2 North Indian paneer/veg gravies, dal makhani, jeera rice, assorted tandoori naans, dessert and beverage.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80"
  }
];

export const REVIEWS_DATA = {
  rating: 4.3,
  totalReviews: 808,
  breakdown: [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 3 }
  ],
  aiSummary: "Guests consistently praise this restaurant for its beautiful decorations and great atmosphere, making it a particularly good choice for celebrations. They also highlight the attentive service, affordable pricing, pleasant rooftop setting, and delicious North Indian dishes.",
  featuredReviews: [
    {
      id: "r1",
      author: "Hetal Patel",
      rating: 5,
      date: "2 weeks ago",
      text: "Superb food at affordable price and good service and nature also... 👍 yummy food 👌 The rooftop view in the evening is just unmatched in Makarpura area!",
      source: "Google Reviews",
      highlight: "Superb food at affordable price"
    },
    {
      id: "r2",
      author: "Rahul Sharma",
      rating: 5,
      date: "1 month ago",
      text: "Nice place, Pleasent atmosphere, good food quality. We booked a candle-light dinner for our anniversary and the rooftop breeze and fairy lights made it unforgettable.",
      source: "Google Reviews",
      highlight: "Pleasant atmosphere, good food quality"
    },
    {
      id: "r3",
      author: "Dr. Sneha Desai",
      rating: 4,
      date: "3 weeks ago",
      text: "Celebrated my sister's birthday here on the 6th floor terrace. Great decor, Paneer Tikka Masala and Cold Coffee were exceptional. Polite staff!",
      source: "Google Reviews",
      highlight: "Great celebration party venue"
    },
    {
      id: "r4",
      author: "Amit Joshi",
      rating: 4,
      date: "2 months ago",
      text: "The menu had a decent variety of options, and the food was alright. Prices are very pocket-friendly at ₹200-400 per head compared to other fine-dines in Vadodara.",
      source: "Google Reviews",
      highlight: "Decent variety and great pricing"
    }
  ]
};

export const GALLERY_IMAGES = [
  {
    id: "g1",
    title: "Open-Air Sunset & Evening Sky Deck",
    category: "Rooftop View",
    tag: "Atmosphere",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "g2",
    title: "Candle-Light Table Setup for Couples",
    category: "Romantic",
    tag: "Candle Light",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "g3",
    title: "Night Fairy Lights & Open Canopy",
    category: "Rooftop View",
    tag: "Night Ambiance",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "g4",
    title: "Birthday Party & Banquet Celebration",
    category: "Celebrations",
    tag: "Party Venue",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "g5",
    title: "Sizzling Paneer Tikka & Tandoori Platter",
    category: "Food",
    tag: "North Indian",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "g6",
    title: "Cafe Brews & Signature Cold Coffee",
    category: "Beverages",
    tag: "Cafe Lounge",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80"
  }
];

export const CELEBRATION_PACKAGES = [
  {
    id: "candle-light",
    title: "Romantic Candle Light Dinner",
    subtitle: "Ideal for Anniversaries, Date Nights & Proposals",
    price: "₹1,499",
    unit: "per couple",
    badge: "Most Popular",
    features: [
      "Reserved prime corner open-air rooftop table",
      "Romantic rose petal table styling & ambient candle lanterns",
      "Welcome mocktails on arrival",
      "3-Course dinner (Soup/Starter + 2 Main Gravies + Naans + Dessert)",
      "Choice of Hot Sizzling Brownie or Vanilla Ice Cream",
      "Personalized romantic background acoustic music"
    ],
    ctaText: "Book Romantic Table"
  },
  {
    id: "birthday-bash",
    title: "Rooftop Birthday & Party Celebration",
    subtitle: "For 10 to 60+ Guests with Customized Decor",
    price: "₹399",
    unit: "per person",
    badge: "Party Hit",
    features: [
      "Dedicated party zone with backdrop balloon decoration",
      "Special cake cutting table setup with sparklers",
      "High-energy celebration music system access",
      "Unlimited multi-course buffet (Starters, Main, Breads, Rice, Dessert)",
      "Dedicated banquet serving captain",
      "Photography-ready illuminated photo-booth corner"
    ],
    ctaText: "Inquire for Birthday Party"
  },
  {
    id: "private-banquet",
    title: "Corporate & Family Banquet Hall",
    subtitle: "Private AC Dining + Open Terrace Access",
    price: "Custom",
    unit: "tailored package",
    badge: "Exclusive",
    features: [
      "Private enclosed banquet area combined with open sky lounge",
      "Customizable pure-vegetarian & Jain menus",
      "Projector / audio mic setup for business speeches",
      "Flexible seating arrangements (round table, theater or cluster)",
      "Dedicated valet & elevator directly to 6th floor"
    ],
    ctaText: "Contact Banquet Manager"
  }
];

export const TIME_SLOTS = [
  "12:30 PM (Lunch)",
  "01:30 PM (Lunch)",
  "06:30 PM (Sunset Hour)",
  "07:30 PM (Prime Dinner)",
  "08:30 PM (Candle Light)",
  "09:30 PM (Late Night Dining)",
  "10:15 PM (Last Order)"
];

