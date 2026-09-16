import React from 'react'
import { abthero, cta } from '../../assest/images/img'
import Button from '../common/Button'
import homePage from '../../data/Home/data'

const { contact } = homePage

const HomeCTA = () => {
    return (
        <div>
            <div className='  object-cover ' style={{ backgroundImage: `url(${cta})` }}>
                <div className='p-20 grid justify-items-end items-center'>
                    <div className='txt-primary space-y-3 '>
                        <h1 className=' md:text-5xl mt-5 leading-tight text-third'>{contact.title}</h1>
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
