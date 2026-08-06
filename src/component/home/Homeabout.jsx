import React from 'react'
import { motion } from "framer-motion";
import { RoughNotation } from 'react-rough-notation'
import { about, farmer } from '../../assest/images/img'
import { FaCloudUploadAlt, FaLock, LuWheat, WheatIcon } from '../../assest/icons/icon'
import GlareHover from '../react-bits/GlareHover';

const Homeabout = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto  grid md:grid-cols-2 items-center gap-40 mt-25">
                <div className='relative flex items-center justify-center'>

                    <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}

                        className="rounded-lg shadow-2xl p-2 h-100  max-w-sm" src={about} alt="" />


                </div>

                <div >
                    <ul className='flex gap-2 items-center'>
                        <h3 className='color-primary capitalize font-bold txt-primary'>30 years of agriculture experience
                        </h3> <WheatIcon className='color-fourth rotate-90 text-4xl' />

                    </ul>

                    <h1 data-aos="fade-left" className="text-[44px] leading-tight color-secondary font-bold p-0 txt-secondary mt-3"
                    >
                        Harvesting Innovation For Better{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="#F8C32C"
                            strokeWidth={1}
                            animationDuration={3000}
                        >
                            Tomorrow!
                        </RoughNotation>
                    </h1>

                    <p data-aos="fade-up" className='mt-5 text-[14px] txt-secondary color-third'>Agriculture is the backbone of our society, providing food, materials, and economic stability.
                        As the world population grows, the need for sustainable farming practices has never been more critical.</p>
                    <ul data-aos="fade-up" className='flex mt-8 p-0 gap-5 '>
                        <li className='flex  items-center gap-4'>
                            <FaCloudUploadAlt className="color-primary text-7xl" />
                            <p className='font-semibold text-[14px] txt-secondary color-secondary '>Growing Organic Fruits
                                and Vegetables</p>
                        </li>
                        <li className='flex items-center gap-4'>
                            <FaLock className="color-primary text" />
                            <p className='font-semibold text-[14px] txt-secondary color-secondary  color-secondary '>Agribusiness Training
                                and Workshops</p>
                        </li>

                    </ul>

                    {/* <ul data-aos="fade-up" className='leading-[1.8] mt-7 font-medium color-secondary gap-4'>
                        <li className='flex items-center gap-2'><LuWheat className='text-xl color-fourth' /> Pioneering Excellence in the Agriculture Market</li>
                        <li className='flex items-center gap-2'><LuWheat className='text-xl color-fourth' /> Pioneering Excellence in the Agriculture Market</li>
                        <li className='flex items-center gap-2'><LuWheat className='text-xl color-fourth' /> Pioneering Excellence in the Agriculture Market</li>
                    </ul> */}


                </div>
            </div>
        </>
    )
}

export default Homeabout
