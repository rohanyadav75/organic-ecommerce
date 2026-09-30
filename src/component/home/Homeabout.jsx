import React from 'react'
import { abt } from '../../assest/images/img'
import Buttonsec from '../common/Buttonsec';
import homePage from '../../data/Home/data';
const {about} = homePage

const Homeabout = () => {
    return (
        <>
            <div className="bg-[rgba(67,170,92,0.12)]  md:px-20 md:py-10  grid grid-cols-1 p-5 mt-10 md:mt-10 md:grid-cols-3 items-center justify-center justify-items-center  md:gap-10 ">
                <div>
                    <img className="relative rounded-lg object-cover object-[70%_0%] h-80 md:h-100 w-full" src={abt} alt="" />
                    <div className='hidden md:block absolute mt-[-118px] ml-[255px]  p-5 h-30 w-30 rounded-full bg-fourth '>
                        <h1 className='md:txt-primary color-secondary text-[18px] text-center '>{about.badge}</h1>
                    </div>
                </div>

                <div className='md:space-y-5 content-center mt-5 md:content-none'>
                    <p className='color-secondary capitalize text-3 txt-primary '>{about.label}
                    </p>
                    <h1 className="text-[30px] md:text color-secondary font-bold p-0 txt-primary">
                        {about.heading}
                    </h1>

                    <p className='mb-5  text-2 txt-secondary color-secondary'>{about.description}</p>

                    <Buttonsec />



                </div>

                <div className='color-secondary mt-10 md:mt-0 '>
                    {about.details.map((item) => (
                        <div key={item.number} className='flex items-center flex-wrap gap-x-3 bg-whie md:  border-b pb-4 border-[rgba(22,67,51,0.12)] space-y-4 mt-4 first:mt-0'>
                            <p className='font-bold text-3'>{item.number}</p>
                            <h1 className='text-2 font-bold'>{item.title}</h1>
                            <p className='text-3'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Homeabout
