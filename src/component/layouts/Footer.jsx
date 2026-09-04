import React from 'react'
import './Footer.css'
import { farmer, rohan } from '../../assest/images/img'
import { IoLocationOutline } from 'react-icons/io5'
import { MdCall } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' md:mt-20 p-10 w-full  bg-secondary'>
      <ul className=' color-third  md:flex items-start justify-evenly gap-45 '>
        <li className='text-3 '>
          <img src={farmer} className='w-20' alt='Rohan Farm' />
          <p className=' md:txt-secondary'>Naturally flavorful, clean, and full of vitamins for your family</p>
        </li>

        {/* category */}
        <li className='mt-5 md:mt-0 '>
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
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/about'>About</Link></p>
            <p><Link to='/shop'>Shop</Link></p>
            <p><Link to='/contact'>Contact</Link></p>
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
