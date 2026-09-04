import React from 'react'
import shop from '../../data/Home/shop'
import Aboutcard from '../common/Aboutcard'
import Button from '../common/Button'


const Homeshop = () => {


    return (
        <div>

            <div className='md:grid grid-cols-2 items-center justify-items-center gap-30 mt-20'>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3'>Our Value</p>
                    <h1 className='text-5xl  leading-tight'>The way we work.</h1>
                </div>
                <div className='text-2 txt-secondary  px-30'>
                    <Button />
                </div>
            </div>

            <div className='grid grid-cols-4 items-center gap-10 p-20 '>

                {shop.map((data) => (
                    <div>
                        <Aboutcard image={data.image} />
                        <div className='txt-primary mt-5  '>
                            <p className='text-secondary text-3'>{data.title}</p>
                            <p>{data.description}</p>
                        </div>


                    </div>


                ))}

            </div>



        </div>
    )
}

export default Homeshop
