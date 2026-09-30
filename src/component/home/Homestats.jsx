import React from 'react'
import { abthero } from '../../assest/images/img'
import homePage from '../../data/Home/data'

const { stats } = homePage
const Homestats = ({ image }) => {
    return (
        <div>
            <div className='relative w-full h-90 object-cover bg-fixed ' style={{ backgroundImage: `url(${abthero})` }}>
                <div className='absolute inset-0 bg-secondary/85  p-10 md:p-20 md:flex gap-30  text-third items-center '>
                    <div className='txt-primary'>
                        <p className='uppercase text-3 text-fourth'>{stats.label}</p>
                        <h1 className='text-2xl  mt-2 md:text-3xl md:mt-5 md:leading-tight font-bold '>{stats.heading}</h1>
                    </div>
                    <div className='grid grid-cols-2 mt- md:mt-0 md:flex md:gap-20 items-center justify-items-center md:text-2 txt-primary '>
                        {stats.items.map((item, index) => (
                            <div key={index} className=' md:border-l-1 border-third p-5'>
                                <h1 className='text font-bold'>{item.value}</h1>
                                <p className='text-3'>{item.label}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>


    )
}

export default Homestats
