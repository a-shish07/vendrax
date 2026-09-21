export interface Product {
  id: number
  name: string
  price: number
  image: string
  images: string[]
  category: string
  rating: number
  reviews: number
  tag?: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Fast Charging Type-C Cable',
    price: 199,
    image: '/products/1a-200kb.jpeg',
    images: [
      '/products/1a-200kb.jpeg',
      '/products/1b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Durable Type-C charging cable designed for fast and reliable everyday charging and data transfer. Its flexible construction helps resist bending and daily wear, while the compact design makes it easy to carry. Suitable for compatible smartphones, tablets, power banks, laptops and other Type-C enabled devices.',
  },

  {
    id: 2,
    name: '3-in-1 Charging Cable',
    price: 249,
    image: '/products/2a-200kb.jpeg',
    images: [
      '/products/2a-200kb.jpeg',
      '/products/2b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Convenient 3-in-1 charging cable designed to support multiple device connectors with a single cable. Ideal for home, office and travel use, it reduces cable clutter and makes charging easier. Its flexible construction and compact design provide reliable everyday performance for compatible smartphones, tablets and accessories.',
  },

  {
    id: 3,
    name: 'Mobile Stand',
    price: 149,
    image: '/products/3a-200kb.jpeg',
    images: [
      '/products/3a-200kb.jpeg',
      '/products/3b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Compact mobile stand that provides a stable viewing position for smartphones on desks, tables and countertops. Perfect for watching videos, attending calls, studying or browsing hands-free. Its lightweight and space-saving design makes it convenient for home, office and travel while keeping your device easily accessible.',
  },

  {
    id: 4,
    name: 'Mobile Ring Holder',
    price: 99,
    image: '/products/4a-200kb.jpeg',
    images: [
      '/products/4a-200kb.jpeg',
      '/products/4b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Practical mobile ring holder designed to provide a secure grip and improved handling of your smartphone. It can also support convenient hands-free viewing when positioned appropriately. Its compact design adds minimal bulk while helping reduce accidental drops during everyday smartphone use.',
  },

  {
    id: 5,
    name: 'Car Mobile Holder',
    price: 299,
    image: '/products/5a-200kb.jpeg',
    images: [
      '/products/5a-200kb.jpeg',
      '/products/5b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Convenient car mobile holder designed to keep your smartphone securely positioned while driving. It provides easier access for navigation and hands-free viewing without constantly holding your phone. The compact design helps maintain visibility while minimizing dashboard or windshield clutter during everyday journeys.',
  },

  {
    id: 6,
    name: 'Wireless Mouse',
    price: 399,
    image: '/products/6a-200kb.jpeg',
    images: [
      '/products/6a-200kb.jpeg',
      '/products/6b-200kb.jpeg',
    ],
    category: 'Computer Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Smooth and convenient wireless mouse designed for everyday computer and laptop use. Its compact form makes it comfortable to carry between home, office and travel setups. Enjoy a cleaner workspace without unnecessary cables, while responsive controls make browsing, working and general navigation simple and efficient.',
  },

  {
    id: 7,
    name: 'Mobile Cleaning Kit',
    price: 149,
    image: '/products/7a-200kb.jpeg',
    images: [
      '/products/7a-200kb.jpeg',
      '/products/7b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Complete mobile cleaning kit designed to help remove dust, fingerprints and everyday dirt from smartphones and electronic surfaces. Its compact format makes it easy to keep at home, work or while travelling. Suitable for regular maintenance of compatible screens, ports, keyboards and other delicate electronic surfaces.',
  },

  {
    id: 8,
    name: 'TWS Earbuds',
    price: 999,
    image: '/products/8a-200kb.jpeg',
    images: [
      '/products/8a-200kb.jpeg',
      '/products/8b-200kb.jpeg',
    ],
    category: 'Audio',
    rating: 0,
    reviews: 0,
    description:
      'Compact true wireless earbuds designed for convenient everyday listening. Enjoy a cable-free experience for music, videos, calls and entertainment. Their lightweight design makes them comfortable to carry throughout the day, while the portable charging case provides an easy way to store and recharge the earbuds.',
  },

  {
    id: 9,
    name: 'Bluetooth Speaker',
    price: 1499,
    image: '/products/9a-200kb.jpeg',
    images: [
      '/products/9a-200kb.jpeg',
      '/products/9b-200kb.jpeg',
    ],
    category: 'Audio',
    rating: 0,
    reviews: 0,
    description:
      'Portable Bluetooth speaker designed to bring convenient wireless audio to your home, workspace or outdoor activities. Its compact design makes transportation easy, while wireless connectivity allows quick pairing with compatible devices. Ideal for music, podcasts, casual entertainment and small gatherings without complicated setup.',
  },

  {
    id: 10,
    name: '20,000mAh Power Bank',
    price: 1499,
    image: '/products/10a-200kb.jpeg',
    images: [
      '/products/10a-200kb.jpeg',
      '/products/10b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'High-capacity 20,000mAh power bank designed to provide convenient backup power when you are away from a wall outlet. Ideal for travel, work and everyday use, it helps keep compatible smartphones and other USB-powered devices charged throughout the day. Compact construction makes it practical to carry.',
  },

  {
    id: 11,
    name: 'Digital Kitchen Weighing Scale',
    price: 249,
    image: '/products/11a-200kb.jpeg',
    images: [
      '/products/11a-200kb.jpeg',
      '/products/11b-200kb.jpeg',
    ],
    category: 'Kitchen',
    rating: 0,
    reviews: 0,
    description:
      'Accurate digital kitchen weighing scale designed for measuring ingredients conveniently during cooking and baking. Its compact size fits easily on kitchen countertops and can be stored when not required. Useful for portion measurement, recipes and everyday food preparation, helping you achieve more consistent quantities with ease.',
  },

  {
    id: 12,
    name: 'Vegetable Chopper',
    price: 299,
    image: '/products/12a-200kb.jpeg',
    images: [
      '/products/12a-200kb.jpeg',
      '/products/12b-200kb.jpeg',
    ],
    category: 'Kitchen',
    rating: 0,
    reviews: 0,
    description:
      'Convenient vegetable chopper designed to simplify everyday food preparation. Quickly chop vegetables, herbs and other suitable ingredients with less manual effort. Its compact design saves valuable kitchen space and makes preparation more convenient. Ideal for busy households looking for a practical addition to their kitchen tools.',
  },

  {
    id: 13,
    name: 'Kitchen Storage Container Set',
    price: 399,
    image: '/products/13a-200kb.jpeg',
    images: [
      '/products/13a-200kb.jpeg',
      '/products/13b-200kb.jpeg',
    ],
    category: 'Kitchen',
    rating: 0,
    reviews: 0,
    description:
      'Practical kitchen storage container set designed to keep dry ingredients, snacks and pantry essentials organized. The containers help reduce clutter while making commonly used items easier to store and access. Suitable for kitchens, cabinets and countertops, providing a neat and convenient storage solution for everyday use.',
  },

  {
    id: 14,
    name: 'Oil Sprayer',
    price: 249,
    image: '/products/14a-200kb.jpeg',
    images: [
      '/products/14a-200kb.jpeg',
      '/products/14b-200kb.jpeg',
    ],
    category: 'Kitchen',
    rating: 0,
    reviews: 0,
    description:
      'Convenient oil sprayer designed to help distribute cooking oil more evenly during food preparation. It can be useful for cooking, baking, grilling and air-frying applications. The compact design is easy to handle and store, helping you control oil usage while keeping kitchen routines simple and convenient.',
  },

  {
    id: 15,
    name: 'Lunch Box',
    price: 299,
    image: '/products/15a-200kb.jpeg',
    images: [
      '/products/15a-200kb.jpeg',
      '/products/15b-200kb.jpeg',
    ],
    category: 'Kitchen',
    rating: 0,
    reviews: 0,
    description:
      'Practical lunch box designed for carrying homemade meals to work, school or travel. Its convenient size makes everyday meal transportation simple while helping keep food organized. Easy to carry and suitable for daily use, it provides a useful solution for packing meals, snacks and other food items.',
  },

  {
    id: 16,
    name: 'Water Bottle',
    price: 299,
    image: '/products/16a-200kb.jpeg',
    images: [
      '/products/16a-200kb.jpeg',
      '/products/16b-200kb.jpeg',
    ],
    category: 'Kitchen',
    rating: 0,
    reviews: 0,
    description:
      'Reusable water bottle designed for convenient hydration at home, work, school, gym or while travelling. Its portable design makes it easy to carry throughout the day. Suitable for everyday use, it provides a practical alternative to disposable bottles while helping you keep drinking water within easy reach.',
  },

  {
    id: 17,
    name: 'LED Night Lamp',
    price: 249,
    image: '/products/17a-200kb.jpeg',
    images: [
      '/products/17a-200kb.jpeg',
      '/products/17b-200kb.jpeg',
    ],
    category: 'Home',
    rating: 0,
    reviews: 0,
    description:
      'Compact LED night lamp designed to provide soft illumination for bedrooms, hallways, bedside tables and other spaces. Its practical size makes it easy to position without taking up much room. Ideal for nighttime visibility, relaxing environments and everyday home use while maintaining a simple, modern appearance.',
  },

  {
    id: 18,
    name: 'Rechargeable Mini Fan',
    price: 399,
    image: '/products/18a-200kb.jpeg',
    images: [
      '/products/18a-200kb.jpeg',
      '/products/18b-200kb.jpeg',
    ],
    category: 'Home',
    rating: 0,
    reviews: 0,
    description:
      'Portable rechargeable mini fan designed to provide convenient airflow wherever you need it. Its compact construction makes it suitable for desks, bedside tables, study areas and travel. Rechargeable operation reduces dependence on continuous power connections, making it a practical cooling companion for everyday indoor use.',
  },

  {
    id: 19,
    name: 'Electric Chopper',
    price: 1499,
    image: '/products/19a-200kb.jpeg',
    images: [
      '/products/19a-200kb.jpeg',
      '/products/19b-200kb.jpeg',
    ],
    category: 'Kitchen Appliances',
    rating: 0,
    reviews: 0,
    description:
      'Electric chopper designed to make everyday food preparation faster and more convenient. Suitable for chopping compatible vegetables, herbs and other ingredients with reduced manual effort. Its compact design fits conveniently into most kitchens, making it a useful appliance for preparing ingredients for everyday meals and recipes.',
  },

  {
    id: 20,
    name: 'Air Fryer',
    price: 3999,
    image: '/products/20a-200kb.jpeg',
    images: [
      '/products/20a-200kb.jpeg',
      '/products/20b-200kb.jpeg',
    ],
    category: 'Kitchen Appliances',
    rating: 0,
    reviews: 0,
    description:
      'Modern air fryer designed for convenient cooking with reduced oil compared with traditional deep-frying methods. Ideal for preparing fries, snacks, vegetables and other suitable foods. Its practical countertop design makes everyday cooking easier while offering a convenient way to prepare crispy-style dishes at home.',
  },

  {
    id: 21,
    name: 'Premium Smartwatch',
    price: 5999,
    image: '/products/21a-200kb.jpeg',
    images: [
      '/products/21a-200kb.jpeg',
      '/products/21b-200kb.jpeg',
    ],
    category: 'Wearables',
    rating: 0,
    reviews: 0,
    description:
      'Premium smartwatch designed to combine everyday connectivity, activity tracking and convenient smart features on your wrist. Suitable for work, workouts and daily routines, it provides quick access to useful information without constantly reaching for your smartphone. Its modern design complements both casual and professional outfits.',
  },

  {
    id: 22,
    name: 'Premium TWS Earbuds',
    price: 5499,
    image: '/products/22a-200kb.jpeg',
    images: [
      '/products/22a-200kb.jpeg',
      '/products/22b-200kb.jpeg',
    ],
    category: 'Audio',
    rating: 0,
    reviews: 0,
    description:
      'Premium true wireless earbuds designed for an enhanced everyday audio experience. Enjoy convenient cable-free listening for music, calls, videos and entertainment. Their compact form and portable charging case make them suitable for commuting, work, workouts and travel while providing a clean and convenient wireless setup.',
  },

  {
    id: 23,
    name: 'ANC Wireless Headphones',
    price: 6999,
    image: '/products/23a-200kb.jpeg',
    images: [
      '/products/23a-200kb.jpeg',
      '/products/23b-200kb.jpeg',
    ],
    category: 'Audio',
    rating: 0,
    reviews: 0,
    description:
      'Wireless headphones with active noise cancellation designed to provide a more immersive listening environment. Ideal for music, calls, travel and focused work, they help reduce surrounding distractions when supported by the ANC system. The comfortable over-ear design makes them suitable for extended everyday listening sessions.',
  },

  {
    id: 24,
    name: 'Premium Bluetooth Speaker',
    price: 7999,
    image: '/products/24a-200kb.jpeg',
    images: [
      '/products/24a-200kb.jpeg',
      '/products/24b-200kb.jpeg',
    ],
    category: 'Audio',
    rating: 0,
    reviews: 0,
    description:
      'Premium Bluetooth speaker designed to deliver convenient wireless entertainment for homes, gatherings and outdoor occasions. Its modern design complements contemporary spaces while wireless connectivity allows easy pairing with compatible devices. Suitable for music, podcasts, movies and social events where convenient portable audio is needed.',
  },

  {
    id: 25,
    name: 'Soundbar',
    price: 8999,
    image: '/products/25a-200kb.jpeg',
    images: [
      '/products/25a-200kb.jpeg',
      '/products/25b-200kb.jpeg',
    ],
    category: 'Audio',
    rating: 0,
    reviews: 0,
    description:
      'Modern soundbar designed to enhance your television and home entertainment audio experience. Its streamlined form fits neatly beneath compatible TVs while reducing the need for bulky speaker setups. Ideal for movies, shows, music and gaming, it provides a convenient audio upgrade for everyday home entertainment.',
  },

  {
    id: 26,
    name: 'Smart Projector',
    price: 6999,
    image: '/products/26a-200kb.jpeg',
    images: [
      '/products/26a-200kb.jpeg',
      '/products/26b-200kb.jpeg',
    ],
    category: 'Home Entertainment',
    rating: 0,
    reviews: 0,
    description:
      'Compact smart projector designed to bring a larger viewing experience to your home. Suitable for movies, shows, presentations and casual entertainment, it provides a flexible alternative to traditional displays. Its portable design makes it convenient for bedrooms, living spaces, offices and other compatible environments.',
  },

  {
    id: 27,
    name: 'Portable Projector',
    price: 5999,
    image: '/products/27a-200kb.jpeg',
    images: [
      '/products/27a-200kb.jpeg',
      '/products/27b-200kb.jpeg',
    ],
    category: 'Home Entertainment',
    rating: 0,
    reviews: 0,
    description:
      'Portable projector designed for convenient large-screen entertainment and presentations. Its compact design makes it easy to move between rooms or carry when travelling. Suitable for compatible video sources, it can transform suitable walls or projection surfaces into a convenient viewing area for movies, presentations and casual entertainment.',
  },

  {
    id: 28,
    name: 'Premium Power Bank',
    price: 5499,
    image: '/products/28a-200kb.jpeg',
    images: [
      '/products/28a-200kb.jpeg',
      '/products/28b-200kb.jpeg',
    ],
    category: 'Mobile Accessories',
    rating: 0,
    reviews: 0,
    description:
      'Premium power bank designed to provide reliable portable charging for compatible smartphones, tablets and other devices. Its high-capacity construction makes it suitable for travel, work and extended days away from power outlets. A practical accessory for users who need convenient backup power throughout busy schedules.',
  },

  {
    id: 29,
    name: 'Gaming Headset',
    price: 5999,
    image: '/products/29a-200kb.jpeg',
    images: [
      '/products/29a-200kb.jpeg',
      '/products/29b-200kb.jpeg',
    ],
    category: 'Gaming',
    rating: 0,
    reviews: 0,
    description:
      'Gaming headset designed for immersive gaming, communication and entertainment. Its dedicated headset design provides convenient audio and voice communication during compatible gaming sessions. Suitable for PC and compatible gaming platforms, it can also be used for movies, music and online calls when supported by the connected device.',
  },

  {
    id: 30,
    name: 'Mechanical Gaming Keyboard',
    price: 5999,
    image: '/products/30a-200kb.jpeg',
    images: [
      '/products/30a-200kb.jpeg',
      '/products/30b-200kb.jpeg',
    ],
    category: 'Gaming',
    rating: 0,
    reviews: 0,
    description:
      'Mechanical gaming keyboard designed for responsive typing and gaming performance. Its mechanical key design provides a distinct tactile experience suitable for gaming, programming and everyday productivity. Built for users who prefer dedicated desktop controls, it adds a performance-focused and modern touch to gaming and workstation setups.',
  },

  {
    id: 31,
    name: 'Premium Smartphone',
    price: 14999,
    image: '/products/31a-200kb.jpeg',
    images: [
      '/products/31a-200kb.jpeg',
      '/products/31b-200kb.jpeg',
    ],
    category: 'Smartphones',
    rating: 0,
    reviews: 0,
    description:
      'Premium smartphone designed for everyday communication, entertainment, photography and productivity. Its modern form factor provides convenient access to apps, media and essential mobile features. Suitable for users seeking a versatile device for work and personal use, with a balanced combination of performance, portability and everyday functionality.',
  },

  {
    id: 32,
    name: 'Gaming Laptop',
    price: 49999,
    image: '/products/32a-200kb.jpeg',
    images: [
      '/products/32a-200kb.jpeg',
      '/products/32b-200kb.jpeg',
    ],
    category: 'Computers',
    rating: 0,
    reviews: 0,
    description:
      'Gaming laptop designed for demanding entertainment, productivity and compatible gaming applications. Its portable form combines computer performance with the convenience of a laptop format. Suitable for students, creators and gamers, it can handle everyday workloads, multimedia and supported games while providing flexibility for home or travel use.',
  },

  {
    id: 33,
    name: '27-inch 4K Monitor',
    price: 24999,
    image: '/products/33a-200kb.jpeg',
    images: [
      '/products/33a-200kb.jpeg',
      '/products/33b-200kb.jpeg',
    ],
    category: 'Computers',
    rating: 0,
    reviews: 0,
    description:
      '27-inch 4K monitor designed to deliver detailed visuals and a spacious workspace for productivity, creative work and entertainment. The high-resolution display is suitable for compatible computers and devices. Ideal for professionals, creators and users seeking sharper on-screen content with a larger, comfortable desktop viewing area.',
  },

  {
    id: 34,
    name: 'Premium Gaming Monitor',
    price: 19999,
    image: '/products/34a-200kb.jpeg',
    images: [
      '/products/34a-200kb.jpeg',
      '/products/34b-200kb.jpeg',
    ],
    category: 'Computers',
    rating: 0,
    reviews: 0,
    description:
      'Premium gaming monitor designed for immersive gaming and responsive desktop entertainment. Its dedicated gaming-focused design provides a larger visual workspace for compatible systems. Suitable for gamers and performance-focused users, it can also support everyday productivity, media consumption and multitasking when connected to compatible computers or devices.',
  },

  {
    id: 35,
    name: 'Home Theatre System',
    price: 24999,
    image: '/products/35a-200kb.jpeg',
    images: [
      '/products/35a-200kb.jpeg',
      '/products/35b-200kb.jpeg',
    ],
    category: 'Home Entertainment',
    rating: 0,
    reviews: 0,
    description:
      'Home theatre system designed to create a more engaging audio experience for movies, television, music and gaming. Its multi-component setup is suitable for compatible home entertainment spaces. Ideal for users looking to enhance their living-room setup with dedicated audio equipment for immersive everyday entertainment.',
  },

  {
    id: 36,
    name: 'Premium Robot Vacuum',
    price: 19999,
    image: '/products/36a-200kb.jpeg',
    images: [
      '/products/36a-200kb.jpeg',
      '/products/36b-200kb.jpeg',
    ],
    category: 'Home Appliances',
    rating: 0,
    reviews: 0,
    description:
      'Premium robot vacuum designed to automate everyday floor cleaning with minimal manual effort. Its compact form allows it to navigate suitable floor areas while helping collect everyday dust and debris. Ideal for busy households seeking a convenient automated cleaning solution that fits naturally into modern home routines.',
  },

  {
    id: 37,
    name: 'Premium Cordless Vacuum Cleaner',
    price: 14999,
    image: '/products/37a-200kb.jpeg',
    images: [
      '/products/37a-200kb.jpeg',
      '/products/37b-200kb.jpeg',
    ],
    category: 'Home Appliances',
    rating: 0,
    reviews: 0,
    description:
      'Premium cordless vacuum cleaner designed for convenient cleaning without the restriction of a power cable. Its portable design makes it suitable for floors, furniture and other compatible household surfaces. Ideal for everyday maintenance, quick cleanups and reaching areas where traditional corded vacuum cleaners may be inconvenient.',
  },

  {
    id: 38,
    name: 'Front Load Washing Machine',
    price: 29999,
    image: '/products/38a-200kb.jpeg',
    images: [
      '/products/38a-200kb.jpeg',
      '/products/38b-200kb.jpeg',
    ],
    category: 'Home Appliances',
    rating: 0,
    reviews: 0,
    description:
      'Front load washing machine designed to provide convenient and efficient everyday laundry care. Its modern design fits well into contemporary homes while the front-loading configuration provides easy access to the washing drum. Suitable for households looking for a practical appliance for regular clothing and fabric cleaning.',
  },

  {
    id: 39,
    name: 'Double Door Refrigerator',
    price: 34999,
    image: '/products/39a-200kb.jpeg',
    images: [
      '/products/39a-200kb.jpeg',
      '/products/39b-200kb.jpeg',
    ],
    category: 'Home Appliances',
    rating: 0,
    reviews: 0,
    description:
      'Double door refrigerator designed to provide spacious and organized food storage for modern households. Separate compartments make it convenient to arrange everyday groceries, beverages and frozen items. Its larger format is suitable for families seeking practical refrigeration capacity with easy access to frequently used food and beverages.',
  },

  {
    id: 40,
    name: 'Premium Air Conditioner',
    price: 39999,
    image: '/products/40a-200kb.jpeg',
    images: [
      '/products/40a-200kb.jpeg',
      '/products/40b-200kb.jpeg',
    ],
    category: 'Home Appliances',
    rating: 0,
    reviews: 0,
    description:
      'Premium air conditioner designed to provide comfortable indoor cooling during warm weather. Suitable for bedrooms, living rooms and other compatible spaces, it combines a modern appliance design with convenient temperature control. Ideal for households seeking a practical cooling solution for everyday residential use.',
  },
]

export const featuredProducts = products.slice(0, 8)