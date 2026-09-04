const products = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    price: 899,
    originalPrice: 999,
    category: "Rice",
    rating: 4.8,
    reviews: 145,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg"
    ],
    description: "Long-grain aromatic premium basmati rice.",
    fullDescription:
      "Premium quality basmati rice cultivated in fertile agricultural lands. Known for its long grains, rich aroma, and delicious taste, making it ideal for biryani, pulao, and daily meals.",
    inStock: true,
    stock: 80,
    tags: ["rice", "basmati", "organic"],
    colors: ["white"],
    sizes: ["5kg", "10kg", "25kg"],
    specifications: {
      variety: "1121 Basmati",
      origin: "Uttar Pradesh, India",
      moisture: "12%",
      purity: "99%",
      shelf_life: "18 months"
    },
    date: "2025-01-20"
  },

  {
    id: 2,
    name: "Sharbati Wheat",
    price: 499,
    originalPrice: 599,
    category: "Wheat",
    rating: 4.7,
    reviews: 110,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg"
    ],
    description: "High-quality Sharbati wheat grains.",
    fullDescription:
      "Naturally grown Sharbati wheat with excellent protein content and soft texture. Perfect for making chapati, bread, and other wheat-based foods.",
    inStock: true,
    stock: 120,
    tags: ["wheat", "grain", "organic"],
    colors: ["golden"],
    sizes: ["5kg", "10kg", "25kg"],
    specifications: {
      variety: "Sharbati",
      protein: "12%",
      moisture: "11%",
      purity: "99%",
      origin: "Uttar Pradesh, India"
    },
    date: "2025-01-18"
  },

  {
    id: 3,
    name: "Yellow Maize",
    price: 349,
    originalPrice: 449,
    category: "Maize",
    rating: 4.6,
    reviews: 92,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg"
    ],
    description: "Fresh and naturally harvested yellow maize.",
    fullDescription:
      "Premium-grade yellow maize rich in carbohydrates and fiber. Suitable for food processing, poultry feed, and industrial applications.",
    inStock: true,
    stock: 95,
    tags: ["maize", "corn", "grain"],
    colors: ["yellow"],
    sizes: ["5kg", "10kg", "20kg"],
    specifications: {
      variety: "Hybrid Maize",
      purity: "98%",
      moisture: "13%",
      origin: "Uttar Pradesh, India",
      shelf_life: "12 months"
    },
    date: "2025-01-15"
  },

  {
    id: 4,
    name: "Kabuli Chickpeas",
    price: 699,
    originalPrice: 799,
    category: "Pulses",
    rating: 4.8,
    reviews: 125,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg"
    ],
    description: "Premium Kabuli chickpeas with rich nutrition.",
    fullDescription:
      "Carefully selected Kabuli chickpeas that are rich in protein, dietary fiber, and essential minerals. Ideal for curries, salads, and healthy meals.",
    inStock: true,
    stock: 75,
    tags: ["chickpeas", "pulse", "protein"],
    colors: ["cream"],
    sizes: ["2kg", "5kg", "10kg"],
    specifications: {
      protein: "20%",
      purity: "99%",
      moisture: "11%",
      origin: "Uttar Pradesh, India",
      shelf_life: "18 months"
    },
    date: "2025-01-12"
  },

  {
    id: 5,
    name: "Organic Green Gram (Moong)",
    price: 599,
    originalPrice: 699,
    category: "Pulses",
    rating: 4.9,
    reviews: 160,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg"
    ],
    description: "Organic green gram rich in protein and nutrients.",
    fullDescription:
      "Premium-quality Moong Dal harvested from trusted farms. Rich in protein, vitamins, and minerals, making it an excellent choice for healthy daily meals.",
    inStock: true,
    stock: 140,
    tags: ["moong", "pulse", "organic"],
    colors: ["green"],
    sizes: ["2kg", "5kg", "10kg"],
    specifications: {
      protein: "24%",
      purity: "99%",
      moisture: "10%",
      origin: "Uttar Pradesh, India",
      shelf_life: "18 months"
    },
    date: "2025-01-08"
  },

  {
    id: 6,
    name: "Black Gram (Urad Dal)",
    price: 649,
    originalPrice: 749,
    category: "Pulses",
    rating: 4.7,
    reviews: 102,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg"
    ],
    description: "Premium black gram for traditional Indian dishes.",
    fullDescription:
      "High-quality Urad Dal sourced directly from experienced farmers. Rich in protein and dietary fiber, perfect for preparing dal, dosa, idli batter, and other traditional recipes.",
    inStock: true,
    stock: 90,
    tags: ["urad", "pulse", "protein"],
    colors: ["black"],
    sizes: ["2kg", "5kg", "10kg"],
    specifications: {
      protein: "25%",
      purity: "99%",
      moisture: "10%",
      origin: "Uttar Pradesh, India",
      shelf_life: "18 months"
    },
    date: "2025-01-05"
  },

   {
    id: 7,
    name: "Black Chana (Kala Chana)",
    price: 649,
    originalPrice: 749,
    category: "Pulses",
    rating: 4.7,
    reviews: 102,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg"
    ],
    description: "Premium black gram for traditional Indian dishes.",
    fullDescription:
      "High-quality Urad Dal sourced directly from experienced farmers. Rich in protein and dietary fiber, perfect for preparing dal, dosa, idli batter, and other traditional recipes.",
    inStock: true,
    stock: 90,
    tags: ["urad", "pulse", "protein"],
    colors: ["black"],
    sizes: ["2kg", "5kg", "10kg"],
    specifications: {
      protein: "25%",
      purity: "99%",
      moisture: "10%",
      origin: "Uttar Pradesh, India",
      shelf_life: "18 months"
    },
    date: "2025-01-05"
  },

   {
    id: 8,
    name: "makkai",
    price: 649,
    originalPrice: 749,
    category: "Pulses",
    rating: 4.7,
    reviews: 102,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg"
    ],
    description: "Premium black gram for traditional Indian dishes.",
    fullDescription:
      "High-quality Urad Dal sourced directly from experienced farmers. Rich in protein and dietary fiber, perfect for preparing dal, dosa, idli batter, and other traditional recipes.",
    inStock: true,
    stock: 90,
    tags: ["urad", "pulse", "protein"],
    colors: ["black"],
    sizes: ["2kg", "5kg", "10kg"],
    specifications: {
      protein: "25%",
      purity: "99%",
      moisture: "10%",
      origin: "Uttar Pradesh, India",
      shelf_life: "18 months"
    },
    date: "2025-01-05"
  },

   {
    id: 9,
    name: "makhana",
    price: 649,
    originalPrice: 749,
    category: "Pulses",
    rating: 4.7,
    reviews: 102,
    image: "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
    images: [
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg"
    ],
    description: "Premium black gram for traditional Indian dishes.",
    fullDescription:
      "High-quality Urad Dal sourced directly from experienced farmers. Rich in protein and dietary fiber, perfect for preparing dal, dosa, idli batter, and other traditional recipes.",
    inStock: true,
    stock: 90,
    tags: ["urad", "pulse", "protein"],
    colors: ["black"],
    sizes: ["2kg", "5kg", "10kg"],
    specifications: {
      protein: "25%",
      purity: "99%",
      moisture: "10%",
      origin: "Uttar Pradesh, India",
      shelf_life: "18 months"
    },
    date: "2025-01-05"
  }
];

export default products;