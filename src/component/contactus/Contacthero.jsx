import React from 'react'
import { abthero, contacthero } from '../../assest/images/img'
import Button from '../common/Button'

const Contacthero = () => {
    return (
        <div>

            <img className='w-full h-screen object-cover object-[70%_40%]' src={contacthero} alt="" />
            <div className='absolute inset-0  grid justify-start content-center gap-5 px-20'>
                <p className='txt-secondary color-third uppercase text-3 px-5'>Contact Us</p>
                <h1 className='reltive txt-primary text-6xl color-third'>
                    A little more <span className='color-fourth'>wonder</span><br/> in the everyday.
                </h1>
                <p className='txt-secondary color-third'>Agriculture is the backbone of our society, providing food, materials, <br /> and economic stability. As the world population grows,
                    the need for sustainable <br /> farming practices has never been more critical.</p>
                <Button />

            </div>

        </div>
    )
}

export default Contacthero
