import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Buttoncart = ({ product, onAdd, redirectToDetail = false }) => {
    const { addToCart } = useCart()
    const navigate = useNavigate()

    const handleAdd = (e) => {
        if (redirectToDetail && product && product.id) {
            return navigate(`/product/${product.id}`, { state: { product } })
        }

        if (onAdd) return onAdd()
        if (product) return addToCart(product)
    }

    return (
        <div>
            <button onClick={handleAdd} className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90">
                <FiShoppingCart className="text-sm" />
                <span>Add to cart</span>
            </button>
        </div>
    )
}

export default Buttoncart
