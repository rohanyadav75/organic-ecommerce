import React from 'react'

const Pricefilter = ({ price, setPrice, maxPrice }) => {
  return (
    <div className='p-5'>
      <h1>Price:</h1>

      <div className='mt-5'>
        <p className='text-sm text-gray-700'>Up to ₹{price}</p>

        <input
          type='range'
          min='0'
          max={maxPrice}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className='mt-3 w-full accent-secondary '
        />

        <div className='mt-2 flex items-center justify-between text-xs text-gray-500'>
          <span>₹0</span>
          <span>₹{maxPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default Pricefilter
