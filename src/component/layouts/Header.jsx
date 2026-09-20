import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

const Header = ({ wishlistCount = 0 }) => {
    return (
        <header className="site-header">
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
                    <button className="icon-btn" aria-label="Cart">
                        <FiShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
