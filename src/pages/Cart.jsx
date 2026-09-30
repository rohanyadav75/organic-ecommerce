import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const total = cart.reduce((s, p) => s + p.price * (p.quantity || 1), 0)

  if (!cart || cart.length === 0) {
    return (
      <div className='mt-20 text-center'>
        <h2 className='text-2xl mb-4'>Your cart is empty</h2>
        <Link to='/shop' className='text-secondary underline'>Continue shopping</Link>
      </div>
    )
  }

  return (
    <div className='mt-20 p-8'>
      <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>
      <div className='space-y-4'>
        {cart.map((item) => (
          <div key={item.id} className='flex items-center justify-between border p-4 rounded'>
            <div className='flex items-center gap-4'>
              <img src={item.image} alt={item.name} className='w-20 h-20 object-cover rounded' />
              <div>
                <h3 className='font-bold'>{item.name}</h3>
                <p className='text-sm text-gray-600'>₹{item.price}</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <input type='number' min='1' value={item.quantity} onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value || '1', 10)))} className='w-16 p-1 border rounded' />
              <p className='font-semibold'>₹{item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className='text-red-500 underline'>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-6 flex items-center justify-between'>
        <div>
          <button onClick={clearCart} className='px-4 py-2 bg-red-500 text-white rounded'>Clear Cart</button>
        </div>
        <div className='text-right'>
          <p className='text-lg'>Total: <span className='font-bold'>₹{total}</span></p>
          <button className='mt-2 px-4 py-2 bg-secondary text-white rounded'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
