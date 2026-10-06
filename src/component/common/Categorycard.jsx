import React from 'react'
import '../home/Homecategory.css'

const Categorycard = ({ image, name }) => {
    return (
        <>
            {/* FOR DESKTOP */}
            <div className='hidden md:flex flex-col items-center  '>
                <img className='catimg border-3 border-primary/30 p-1 transition-all hover:border-fourth hover:scale-105' src={image} alt={name} />
                <span className='text-sm mt-2'>{name}</span>
            </div>


            {/* FOR MOBILE */}
            <div className='md:hidden flex flex-col items-center  '>
                <img className='h-30 rounded-lg  transition-all hover:border-fourth hover:scale-105' src={image} alt={name} />
                <span className='text-sm mt-2'>{name}</span>
            </div>
        </>

    )
}

export default Categorycard
