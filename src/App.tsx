import { createContext, useContext, useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import type { ComponentType } from 'react'
import { useCart, type CartItem } from './hooks/useCart'
import type { Product } from './data/products'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'

export type Page = 'home' | 'products' | 'cart' | 'checkout' | 'about' | 'contact'

export const pagePaths: Record<Page, string> = {
  home: '/',
  products: '/products',
  cart: '/cart',
  checkout: '/checkout',
  about: '/about',
  contact: '/contact',
}

const pathToPage = (pathname: string): Page => {
  if (pathname === '/products' || pathname.startsWith('/products/')) return 'products'
  if (pathname === '/cart') return 'cart'
  if (pathname === '/checkout') return 'checkout'
  if (pathname === '/about') return 'about'
  if (pathname === '/contact') return 'contact'
  return 'home'
}

interface AppContextType {
  currentPage: Page
  navigate: (page: Page) => void
  cart: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, qty: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
  wishlist: Product[]
  toggleWishlist: (product: Product) => void
}

export const AppContext = createContext<AppContextType>(null!)

export function useApp() {
  return useContext(AppContext)
}

function AppContent() {
  const routerNavigate = useNavigate()
  const location = useLocation()
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [wishlist, setWishlist] = useState<Product[]>([])

  const currentPage = pathToPage(location.pathname)

  const navigate = useCallback(
    (page: Page) => {
      routerNavigate(pagePaths[page])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [routerNavigate],
  )

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id)
      return exists
        ? current.filter((item) => item.id !== product.id)
        : [...current, product]
    })
  }, [])

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigate,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        wishlist,
        toggleWishlist,
      }}
    >
      <div
        className="min-h-screen bg-white flex flex-col"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
