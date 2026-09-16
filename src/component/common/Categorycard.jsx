import React from 'react'
import '../home/Homecategory.css'

const Categorycard = ({ image, name }) => {
    return (
        <div className='flex flex-col items-center border-0 '>
            <img className='catimg' src={image} alt={name} />
            <span className='text-sm mt-2'>{name}</span>
        </div>
    )
}

export default Categorycard
