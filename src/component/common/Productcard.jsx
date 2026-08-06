import React from 'react'
import { motion } from 'framer-motion'
import { rohan } from '../../assest/images/img'
import products from '../../data/product'


const Productcard = ({ image, name, price, originalPrice }) => {
  return (
    <div>
      <div className='shadow-lg  rounded-b-2xl txt-secondary text-[12px] h-70 mt-10 border  border-fourth bg-[#ffff]'>
        <img
          src={image}
          alt={name}
          
        />
        <div className='p-2 '>
          <h1 className=' text-center'>{name}</h1><br />
          <div className='flex justify-center space-x-1.5 items-center'>
            <p>₹{price}</p><br />
            <p className='text-[10px] text-gray-300'><del>₹{originalPrice}</del></p><br />
          </div>



          {/* <span>{category}</span><br /> */}
          {/* <span>{description}</span> */}
        </div>

      </div>



    </div>
  )
}

export default Productcard
