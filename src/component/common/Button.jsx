import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const Button = () => {
    return (
        <div>
            <button className='bg-fourth txt-secondary text-3 p-2 rounded-[20px] px-5 flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg '>
                Explore Collections
                <FaArrowRight />
            </button>

        </div>
    )
}

export default Button
