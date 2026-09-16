import React from 'react'
import { abt } from '../../assest/images/img'
import Buttonsec from '../common/Buttonsec';
import homePage from '../../data/Home/data';
const {about} = homePage

const Homeabout = () => {
    return (
        <>
            <div className="bg-[rgba(67,170,92,0.12)] px-20 py-10 grid md:grid-cols-3 items-center justify-center justify-items-center  gap-10 ">
                <div>
                    <img className="relative rounded-lg object-cover object-[70%_0%] h-100 w-full" src={abt} alt="" />
                    <div className='absolute mt-[-118px] ml-[255px]  p-5 h-30 w-30 rounded-full bg-fourth lg:'>
                        <h1 className='md:txt-primary color-secondary text-[18px] text-center '>{about.badge}</h1>
                    </div>
                </div>

                <div className='space-y-5'>
                    <p className='color-secondary capitalize text-3 txt-primary '>{about.label}
                    </p>
                    <h1 className="text color-secondary font-bold p-0 txt-primary">
                        {about.heading}
                    </h1>

                    <p className=' text-2 txt-secondary color-secondary'>{about.description}</p>

                    <Buttonsec />



                </div>

                <div className='color-secondary '>
                    {about.details.map((item) => (
                        <div key={item.number} className='border-b pb-4 border-[rgba(22,67,51,0.12)] space-y-4 mt-4 first:mt-0'>
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
