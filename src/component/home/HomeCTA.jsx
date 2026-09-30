import React from 'react'
import { abthero, cta } from '../../assest/images/img'
import Button from '../common/Button'
import homePage from '../../data/Home/data'

const { contact } = homePage

const HomeCTA = () => {
    return (
        <div>
            <div className='home-cta object-cover content-center h-75 md:mt-10 md:h-100' style={{ backgroundImage: `url(${cta})` }}>
                <div className='p-5 md:p-20 grid justify-items-end items-center  '>
                    <div className='txt-primary space-y-3 '>
                        <h1 className='font-bold text-[30px] md:text-5xl  md:mt-5 leading-tight text-third'>{contact.title}</h1>
                        <p className='text-third'>Discover small-batch soaps made with clear,<br /> simple ingredients and soft natural scents.<br /> Choose a bar that fits your daily routine.
                        </p>
                        <Button />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default HomeCTA
