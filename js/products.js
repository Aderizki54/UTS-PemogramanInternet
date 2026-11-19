/**
 * VOLTWEAR - Premium Gym & Streetwear
 * Comprehensive Product Database & Store Engine
 */

const VOLTWEAR_PRODUCTS = [
  {
    id: "4185",
    sku: "VW-4185-BLK",
    name: "4185 'IMMORTAL' HEAVYWEIGHT OVERSIZED TEE",
    subtitle: "Heavyweight 320 GSM Acid Wash Pump Cover",
    category: "Oversized Tees",
    gender: "Men",
    price: 48.00,
    originalPrice: 64.00,
    discountPercent: 25,
    isNew: true,
    isBestSeller: true,
    isSale: true,
    rating: 4.9,
    reviewCount: 384,
    badge: "BEST SELLER",
    description: "Engineered for maximum drape and structural silhouette, the 4185 'Immortal' Tee is our signature pump cover built from custom-milled 320 GSM combed organic cotton. Treated with an artisanal acid-mineral wash for an authentic vintage hand-feel, it features dropped shoulders, elongated sleeves, and a reinforced 1.25-inch high-density ribbed collar that retains its shape workout after workout.",
    materialInfo: "100% Custom-Milled Heavyweight Combed Cotton (320 GSM). Pre-shrunk and silicone enzyme washed for supreme softness with zero post-wash shrinkage.",
    fit: "Signature Oversized Boxy Fit. Drop-shoulder cut with extended sleeve length and a relaxed drape across the chest and torso. True to size for an editorial oversized silhouette. Size down for a tailored athletic fit.",
    modelInfo: "Model is 6'1\" (185 cm), 198 lbs (90 kg), 44\" chest, wearing size Large.",
    features: [
      "320 GSM Ultra-Heavyweight Combed Cotton",
      "Artisanal Mineral Acid Wash for Unique Vintage Texture",
      "Reinforced 1.25\" Anti-Sag Collar Binding",
      "Ergonomic Drop-Shoulder Silhouette Engineered for Broad Shoulders",
      "High-Density Matte Silicone VOLT Signature Back Print",
      "Pre-Shrunk Fabric with Zero Shrinkage Guarantee"
    ],
    colors: [
      {
        name: "Washed Onyx",
        hex: "#1A1A1A",
        images: [
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Vintage Slate Gray",
        hex: "#4A4D52",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Off-White Chalk",
        hex: "#EDEDED",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Electric Volt Accent",
        hex: "#D9FF00",
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "S": 12,
      "M": 8,
      "L": 4, // low stock trigger
      "XL": 15,
      "XXL": 6
    },
    reviews: [
      {
        id: "rev-1",
        name: "Marcus Vance",
        rating: 5,
        date: "October 28, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "The greatest pump cover I've ever owned",
        content: "The fabric weight is unreal. At 320 GSM, it drapes heavily over the shoulders and chest without clinging to your midsection during heavy squats or deadlifts. Collar is sturdy and doesn't bacon after 8 washes. Absolutely unmatched quality.",
        sizePurchased: "XL",
        helpfulCount: 42
      },
      {
        id: "rev-2",
        name: "Brandon K.",
        rating: 5,
        date: "November 4, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "YoungLA quality competitor, if not better!",
        content: "I usually buy YoungLA and Gymshark, but VOLTWEAR's acid wash texture and drop shoulder cut blew me away. The neon volt details on the inner tag and subtle back branding make it look like a $120 luxury streetwear piece.",
        sizePurchased: "L",
        helpfulCount: 29
      },
      {
        id: "rev-3",
        name: "Darius Miller",
        rating: 5,
        date: "November 9, 2026",
        verified: true,
        fitFeedback: "Slightly oversized",
        title: "Unbelievable drape and boxy cut",
        content: "If you have broad shoulders or a developed back, this shirt makes your silhouette look massive. The sleeves hit right at the elbow bend. Ordered 3 more colors immediately.",
        sizePurchased: "XXL",
        helpfulCount: 18
      },
      {
        id: "rev-4",
        name: "Liam S.",
        rating: 4,
        date: "November 11, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Heavy and durable, perfect for winter workouts",
        content: "Very thick material. Might be too warm for outdoor summer sessions, but as an indoor gym pump cover or streetwear layer it is absolute perfection.",
        sizePurchased: "M",
        helpfulCount: 9
      }
    ]
  },
  {
    id: "4186",
    sku: "VW-4186-HOD",
    name: "4186 'APEX' FRENCH TERRY OVERSIZED HOODIE",
    subtitle: "500 GSM Ultra-Heavyweight Drop-Shoulder Hoodie",
    category: "Hoodies & Outerwear",
    gender: "Men",
    price: 88.00,
    originalPrice: 110.00,
    discountPercent: 20,
    isNew: true,
    isBestSeller: true,
    isSale: false,
    rating: 5.0,
    reviewCount: 247,
    badge: "NEW DROP",
    description: "Constructed with ultra-dense 500 GSM diagonal French terry cotton, the Apex Hoodie is built like iron armor. Features an oversized double-layered hood that stays upright without drawstrings, deep kangaroo pocket with hidden zippered phone stash, and articulated arm seams for unrestricted range of motion.",
    materialInfo: "100% Heavyweight French Terry Cotton (500 GSM). Raw loopback interior for thermal breathability.",
    fit: "Extreme Oversized Cut. Dropped shoulders, boxy torso with a wide ribbed hem band that stays in place.",
    modelInfo: "Model is 6'2\" (188 cm), 205 lbs (93 kg), wearing size XL.",
    features: [
      "500 GSM Custom Diagonal Loopback French Terry",
      "Double-Layer Crossover Hood (No drawstrings)",
      "Concealed YKK Zip Phone Pocket Inside Kangaroo Pouch",
      "Heavyweight 2x2 Ribbed Cuffs & Waistband",
      "Tonal 3D Rubberized VOLT Crest at Center Chest"
    ],
    colors: [
      {
        name: "Matte Black",
        hex: "#121212",
        images: [
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Smokey Carbon",
        hex: "#333538",
        images: [
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 5, "M": 14, "L": 19, "XL": 7, "XXL": 3 },
    reviews: [
      {
        id: "rev-201",
        name: "Kaleb Sterling",
        rating: 5,
        date: "November 2, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Heaviest hoodie I own, pure luxury",
        content: "You can feel the 500 GSM immediately. The hood has incredible structure and doesn't flop over. Perfect for chilly morning leg days.",
        sizePurchased: "XL",
        helpfulCount: 31
      }
    ]
  },
  {
    id: "4187",
    sku: "VW-4187-CRG",
    name: "4187 'TACTICAL' HEAVYWEIGHT CARGO JOGGERS",
    subtitle: "Ripstop Cotton Stretch Combat Fit with Quick-Draw Utility",
    category: "Bottoms & Joggers",
    gender: "Men",
    price: 76.00,
    originalPrice: 95.00,
    discountPercent: 20,
    isNew: false,
    isBestSeller: true,
    isSale: false,
    rating: 4.8,
    reviewCount: 312,
    badge: "POPULAR",
    description: "Engineered for intense training sessions and streetwear aesthetics. Crafted from heavyweight stretch ripstop with deep bellowed cargo pockets, custom matte D-ring hardware, articulated knee darts for squat mobility, and ankle cinch cords for an adaptable tapered fit.",
    materialInfo: "97% High-Tensile Ripstop Cotton, 3% Spandex 4-Way Mobility Weave. Reinforced gusseted crotch.",
    fit: "Athletic Tapered Fit. Roomy through quads and glutes with sharp taper to ankle cuff.",
    modelInfo: "Model is 6'0\" (183 cm), 190 lbs (86 kg), 32\" waist, wearing size Medium.",
    features: [
      "Reinforced Tactical Ripstop Cotton with 4-Way Stretch",
      "6 Secure Pockets with Matte Weatherproof Zippers",
      "Articulated Ergonomic Knee Panels for Full Squat Depth",
      "Heavy-Duty Elastic Waistband with Metal Tipped Drawcords",
      "Adjustable Elastic Ankle Bungee Cinch System"
    ],
    colors: [
      {
        name: "Tactical Stealth Black",
        hex: "#151515",
        images: [
          "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Military Olive Green",
        hex: "#3D4438",
        images: [
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 10, "M": 6, "L": 14, "XL": 11, "XXL": 8 },
    reviews: [
      {
        id: "rev-301",
        name: "Tyler Jenkins",
        rating: 5,
        date: "October 19, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Best gym pants ever designed. Room for quads!",
        content: "If you have muscular legs from squats, normal streetwear pants never fit. These give you massive quad room and taper cleanly at the ankles. Absolutely insane build quality.",
        sizePurchased: "L",
        helpfulCount: 54
      }
    ]
  },
  {
    id: "4188",
    sku: "VW-4188-SHT",
    name: "4188 'QUAD-FLEX' 5-INCH INSEAM ATHLETIC SHORTS",
    subtitle: "Built for Leg Day with Built-in Compression Liner & Towel Loop",
    category: "Shorts",
    gender: "Men",
    price: 44.00,
    originalPrice: 55.00,
    discountPercent: 20,
    isNew: true,
    isBestSeller: true,
    isSale: false,
    rating: 4.9,
    reviewCount: 198,
    badge: "MUST HAVE",
    description: "The definitive 5-inch gym shorts engineered specifically to highlight quadricep development. Features a buttery compression liner with phone pocket, durable 4-way mechanical stretch shell, laser-cut ventilation ports, and rear waistband towel loop for hardcore sessions.",
    materialInfo: "Shell: 88% Ultra-Durable Poly, 12% Spandex. Liner: 80% Nylon, 20% Elastane anti-chafing compression.",
    fit: "5\" Inseam Athletic Fit. Above-knee aesthetic cut with side split hems for maximum mobility.",
    modelInfo: "Model is 5'11\" (180 cm), 195 lbs (88 kg), 32\" waist, wearing size Medium.",
    features: [
      "5\" Aesthetic Inseam to Showcase Quad Teardrops",
      "Zero-Chafe Compression Under-Liner with Bounce-Free Phone Pocket",
      "Laser-Cut Thermal Micro-Perforations at Back Yoke",
      "Shirt/Towel Utility Loop on Rear Waistband",
      "Deep Zippered Side Pockets with Water-Resistant Coating"
    ],
    colors: [
      {
        name: "Blackout",
        hex: "#101010",
        images: [
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Electric Lime",
        hex: "#D9FF00",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 15, "M": 20, "L": 8, "XL": 14, "XXL": 5 },
    reviews: [
      {
        id: "rev-401",
        name: "Alex Thorne",
        rating: 5,
        date: "November 5, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "The 5-inch length is elite",
        content: "Leg day staples right here. Phone stays locked in place in the liner pocket while squatting. Will order every colorway.",
        sizePurchased: "M",
        helpfulCount: 27
      }
    ]
  },
  {
    id: "4189",
    sku: "VW-4189-CMP",
    name: "4189 'TITAN' SEAMLESS MUSCLE COMPRESSION TEE",
    subtitle: "High-Compression Second-Skin Fit with Targeted Rib Contouring",
    category: "Compression & Tanks",
    gender: "Men",
    price: 42.00,
    originalPrice: 52.00,
    discountPercent: 19,
    isNew: true,
    isBestSeller: false,
    isSale: false,
    rating: 4.9,
    reviewCount: 165,
    badge: "PERFORMANCE",
    description: "Designed to sculpt and support your upper body through maximum muscle containment and thermo-regulation. Circular knit seamless technology eliminates chafing, while variable compression zones support the chest, lats, and shoulders during PR lifts.",
    materialInfo: "84% Ultra-Fine Polyamide, 16% Elastane. Anti-odor Silver-Ion treatment.",
    fit: "Skin-Tight Compression Fit. Hugs chest, biceps, and traps tightly for optimal vascularity and pump visibility.",
    modelInfo: "Model is 6'1\" (185 cm), 200 lbs (91 kg), wearing size Large.",
    features: [
      "Circular Knit 3D Ergonomic Seamless Technology",
      "Targeted Lat and Pec Ribbed Stabilization Zones",
      "Advanced Silver-Ion Antimicrobial Moisture Transport",
      "Raw Seamless Sleeve Hems for Natural Bicep Wrap",
      "Subtle Reflective Heat-Transfer Volt Logo"
    ],
    colors: [
      {
        name: "Midnight Onyx",
        hex: "#0F0F11",
        images: [
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Glacier White",
        hex: "#F2F4F7",
        images: [
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 8, "M": 12, "L": 15, "XL": 9, "XXL": 4 },
    reviews: [
      {
        id: "rev-501",
        name: "Christian D.",
        rating: 5,
        date: "October 14, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Pumps look insane in this",
        content: "Holds everything tight without restricting breathing. The material feels like a second skin. 10/10.",
        sizePurchased: "L",
        helpfulCount: 22
      }
    ]
  },
  {
    id: "4190",
    sku: "VW-4190-VNT",
    name: "4190 'IRON LEGACY' ACID WASH GRAPHIC TEE",
    subtitle: "Vintage Distressed Aesthetic with Bold Back Artwork",
    category: "Oversized Tees",
    gender: "Men",
    price: 52.00,
    originalPrice: 65.00,
    discountPercent: 20,
    isNew: false,
    isBestSeller: true,
    isSale: false,
    rating: 4.9,
    reviewCount: 420,
    badge: "HOT SELLER",
    description: "An homage to classic bodybuilding culture reimagined for modern streetwear. Custom mineral wash brings out high-contrast highlights across the seams. Adorned with our hand-illustrated 'Iron Legacy' eagle insignia cracked print that softens with age.",
    materialInfo: "100% Ring-Spun Cotton (300 GSM). Hand-applied vintage mineral wash finish.",
    fit: "Oversized Boxy Silhouette. Elongated sleeves, heavy drop-shoulder drape.",
    modelInfo: "Model is 6'2\" (188 cm), 210 lbs (95 kg), wearing size XL.",
    features: [
      "Custom Distressed Mineral Acid Wash Effect",
      "Cracked Vintage-Effect Screenprint on Reverse",
      "Reinforced Double-Stitched Seams & Hem",
      "Heavyweight 300 GSM Fabric with Luxurious Soft Touch"
    ],
    colors: [
      {
        name: "Vintage Charcoal",
        hex: "#28292C",
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Faded Bone",
        hex: "#E5E2DC",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 10, "M": 14, "L": 18, "XL": 22, "XXL": 9 },
    reviews: [
      {
        id: "rev-601",
        name: "Zachary Ryan",
        rating: 5,
        date: "November 1, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "The print and wash are perfection",
        content: "Everyone at Gold's Gym asked where I got this. It feels like a $140 vintage band tee but fits like a modern oversized streetwear pump cover.",
        sizePurchased: "XL",
        helpfulCount: 48
      }
    ]
  },
  {
    id: "4191",
    sku: "VW-4191-WMS",
    name: "4191 'AURA' SCULPT HIGH-WAISTED SEAMLESS LEGGINGS",
    subtitle: "High-Compression Glute-Contouring Fabric with Zero Front Seam",
    category: "Women",
    gender: "Women",
    price: 58.00,
    originalPrice: 72.00,
    discountPercent: 19,
    isNew: true,
    isBestSeller: true,
    isSale: false,
    rating: 4.9,
    reviewCount: 289,
    badge: "TRENDING",
    description: "Designed to sculpt, shape, and support every curve. Our proprietary Aura-Compression fabric provides 100% squat-proof opacity, a seamless waistband that never rolls down during high-intensity lifts, and subtle glute-lifting contour shading.",
    materialInfo: "75% Micro-Nylon, 25% Spandex High-Gauge Double Weave. Brushed cloud-soft hand feel.",
    fit: "Form-Fitting High-Waist Fit. Ankle length with graduated compression from ankle to core.",
    modelInfo: "Model is 5'8\" (173 cm), 135 lbs (61 kg), 26\" waist, wearing size Small.",
    features: [
      "100% Fully Squat-Proof High-Gauge Weave",
      "Zero Front Seam Construction for Maximum Comfort",
      "Anti-Slip Ribbed Double-Fold High Waistband",
      "Subtle 3D Structural Glute Contour Weave",
      "Moisture-Wicking & Rapid Heat Dispersion"
    ],
    colors: [
      {
        name: "Pure Onyx",
        hex: "#101012",
        images: [
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Electric Volt Trim",
        hex: "#D9FF00",
        images: [
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: { "XS": 6, "S": 18, "M": 24, "L": 10, "XL": 5 },
    reviews: [
      {
        id: "rev-701",
        name: "Elena Rostova",
        rating: 5,
        date: "November 8, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Actually squat proof! No roll down waistband",
        content: "Passed the deep squat test under bright gym lights with flying colors. Waistband stays locked in place without digging into ribs. Best leggings on the market.",
        sizePurchased: "S",
        helpfulCount: 39
      }
    ]
  },
  {
    id: "4192",
    sku: "VW-4192-BRA",
    name: "4192 'KINETIC' HIGH-SUPPORT RIBBED SPORTS BRA",
    subtitle: "Racerback Design with Removable Pads & Under-Bust Compression",
    category: "Women",
    gender: "Women",
    price: 38.00,
    originalPrice: 48.00,
    discountPercent: 20,
    isNew: true,
    isBestSeller: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 142,
    badge: "ESSENTIAL",
    description: "Built for heavy lifting, plyometrics, and high-impact training. Features wide ergonomic shoulder straps that distribute pressure, a supportive ribbed under-bust band, and removable breathable contour cups.",
    materialInfo: "78% Nylon, 22% Spandex. Antimicrobial quick-dry finish.",
    fit: "Medium to High Impact Support. Snug performance fit.",
    modelInfo: "Model is 5'7\" (170 cm), 34C, wearing size Medium.",
    features: [
      "Ergonomic Wide Racerback for Upper Back Freedom",
      "Sturdy 2-Inch Ribbed Compression Under-Bust Band",
      "Removable Multi-Layer Perforated Breathable Cups",
      "Flatlock Anti-Chafing Seams"
    ],
    colors: [
      {
        name: "Onyx Black",
        hex: "#141414",
        images: [
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: { "XS": 8, "S": 15, "M": 20, "L": 12, "XL": 4 },
    reviews: [
      {
        id: "rev-801",
        name: "Chloe M.",
        rating: 5,
        date: "October 30, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Incredible support without hurting shoulders",
        content: "Holds everything tight through box jumps and bench press. Matches the leggings perfectly.",
        sizePurchased: "M",
        helpfulCount: 16
      }
    ]
  },
  {
    id: "4193",
    sku: "VW-4193-TNK",
    name: "4193 'REAPER' DROP-ARMHOLE MUSCLE STRINGER",
    subtitle: "Deep Cut Drop-Arm Athletic Tank for Back & Shoulder Exposure",
    category: "Compression & Tanks",
    gender: "Men",
    price: 36.00,
    originalPrice: 45.00,
    discountPercent: 20,
    isNew: false,
    isBestSeller: true,
    isSale: false,
    rating: 4.8,
    reviewCount: 230,
    badge: "GYM CLASSIC",
    description: "Engineered for back and shoulder days. Featuring deeply scooped drop armholes that allow your lats and rear delts to move without restriction. Raw hem finish and reinforced chest seam.",
    materialInfo: "95% Combed Ringspun Cotton, 5% Elastane for slight stretch retention.",
    fit: "Relaxed Muscle Cut. Deep arm drop down to mid-ribcage.",
    modelInfo: "Model is 6'1\" (185 cm), 205 lbs (93 kg), wearing size Large.",
    features: [
      "Deep Scoop Drop Armholes for Maximum Lat Mobility",
      "Curved Extended Droptail Hem for Back Coverage",
      "Reinforced Collar Stitching",
      "Soft Cotton-Elastane Blend that Breathes"
    ],
    colors: [
      {
        name: "Charcoal Heather",
        hex: "#2F3136",
        images: [
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Pitch Black",
        hex: "#101010",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 12, "M": 19, "L": 14, "XL": 8, "XXL": 6 },
    reviews: [
      {
        id: "rev-901",
        name: "Derek H.",
        rating: 5,
        date: "October 22, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Perfect lat exposure",
        content: "Drop armholes are cut to the exact right depth. Doesn't bag out at the bottom. Highly recommended.",
        sizePurchased: "L",
        helpfulCount: 20
      }
    ]
  },
  {
    id: "4194",
    sku: "VW-4194-BMX",
    name: "4194 'STEALTH' OVERSIZED BOMBER JACKET",
    subtitle: "Insulated Matte Twill Water-Resistant Outerwear",
    category: "Hoodies & Outerwear",
    gender: "Men",
    price: 118.00,
    originalPrice: 145.00,
    discountPercent: 18,
    isNew: true,
    isBestSeller: false,
    isSale: false,
    rating: 4.9,
    reviewCount: 94,
    badge: "LIMITED DROP",
    description: "The ultimate cold-weather streetwear pump cover. Built with heavy matte-finish flight nylon, high-grade insulation, utility arm pocket with branded grosgrain pull, and custom gunmetal two-way zipper.",
    materialInfo: "Shell: 100% High-Density Matte Nylon. Lining: Quilted Satin Polyester with 120 GSM thermal fill.",
    fit: "Oversized Relaxed Bomber Fit. Generously cut to comfortably fit over thick hoodies.",
    modelInfo: "Model is 6'2\" (188 cm), 205 lbs (93 kg), wearing size Large.",
    features: [
      "Weather-Resistant Matte Technical Flight Twill",
      "Two-Way Heavy-Duty Matte Gunmetal YKK Zippers",
      "Quilted Thermal Lining for Optimum Warmth Retention",
      "Arm Utility Tactical Pocket with Volt Zip Puller"
    ],
    colors: [
      {
        name: "Stealth Black",
        hex: "#131315",
        images: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 4, "M": 7, "L": 11, "XL": 5, "XXL": 2 },
    reviews: [
      {
        id: "rev-1001",
        name: "Jaxson V.",
        rating: 5,
        date: "November 7, 2026",
        verified: true,
        fitFeedback: "Runs slightly large",
        title: "Feels like high-end designer streetwear",
        content: "The hardware is heavy and satisfying. Fits over my thickest hoodies with room to spare. Unbelievable piece.",
        sizePurchased: "L",
        helpfulCount: 15
      }
    ]
  },
  {
    id: "4195",
    sku: "VW-4195-BLT",
    name: "4195 'TITANIUM' 10MM LEVER LIFTING BELT",
    subtitle: "Heavyweight Genuine Suede Leather with Quick-Release Matte Buckle",
    category: "Accessories",
    gender: "Unisex",
    price: 110.00,
    originalPrice: 135.00,
    discountPercent: 18,
    isNew: false,
    isBestSeller: true,
    isSale: false,
    rating: 5.0,
    reviewCount: 340,
    badge: "PRO GEAR",
    description: "Crafted for championship lifts and heavy compounds. 10mm uniform thickness premium sole leather wrapped in rich black non-slip suede. Features our indestructible aerospace-grade alloy quick-release lever mechanism.",
    materialInfo: "Genuine 10mm Multi-Layer Top Grain Leather core, bonded with industrial nylon double-stitching.",
    fit: "Universal Powerlifting Fit (4-inch width). Measure around your navel, not your pant waist.",
    modelInfo: "Tested to 1,000+ lbs loads by competitive powerlifters.",
    features: [
      "10mm IPF-Spec Uniform Thickness for Maximum Intra-Abdominal Support",
      "Matte Black Quick-Release Lever with Micro-Adjustable Screws",
      "Non-Slip Black Suede Interior & Exterior Linings",
      "Laser-Engraved Volt Lightning Insignia on Rear Spine"
    ],
    colors: [
      {
        name: "Onyx Black Suede",
        hex: "#1A1A1A",
        images: [
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { "S": 10, "M": 22, "L": 16, "XL": 8 },
    reviews: [
      {
        id: "rev-1101",
        name: "Dmitri K.",
        rating: 5,
        date: "October 15, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Snaps locked like a vault door",
        content: "Added 20 lbs to my squat first week using it. The lever mechanism is buttery smooth and zero wobble.",
        sizePurchased: "L",
        helpfulCount: 63
      }
    ]
  },
  {
    id: "4196",
    sku: "VW-4196-CRW",
    name: "4196 'PRODIGY' HEAVYWEIGHT OVERSIZED CREWNECK",
    subtitle: "450 GSM Drop-Shoulder Brushed Fleece Sweatshirt",
    category: "Hoodies & Outerwear",
    gender: "Men",
    price: 74.00,
    originalPrice: 90.00,
    discountPercent: 17,
    isNew: true,
    isBestSeller: false,
    isSale: false,
    rating: 4.9,
    reviewCount: 118,
    badge: "NEW DROP",
    description: "The minimalist luxury crewneck engineered for post-workout warmth and effortless street styling. Custom knit 450 GSM cotton fleece with ultra-dense brushed backing, relaxed ribbed neckline, and tonal tonal rubberized chest crest.",
    materialInfo: "100% Organic Heavyweight Cotton Fleece (450 GSM). Pre-washed for lifetime shrinkage resistance.",
    fit: "Oversized Boxy Athletic Cut. Relaxed shoulders and loose torso drape.",
    modelInfo: "Model is 6'1\" (185 cm), 195 lbs (88 kg), wearing size Large.",
    features: [
      "450 GSM Dense Organic Fleece with Ultra-Soft Brushed Interior",
      "Ergonomic Saddle Shoulders for Muscle Silhouette",
      "Durable 2.5\" High-Spandex Ribbed Cuffs and Hem",
      "Subtle Minimalist Tone-on-Tone Rubberized Volt Mark"
    ],
    colors: [
      {
        name: "Vintage Ash",
        hex: "#3E4044",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Chalk Off-White",
        hex: "#ECEAE4",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: { "S": 7, "M": 16, "L": 19, "XL": 10, "XXL": 4 },
    reviews: [
      {
        id: "rev-1201",
        name: "Nathaniel C.",
        rating: 5,
        date: "November 10, 2026",
        verified: true,
        fitFeedback: "True to size",
        title: "Insane quality. Fits like an $180 sweater",
        content: "Super soft interior fleece and the collar fits comfortably without choking your neck. A true staple piece.",
        sizePurchased: "L",
        helpfulCount: 14
      }
    ]
  }
];

// Helper Functions for Store Engine
function getProductById(id) {
  if (!id) return VOLTWEAR_PRODUCTS[0];
  const found = VOLTWEAR_PRODUCTS.find(p => p.id === String(id) || p.sku === String(id));
  return found || VOLTWEAR_PRODUCTS[0];
}

function getFeaturedProducts(limit = 4) {
  return VOLTWEAR_PRODUCTS.filter(p => p.isBestSeller || p.isNew).slice(0, limit);
}

function getNewArrivals(limit = 4) {
  return VOLTWEAR_PRODUCTS.filter(p => p.isNew).slice(0, limit);
}

function getBestSellers(limit = 4) {
  return VOLTWEAR_PRODUCTS.filter(p => p.isBestSeller).slice(0, limit);
}

function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  return VOLTWEAR_PRODUCTS
    .filter(p => p.id !== current.id && (p.category === current.category || p.gender === current.gender))
    .slice(0, limit);
}

function formatPrice(amount) {
  return '$' + Number(amount).toFixed(2);
}

