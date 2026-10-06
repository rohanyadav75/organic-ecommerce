import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { CiSearch } from "react-icons/ci";
import { useCart } from '../../context/CartContext'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { GoChevronRight } from "react-icons/go";
import { TfiHome } from "react-icons/tfi";
import { PiInfoThin } from "react-icons/pi";
import { PiShoppingBagThin } from "react-icons/pi";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import Homeshop from '../home/Homeshop';
import Mobileproduct from '../common/Mobileproduct';
import Mobilecategory from '../common/Mobilecategory';

const Header = ({ wishlistCount = 0, wishlist = [], toggleWishlist = () => {} }) => {
    const { cart } = useCart()
    const totalItems = cart.reduce((s, p) => s + (p.quantity || 0), 0)
    const [hammenu, setHammenu] = useState(false)
    const [open, setOpen] = useState(false);


    return (
        <div>

            {/* DEKSTOP MENU */}
            <header className="site-header md:block hidden">
                <div className="nav-container">
                    <Link to='/' className="logo">
                        <span className="txt-primary">root</span>
                        <span className="accent">&amp; ritual</span>
                    </Link>

                    <div className="nav-links">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>

                        </ul>
                    </div>

                    <div className="actions">
                        <Link to='/wishlist' className="icon-btn relative" aria-label="Wishlist">
                            <FiHeart size={18} />
                            {wishlistCount > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-fourth px-1 text-[10px] font-bold text-white">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>
                        <Link to='/cart' className="icon-btn relative" aria-label="Cart">
                            <FiShoppingCart size={18} />
                            {totalItems > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-fourth px-1 text-[10px] font-bold text-white">
                                    {totalItems}
                                </span>
                            )}
                        </Link>


                    </div>
                </div>

            </header>

            {/* MOBILE MENU */}
            <div className='  mob-menu flex justify-between items-center border-b-1 text-white bg-secondary  h-auto p-2 w-full z-50 fixed top-0 text-2xl md:hidden '>
                <div>
                    {hammenu ? (<RxCross1 onClick={() => setHammenu(false)}
                    />
                    ) : (<RxHamburgerMenu className='cursor-pointer' onClick={() => setHammenu(true)}
                    />)}


                    {hammenu && (
                        <div className="overflow-y-auto overflow-scroll absolute w-full pb-10 top-10 left-0 h-[100vh]  bg-white text-secondary p-5">
                            <ul className=" text-2 txt-primary flex flex-col gap-5 p-2 ">
                                <li>
                                    <Link to="/" className='link ' onClick={() => setHammenu(false)}>
                                        <div className='flex gap-5'>
                                            <TfiHome size={25} />
                                            Home
                                        </div>

                                        <GoChevronRight />

                                    </Link>
                                </li>

                                <li >
                                    <Link to="/about" className='link' onClick={() => setHammenu(false)}>
                                        <div className='flex gap-5'>
                                            <PiInfoThin size={30} />
                                            About
                                        </div>

                                        <GoChevronRight />

                                    </Link>
                                </li>

                                <li>
                                    <Link to="/shop" className='link' onClick={() => setHammenu(false)}>
                                        <div className='flex gap-5'>
                                            <PiShoppingBagThin size={30} />
                                            Shop
                                        </div>

                                        <GoChevronRight />

                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact" className='link' onClick={() => setHammenu(false)}>
                                        <div className='flex gap-5'>
                                            <PiEnvelopeSimpleThin size={30} />
                                            Contact
                                        </div>
                                        <GoChevronRight />

                                    </Link>
                                </li>
                            </ul>

                            <Mobilecategory onClose={() => setHammenu(false)}/>
                            <Mobileproduct onClose={() => setHammenu(false)} wishlist={wishlist} toggleWishlist={toggleWishlist} />
                        </div>

                    )}
                </div>


                {/* SEARCH AND CART  */}
                <div className='flex items-center gap-5'>

                    <CiSearch />

                    <Link to='/wishlist' className="icon-bt relative" aria-label="Wishlist">
                        <FiHeart size={18} />
                        {wishlistCount > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-fourth px-1 text-[10px] font-bold text-white">
                                {wishlistCount}
                            </span>
                        )}
                    </Link>


                    <Link to='/cart' className="icon-bt relative" aria-label="Cart">
                        <FiShoppingCart size={18} />
                        {totalItems > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-fourth px-1 text-[10px] font-bold text-white">
                                {totalItems}
                            </span>
                        )}
                    </Link>


                </div>

            </div>

        </div >

    )
}

export default Header
