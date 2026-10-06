import React from "react";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'

const Productcard = ({
  id,
  skinType,
  description,
  image,
  name,
  price,
  originalPrice,
  category,
  wishlist = [],
  toggleWishlist = () => {},
}) => {
  const skinTypeText = Array.isArray(skinType) ? skinType.join(", ") : skinType;
  const isWishlisted = wishlist.some((item) => item.id === id);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleWishlistClick = (event) => {
    event.preventDefault();
    toggleWishlist({ id, image, name, price, category, skinType, description, originalPrice });
  };

  const handleQuickView = (event) => {
    event.preventDefault();

    if (!id) return;

    navigate(`/product/${id}`, {
      state: {
        product: { id, image, name, price, originalPrice, category, skinType, description }
      }
    });
  };

  return (
    <div className="mt-5 overflow-hidden text-3 shadow-sm ">
      <div className="relative">
        <img src={image} alt={name} className="block h-48 w-full object-cover" />
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={handleWishlistClick}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-105"
        >
          <FiHeart className={`text-sm ${isWishlisted ? "fill-secondary text-secondary" : "text-secondary"}`} />
        </button>
        
        <button
          type="button"
          aria-label="Quick view"
          onClick={handleQuickView}
          className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[10px] font-medium text-secondary shadow-md transition hover:bg-white"
        >
          <FiEye  className="text-sm text-secondary" />
          <span>Quick View</span>
        </button>
      </div>

      <div className="grid items-center truncate justify-evenl p-2 gap-2">
        <p className="w-fit rounded-2xl bg-primary/12 p-1.5 text-[10px] font-medium">{category}</p>
        <h1 className="text-3 font-bold text-secondary">{name}</h1>
        {/* <p>{description}</p> */}

        <div className="border-t border-gray-200 pt-2">
          <p>
            <span className="font-bold text-secondary">Skin type :</span> {skinTypeText}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3 txt-primary">
          <div className="flex items-center gap-x-5">
            <p className="font-bold text-3 text-secondary">₹{price}</p>
            <p className="text-[10px] text-gray-500 line-through">₹{originalPrice}</p>
          </div>

          <button onClick={() => addToCart({ id, image, name, price, originalPrice, category })} className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90">
            <FiShoppingCart className="text-sm" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Productcard;