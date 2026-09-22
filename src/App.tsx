import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'

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
import Terms from './pages/Terms'
import RefundPolicy from './pages/RefundPolicy'

/* =========================================================
   PAGE TYPES
========================================================= */

export type Page =
  | 'home'
  | 'products'
  | 'cart'
  | 'checkout'
  | 'about'
  | 'contact'

/* =========================================================
   PAGE PATHS
========================================================= */

export const pagePaths: Record<Page, string> = {
  home: '/',
  products: '/products',
  cart: '/cart',
  checkout: '/checkout',
  about: '/about',
  contact: '/contact',
}

/* =========================================================
   CURRENT PAGE HELPER
========================================================= */

const pathToPage = (pathname: string): Page => {
  if (
    pathname === '/products' ||
    pathname.startsWith('/products/')
  ) {
    return 'products'
  }

  if (pathname === '/cart') {
    return 'cart'
  }

  if (pathname === '/checkout') {
    return 'checkout'
  }

  if (pathname === '/about') {
    return 'about'
  }

  if (pathname === '/contact') {
    return 'contact'
  }

  /*
   * Terms and Refund Policy are legal pages.
   *
   * They don't have to be added to the Page union because
   * currentPage is mainly used by the existing Header/navigation.
   *
   * They are still handled by React Router below.
   */

  return 'home'
}

/* =========================================================
   APP CONTEXT
========================================================= */

interface AppContextType {
  currentPage: Page

  navigate: (page: Page) => void

  cart: CartItem[]

  addToCart: (
    product: Omit<CartItem, 'quantity'>,
  ) => void

  removeFromCart: (id: number) => void

  updateQuantity: (
    id: number,
    qty: number,
  ) => void

  clearCart: () => void

  cartTotal: number

  cartCount: number

  wishlist: Product[]

  toggleWishlist: (
    product: Product,
  ) => void
}

export const AppContext =
  createContext<AppContextType>(null!)

/* =========================================================
   USE APP
========================================================= */

export function useApp() {
  return useContext(AppContext)
}

/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    /*
     * Run after the route changes.
     *
     * This fixes the issue where clicking a footer/header
     * link keeps the previous page's scroll position.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

/* =========================================================
   APP CONTENT
========================================================= */

function AppContent() {
  const routerNavigate = useNavigate()

  const location = useLocation()

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart()

  /* =======================================================
     WISHLIST
  ======================================================= */

  const [wishlist, setWishlist] =
    useState<Product[]>([])

  /* =======================================================
     CURRENT PAGE
  ======================================================= */

  const currentPage = pathToPage(
    location.pathname,
  )

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigate = useCallback(
    (page: Page) => {
      routerNavigate(pagePaths[page])
    },
    [routerNavigate],
  )

  /* =======================================================
     WISHLIST TOGGLE
  ======================================================= */

  const toggleWishlist = useCallback(
    (product: Product) => {
      setWishlist((current) => {
        const exists = current.some(
          (item) => item.id === product.id,
        )

        if (exists) {
          return current.filter(
            (item) => item.id !== product.id,
          )
        }

        return [...current, product]
      })
    },
    [],
  )

  /* =======================================================
     CART TOTAL
  ======================================================= */

  const cartTotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0,
  )

  /* =======================================================
     CART COUNT
  ======================================================= */

  const cartCount = cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0,
  )

  /* =======================================================
     RENDER
  ======================================================= */

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
        style={{
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* =================================================
            ROUTE SCROLL RESET
        ================================================== */}

        <ScrollToTop />

        {/* =================================================
            HEADER
        ================================================== */}

        <Header />

        {/* =================================================
            MAIN
        ================================================== */}

        <main className="flex-1">
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* PRODUCTS */}
            <Route
              path="/products"
              element={<Products />}
            />

            {/* PRODUCT DETAILS
                Keep this if you have ProductDetails.tsx.
            */}
            <Route
              path="/products/:id"
              element={<Products />}
            />

            {/* CART */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* CHECKOUT */}
            <Route
              path="/checkout"
              element={<Checkout />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* TERMS & CONDITIONS */}
            <Route
              path="/terms"
              element={<Terms />}
            />

            {/* REFUND POLICY */}
            <Route
              path="/refund-policy"
              element={<RefundPolicy />}
            />

            {/* FALLBACK */}
            <Route
              path="*"
              element={<Home />}
            />

          </Routes>
        </main>

        {/* =================================================
            FOOTER
        ================================================== */}

        <Footer />
      </div>
    </AppContext.Provider>
  )
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}