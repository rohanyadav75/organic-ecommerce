import React from 'react'
import { motion } from "framer-motion";
import { abt, home } from '../../assest/images/img'
import Buttonsec from '../common/Buttonsec';

const Homeabout = () => {
    return (
        <>
            <div className="bg-primary/12 px-20 py-10 grid md:grid-cols-3 items-center justify-center justify-items-center  gap-10 ">
                <div>
                    <img className="relative rounded-lg object-cover object-[70%_0%] h-100 w-full" src={home} alt="" />
                    <div className='absolute mt-[-118px] ml-[255px]  p-5 h-30 w-30 rounded-full bg-fourth lg:'>
                        <h1 className='md:txt-primary color-secondary text-[18px] text-center'>Less <br />but <br />better</h1>
                    </div>
                </div>

                <div className='space-y-5'>
                    <p className='color-secondary capitalize text-3 txt-primary '>30 years of agriculture experience
                    </p>
                    <h1 className="text color-secondary font-bold p-0 txt-primary">
                        Harvesting Innovation For Better Tomorrow!
                    </h1>

                    <p className=' text-2 txt-secondary color-secondary'>Agriculture is the backbone of our society, providing food, materials, and economic stability.
                        As the world population grows, the need for sustainable farming practices has never been more critical.</p>

                    <Buttonsec />



                </div>

                <div className='color-secondary '>
                    <div className='border-b pb-4  border-secondary/12 space-y-4 '>
                        <p className='font-bold text-3'>01</p>
                        <h1 className='text-2 font-bold'>Neem Soap</h1>
                        <p className=' text-3 '>Start with eem soap and enjoy the day.</p>
                    </div>

                    <div className='mt-4  border-b pb-4  border-secondary/12 space-y-4 '>
                        <p className='font-bold text-3'>02</p>
                        <h1 className='text-2 font-bold'>Neem Soap</h1>
                        <p className=' text-3'>Start with eem soap and enjoy the day.</p>
                    </div>

                    <div className='mt-4 space-y-4 '>
                        <p className='font-bold text-3'>03</p>
                        <h1 className='text-2 font-bold'>Neem Soap</h1>
                        <p className=' text-3'>Start with eem soap and enjoy the day.</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Homeabout
