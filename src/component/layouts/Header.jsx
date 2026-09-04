import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div >
                <nav className='absolute  top-0 left-0 z-50 w-full text-[16px] txt-primary color-fourth font-bold '  >
                    <ul className='flex justify-end gap-x-20 p-5 uppercase '>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>

                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header
