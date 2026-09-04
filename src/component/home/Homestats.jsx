import React from 'react'
import { abthero } from '../../assest/images/img'
const Homestats = ({ image }) => {
    return (
        <div>
            <div className='relative w-full h-100 object-cover bg-fixed ' style={{ backgroundImage: `url(${abthero})` }}
            >                <div className='absolute inset-0 bg-secondary/85  p-20 md:flex gap-30  text-third items-center '>
                    <div className='txt-primary'>
                        <p className='uppercase text-3 text-fourth'>Our Value</p>
                        <h1 className=' md:text-3xl mt-5 leading-tight font-bold '>The way we work.<br/>Good for the day.</h1>
                    </div>


                    <div className='md:flex gap-20 items-center justify-items-center md:text-2 txt-primary '>

                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>24K</h1>
                            <p className='text-3'>trees supported</p>
                        </div>

                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>38</h1>
                            <p className='text-3'>Maker Partner</p>
                        </div>




                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>1</h1>
                            <p className='text-3'>Shared Planet</p>
                        </div>

                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>92%</h1>
                            <p className='text-3'>reusable packing</p>
                        </div>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homestats
