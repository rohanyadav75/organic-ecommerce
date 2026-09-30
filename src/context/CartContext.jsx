import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
    } catch (e) {}
  }, [cart])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
