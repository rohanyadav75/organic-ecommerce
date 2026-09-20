import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiTrash2 } from 'react-icons/fi';

const Wishlist = ({ wishlist = [], toggleWishlist = () => { } }) => {
    if (!wishlist.length) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-16 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-secondary">
                    <FiHeart size={28} />
                </div>
                <h1 className="text-3xl font-bold text-secondary">Your wishlist is empty</h1>
                <p className="mt-3 text-gray-600">Save products you love and they will appear here.</p>
                <Link
                    to="/shop"
                    className="mt-6 inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-6xl px-4 py-20">
            <div className=" flex items-center justify-between gap-3">
                <div>
                    {/* <p className="text-sm font-medium uppercase  tracking-[0.2em] text-primary">Saved items</p> */}
                    <h1 className="text-3xl font-bold text-secondary py-5">My Wishlist</h1>
                </div>
                <span className="rounded-full bg-primary/10 px-3  text-sm font-semibold text-secondary">
                    {wishlist.length} item{wishlist.length > 1 ? 's' : ''}
                </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 py-5 xl:grid-cols-3">
                {wishlist.map((product) => (
                    <div key={product.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="relative">
                            <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                            <button
                                type="button"
                                onClick={() => toggleWishlist(product)}
                                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary shadow-md"
                                aria-label={`Remove ${product.name} from wishlist`}
                            >
                                <FiTrash2 size={18} className='hover:cursor-pointer' />
                            </button>
                        </div>

                        <div className="space-y-3 p-4">
                            <p className="w-fit rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-secondary">
                                {product.category}
                            </p>
                            <h2 className="text-xl font-bold text-secondary">{product.name}</h2>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-bold text-secondary">₹{product.price}</p>
                                    {product.originalPrice && (
                                        <p className="text-xs text-gray-500 line-through">₹{product.originalPrice}</p>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => toggleWishlist(product)}
                                    className="rounded-full border border-secondary px-3 py-2 text-xs font-semibold text-white bg-secondary hover:bg-white hover:text-secondary cursor-pointer"
                                >
                                    MOVE TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
