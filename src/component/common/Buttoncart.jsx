import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const Buttoncart = () => {
    return (
        <div>
            <button className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90">
                <FiShoppingCart className="text-sm" />
                <span>Add to cart</span>
            </button>
        </div>
    )
}

export default Buttoncart
