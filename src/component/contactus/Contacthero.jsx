import React from 'react'
import { abthero, contacthero } from '../../assest/images/img'
import Button from '../common/Button'

const Contacthero = () => {
    return (
        <div className='relative'>
            <img className='h-[350px] mt-10 w-full object-cover object-[70%_40%] md:h-screen md:w-full' src={contacthero} alt="" />
            <div className='absolute inset-0 grid content-center  gap-3 bg-secondary/50 px-5 md:inset-0 md:px-20'>
                <p className='text-3 uppercase tracking-widest text-white md:text-3'>Contact Us</p>
                <h1 className='text-[30px] leading-8 text-white md:text-6xl md:leading-15'>
                    A little more <span className='text-fourth'>wonder</span><br /> in the everyday.
                </h1>
                <p className='text-sm text-wrap mt-3 text-white md:text-base'>Agriculture is the backbone of our society, providing food, materials, <br /> and economic stability. As the world population grows,
                    the need for sustainable <br /> farming practices has never been more critical.</p>
                <Button />
            </div>
        </div>
    )
}

export default Contacthero
