import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import data from '../data/Shop/data' // Adjust path as needed
import Buttoncart from '../component/common/Buttoncart'
import Homeshop from '../component/home/Homeshop'

const Productdetail = () => {
    const { id } = useParams() // Get ID from URL
    // const location = useLocation()
    const productFromData = data.find(item => item.id === parseInt(id, 10))
    const product = productFromData || location.state?.product

    if (!product) return <div className='mt-20 text-center text-2xl'>Product not found</div>

    const {
        image,
        name,
        category,
        price,
        originalPrice,
        rating,
        reviews,
        description,
        fullDescription,
        benefits = [],
        skinType = [],
        stock,
        sizes,
        inStock
    } = product

    return (
        <div>
            <div className='grid items-center justify-items-center mt-20 grid-cols-12 gap-8  p-8'>

                {/* LEFT SIDE - IMAGE */}
                <div className='col-span-6'>
                    <img src={image} alt={name} className='w-full h-auto rounded-lg' />
                </div>

                {/* RIGHT SIDE - DETAILS */}
                <div className='col-span-6 text-secondary'>
                    <h1 className='text-4xl font-bold mb-2'>{name}</h1>
                    <p className=' mb-4'>{category}</p>
                    <p className='text-3'>{fullDescription}</p>

                    {/* RATING */}
                    <div className='flex items-center text-secondary mt-2 gap-2 mb-4'>
                        <span >⭐ {rating}</span>
                        <span>({reviews} reviews)</span>
                    </div>

                    {/* PRICE */}
                    <div className='flex items-center gap-3'>
                        <span className='text font-bold text-secondary'>₹{price}</span>
                        <span className='text-2 text-gray-400 line-through mt-2'>₹{originalPrice}</span>
                        {/* <span>{discount}</span> */}
                    </div>


                    {/* SIZES AND PRICES */}
                    <div className='mb-4 mt-2 txt-primary'>
                        <p className='font-semibold mb-2'>Suitable for:</p>
                        <div className='flex gap-2 flex-wrap'>
                            {sizes.map((type) => (
                                <span className='bg-white border border-secondary text-secondary p-2 px-5 rounded-full hover:bg-secondary hover:text-white transition-colors duration-200 cursor-pointer '>
                                    {type} - ₹{price}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* BENEFITS */}
                    <div className='mb-6 '>
                        <p className='font-semibold mb-2 text-black/70'>Benefits:</p>
                        <ul className='list-disc list-inside'>
                            {benefits.map((benefit, index) => (
                                <li key={index} className='text-secondary'>{benefit}</li>
                            ))}
                        </ul>
                    </div>

                    {/* STOCK STATUS */}
                    <p className={`mb-6 font-semibold ${inStock ? 'text-secondary' : 'text-red-400'}`}>
                        {inStock ? `In Stock (${stock} available)` : 'Out of Stock'}
                    </p>

                    {/* ADD TO CART BUTTON */}
                    <Buttoncart/>
                    
                </div>
            </div>
            <Homeshop/>
        </div>
    )
}

export default Productdetail