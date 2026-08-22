import React from 'react'
import './Footer.css'
import { farmer, rohan } from '../../assest/images/img'
import { IoLocationOutline } from 'react-icons/io5'
import { MdCall } from 'react-icons/md'

const Footer = () => {
  return (
    <div className=' md:p-10 mt-30 w-full  bg-third'>
      <ul className='p-10  md:flex items-start justify-evenly gap-50 '>
        <li className='text-3 '>
          <img src={farmer} className='w-20' alt='Rohan Farm' />
          <p className='mt-5 md:txt-secondary'>Naturally flavorful, clean, and <br />full of vitamins for your family</p>
        </li>

        {/* category */}
        <li className='mt-5 md:mt-0'>
          <p className='footer-heading txt-primary'>Categories</p>
          <div className='text-3 txt-secondary nav space-y-0.5'>
            <p>Rice</p>
            <p>Wheat</p>
            <p>Maize</p>
            <p>Pulses</p>
          </div>

        </li>

        {/* Link */}
        <li className='mt-5 md:mt-0'>
          <p className='footer-heading txt-primary'>Links</p>
          <div className='text-3 txt-secondary nav space-y-0.5'>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Contact</p>
          </div>
        </li>

        {/* Official Info */}
        <li>
          <p className='mt-5 md:mt-0 footer-heading txt-primary'>
            Official Info
          </p>
          <div className='text-3 txt-secondary nav space-y-1'>
            <div className='flex items-center gap-1'>
              <IoLocationOutline className='' />

              <p>Jaunpur, Uttar Pradesh</p><br />

            </div>
            <div className='flex items-center gap-1'>
              <MdCall />

              <p>+917397919290</p><br />

            </div>


          </div>

        </li>

        {/*  Products*/}
        <li className='mt-5 md:mt-0 font-medium inline-flex'>
          <div className='flex flex-col gap-y-1'>
            <p className='footer-heading txt-primary'>Product</p>
            <img className='w-10 hover:scale-110  duration-300' src={rohan} alt="" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Footer
