import { aloeveraandturmeric, alovera, contacthero, mint, neem, neemandalovera, neemandturmeric, tulsi, tulsiandmint, turmeric } from "../../assest/images/img";

const data = [
  // =========================
  // SINGLE INGREDIENT SOAPS
  // =========================

  {
    id: 1,
    slug: "neem",
    name: "Neem",

    price: 249,
    originalPrice: 299,

    category: "Single Ingredient",

    filterIngredients: ["Neem"],

    productType: "Herbal Soap",

    rating: 4.8,
    reviews: 142,

    image: neem,

    description:
      "Fresh neem soap with a clean herbal feel.",

    fullDescription:
      "Neem Grove is a simple herbal soap inspired by the fresh and earthy character of neem. It is designed for people who enjoy clean, natural skincare rituals and simple ingredient-focused products.",

    ingredients: [
      "Neem",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Neem",

    skinType: [
      "Oily",
      "Combination",
      "Normal"
    ],

    benefits: [
      "Purifying",
      "Refreshing",
      "Daily Cleansing"
    ],

    scent: "Fresh and herbal",
    texture: "Creamy lather",
    color: "Natural Green",
    idealFor: "Daily cleansing",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "neem",
      "herbal",
      "fresh"
    ],

    inStock: true,
    stock: 80,

    featured: true,
    bestseller: true,
    newArrival: false,

    date: "2026-09-06"


  },

  {
    id: 2,
    slug: "aloe-vera",
    name: "Aloe Vera",
    price: 249,
    originalPrice: 299,

    category: "Single Ingredient",

    filterIngredients: ["Aloe Vera"],

    productType: "Botanical Soap",

    rating: 4.7,
    reviews: 126,

    image: alovera,

    description:
      "Light aloe vera soap for a fresh, gentle cleanse.",

    fullDescription:
      "Aloe Morning is inspired by the fresh and calming character of aloe vera. This soap brings a light and refreshing feel to your everyday skincare routine and works beautifully as part of a simple self-care ritual.",

    ingredients: [
      "Aloe Vera",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Aloe Vera",

    skinType: [
      "Dry",
      "Sensitive",
      "Normal"
    ],

    benefits: [
      "Refreshing",
      "Soothing",
      "Gentle Cleansing"
    ],

    scent: "Fresh and clean",
    texture: "Smooth and soft",
    color: "Natural Green",
    idealFor: "Gentle daily care",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "aloe",
      "fresh",
      "gentle"
    ],

    inStock: true,
    stock: 95,

    featured: true,
    bestseller: false,
    newArrival: true,

    date: "2026-09-06"


  },

  {
    id: 3,
    slug: "tulsi",
    name: "Tulsi",
    price: 259,
    originalPrice: 319,

    category: "Single Ingredient",

    filterIngredients: ["Tulsi"],

    productType: "Herbal Soap",

    rating: 4.9,
    reviews: 161,

    image: tulsi,

    description:
      "Tulsi-inspired soap with a calm, herbal finish.",

    fullDescription:
      "Tulsi Calm brings the fresh and leafy character of tulsi into your everyday skincare ritual. It is designed for people who enjoy simple botanical ingredients and a clean, balanced bathing experience.",

    ingredients: [
      "Tulsi",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Tulsi",

    skinType: [
      "Normal",
      "Oily",
      "Combination"
    ],

    benefits: [
      "Refreshing",
      "Purifying",
      "Daily Care"
    ],

    scent: "Fresh and herbal",
    texture: "Smooth and creamy",
    color: "Natural Green",
    idealFor: "Daily herbal care",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "tulsi",
      "herbal",
      "calm"
    ],

    inStock: true,
    stock: 84,

    featured: false,
    bestseller: true,
    newArrival: false,

    date: "2026-09-06"

  },

  {
    id: 4,
    slug: "mint-fresh",
    name: "Mint Fresh",

    price: 239,
    originalPrice: 289,

    category: "Single Ingredient",

    filterIngredients: ["Mint"],

    productType: "Herbal Soap",

    rating: 4.6,
    reviews: 118,

    image: mint,

    description:
      "Cooling mint soap for a refreshing daily wash.",

    fullDescription:
      "Mint Fresh brings a clean and refreshing feeling to your everyday bathing ritual. Inspired by the crisp character of mint, this soap is perfect for people who enjoy a fresh and energizing skincare experience.",

    ingredients: [
      "Mint",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Mint",

    skinType: [
      "Oily",
      "Combination",
      "Normal"
    ],

    benefits: [
      "Refreshing",
      "Cooling Feel",
      "Daily Cleansing"
    ],

    scent: "Cool and fresh",
    texture: "Light creamy lather",
    color: "Natural Green",
    idealFor: "Refreshing daily care",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "mint",
      "fresh",
      "cool"
    ],

    inStock: true,
    stock: 76,

    featured: false,
    bestseller: false,
    newArrival: true,

    date: "2026-09-06"


  },

  {
    id: 5,
    slug: "golden-turmeric",
    name: "Golden Turmeric",
    price: 269,
    originalPrice: 329,

    category: "Single Ingredient",

    filterIngredients: ["Turmeric"],

    productType: "Botanical Soap",

    rating: 4.9,
    reviews: 174,

    image: turmeric,

    description:
      "Golden turmeric soap with a warm, earthy touch.",

    fullDescription:
      "Golden Turmeric brings warmth and a rich botanical character to your everyday skincare ritual. Inspired by traditional self-care practices, this bar has an earthy and comforting personality.",

    ingredients: [
      "Turmeric",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Turmeric",

    skinType: [
      "Normal",
      "Combination",
      "Dry"
    ],

    benefits: [
      "Brightening",
      "Refreshing",
      "Even Tone Care"
    ],

    scent: "Warm and earthy",
    texture: "Creamy and rich",
    color: "Golden Yellow",
    idealFor: "Traditional skincare rituals",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "turmeric",
      "golden",
      "warm"
    ],

    inStock: true,
    stock: 78,

    featured: true,
    bestseller: true,
    newArrival: false,

    date: "2026-09-06"


  },

  // =========================
  // MULTIPLE INGREDIENT SOAPS
  // =========================

  {
    id: 6,
    slug: "neem-and-aloe-vera",
    name: "Neem + Aloe Vera",
    price: 279,
    originalPrice: 349,

    category: "Multiple Ingredient",

    filterIngredients: [
      "Neem",
      "Aloe Vera"
    ],

    productType: "Mixed Ingredient Soap",

    rating: 4.9,
    reviews: 156,

    image: neemandalovera,

    description:
      "Balanced neem and aloe soap for everyday freshness.",

    fullDescription:
      "Neem & Aloe Balance brings together two popular botanical ingredients in one simple soap. Neem adds an earthy herbal character while aloe vera brings a fresh and light feel to your daily skincare routine.",

    ingredients: [
      "Neem",
      "Aloe Vera",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Neem + Aloe Vera",

    skinType: [
      "Oily",
      "Combination",
      "Normal"
    ],

    benefits: [
      "Purifying",
      "Refreshing",
      "Balanced Care"
    ],

    scent: "Fresh herbal",
    texture: "Smooth creamy lather",
    color: "Natural Green",
    idealFor: "Balanced daily care",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "neem",
      "aloe",
      "multiple-ingredient"
    ],

    inStock: true,
    stock: 68,

    featured: true,
    bestseller: true,
    newArrival: false,

    date: "2026-09-06"


  },

  {
    id: 7,
    slug: "neem-turmeric-ritual",
    name: "Neem + Turmeric",
    price: 289,
    originalPrice: 359,

    category: "Multiple Ingredient",

    filterIngredients: [
      "Neem",
      "Turmeric"
    ],

    productType: "Mixed Ingredient Soap",

    rating: 4.8,
    reviews: 148,

    image: neemandturmeric,

    description:
      "Neem and turmeric blend with a rich herbal feel.",

    fullDescription:
      "Neem & Turmeric Ritual combines the earthy character of neem with the warm golden personality of turmeric. The result is a botanical soap created for people who enjoy traditional ingredients and simple natural skincare rituals.",

    ingredients: [
      "Neem",
      "Turmeric",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Neem + Turmeric",

    skinType: [
      "Oily",
      "Combination",
      "Normal"
    ],

    benefits: [
      "Purifying",
      "Brightening",
      "Refreshing"
    ],

    scent: "Earthy and warm",
    texture: "Rich creamy lather",
    color: "Green and Golden",
    idealFor: "Traditional daily care",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "neem",
      "turmeric",
      "traditional"
    ],

    inStock: true,
    stock: 72,

    featured: false,
    bestseller: true,
    newArrival: false,

    date: "2026-09-06"

  },

  {
    id: 8,
    slug: "aloe-turmeric-glow",
    name: "Aloe Vera + Turmeric",

    price: 279,
    originalPrice: 349,

    category: "Multiple Ingredient",

    filterIngredients: [
      "Aloe Vera",
      "Turmeric"
    ],

    productType: "Mixed Ingredient Soap",

    rating: 4.8,
    reviews: 135,

    image: aloeveraandturmeric,

    description:
      "Aloe and turmeric soap with a bright, fresh finish.",

    fullDescription:
      "Aloe & Turmeric Glow brings together the fresh character of aloe vera and the warm, earthy feel of turmeric. This combination creates a balanced soap with a bright and refreshing botanical personality.",

    ingredients: [
      "Aloe Vera",
      "Turmeric",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Aloe Vera + Turmeric",

    skinType: [
      "Dry",
      "Normal",
      "Combination"
    ],

    benefits: [
      "Refreshing",
      "Brightening",
      "Gentle Care"
    ],

    scent: "Fresh and warm",
    texture: "Soft creamy lather",
    color: "Golden Green",
    idealFor: "Everyday skincare rituals",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "aloe",
      "turmeric",
      "glow"
    ],

    inStock: true,
    stock: 74,

    featured: true,
    bestseller: false,
    newArrival: true,

    date: "2026-09-06"

  },

  {
    id: 9,
    slug: "tulsi-mint-freshness",
    name: "Tulsi + Mint",

    price: 269,
    originalPrice: 329,

    category: "Multiple Ingredient",

    filterIngredients: [
      "Tulsi",
      "Mint"
    ],

    productType: "Mixed Ingredient Soap",

    rating: 4.7,
    reviews: 129,

    image: tulsiandmint,

    description:
      "Tulsi and mint soap with a crisp, herbal lift.",

    fullDescription:
      "Tulsi & Mint Freshness combines two fresh botanical ingredients for a clean and refreshing skincare ritual. The leafy character of tulsi works beautifully with the crisp freshness of mint.",

    ingredients: [
      "Tulsi",
      "Mint",
      "Natural Oils",
      "Plant-Based Ingredients"
    ],

    mainIngredient: "Tulsi + Mint",

    skinType: [
      "Oily",
      "Combination",
      "Normal"
    ],

    benefits: [
      "Refreshing",
      "Cooling Feel",
      "Purifying"
    ],

    scent: "Fresh herbal",
    texture: "Light creamy lather",
    color: "Natural Green",
    idealFor: "Fresh daily cleansing",
    weight: "100g",

    sizes: [
      "50g",
      "100g",
      "120g"
    ],

    tags: [
      "tulsi",
      "mint",
      "fresh"
    ],

    inStock: true,
    stock: 81,

    featured: false,
    bestseller: false,
    newArrival: true,

    date: "2026-09-06"

  }
];

export default data;
