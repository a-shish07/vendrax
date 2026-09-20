import { useState, useEffect, useCallback } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  category: string
  quantity: number
}

const STORAGE_KEY = 'vendrax_cart'

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(loadCart)

  useEffect(() => {
    saveCart(cart)
  }, [cart])

  const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: number, qty: number) => {
    if (qty < 1) return
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i))
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart }
}
