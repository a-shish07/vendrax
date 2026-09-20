export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: 'electronics' | 'clothing'
  rating: number
  reviews: number
  tag?: string
  description: string
}

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop&auto=format',
    category: 'electronics',
    rating: 4.5,
    reviews: 128,
    tag: 'Best Seller',
    description: 'Active noise cancellation, 30-hour battery life, premium sound quality.',
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&auto=format',
    category: 'electronics',
    rating: 4.7,
    reviews: 89,
    tag: 'New',
    description: 'Health tracking, GPS, AMOLED display, 7-day battery.',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 1899,
    originalPrice: 2799,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop&auto=format',
    category: 'electronics',
    rating: 4.3,
    reviews: 215,
    description: '360° surround sound, waterproof IPX7, 20-hour playback.',
  },
  {
    id: 4,
    name: 'Laptop Stand Premium',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a573d5f5ef?w=500&h=500&fit=crop&auto=format',
    category: 'electronics',
    rating: 4.6,
    reviews: 74,
    description: 'Aluminum ergonomic stand, adjustable height, universal fit.',
  },
  {
    id: 5,
    name: 'Power Bank 20000mAh',
    price: 1599,
    originalPrice: 2299,
    image: 'https://images.unsplash.com/photo-1601972599748-d3c0f5a54c9b?w=500&h=500&fit=crop&auto=format',
    category: 'electronics',
    rating: 4.4,
    reviews: 312,
    tag: 'Popular',
    description: 'Fast charge 65W, three ports, digital display, slim design.',
  },
  {
    id: 6,
    name: 'LED Desk Lamp',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a35d44e80?w=500&h=500&fit=crop&auto=format',
    category: 'electronics',
    rating: 4.2,
    reviews: 156,
    description: '5 brightness levels, USB-C charging port, touch control.',
  },
  // Clothing
  {
    id: 7,
    name: "Men's Classic T-Shirt",
    price: 599,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&auto=format',
    category: 'clothing',
    rating: 4.5,
    reviews: 421,
    tag: 'Best Seller',
    description: '100% premium cotton, slim fit, available in 8 colors.',
  },
  {
    id: 8,
    name: "Women's Cozy Hoodie",
    price: 1199,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&h=500&fit=crop&auto=format',
    category: 'clothing',
    rating: 4.8,
    reviews: 203,
    tag: 'Trending',
    description: 'Fleece-lined comfort, kangaroo pocket, relaxed fit.',
  },
  {
    id: 9,
    name: 'Denim Jacket',
    price: 2199,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&h=500&fit=crop&auto=format',
    category: 'clothing',
    rating: 4.6,
    reviews: 98,
    description: 'Premium denim, distressed finish, classic collar design.',
  },
  {
    id: 10,
    name: 'Sports Sneakers',
    price: 2799,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&auto=format',
    category: 'clothing',
    rating: 4.7,
    reviews: 547,
    tag: 'New',
    description: 'Air-cushion sole, breathable mesh, lightweight design.',
  },
  {
    id: 11,
    name: 'Formal Dress Shirt',
    price: 1099,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop&auto=format',
    category: 'clothing',
    rating: 4.4,
    reviews: 167,
    description: 'Wrinkle-resistant fabric, sharp cut, multiple sizes.',
  },
  {
    id: 12,
    name: 'Summer Floral Dress',
    price: 1399,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop&auto=format',
    category: 'clothing',
    rating: 4.6,
    reviews: 284,
    tag: 'Trending',
    description: 'Lightweight chiffon, floral print, midi length, breezy silhouette.',
  },
]

export const featuredProducts = products.filter(p => p.tag === 'Best Seller' || p.tag === 'Trending').slice(0, 4)
