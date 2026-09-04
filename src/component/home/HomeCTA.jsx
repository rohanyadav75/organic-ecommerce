import React from 'react'
import { abthero, cta } from '../../assest/images/img'
import Button from '../common/Button'

const HomeCTA = () => {
    return (
        <div>
            <div className=' w-full h-100 object-cover ' style={{ backgroundImage: `url(${cta})` }}>
                <div className='p-20 grid justify-items-end items-center'>
                    <div className='txt-primary space-y-3 '>
                        <h1 className=' md:text-5xl mt-5 leading-tight text-third'>The way we work.<br />Good for the day.</h1>
                        <p className='text-third'>Agriculture is the backbone of our society,<br /> providing food, materials,
                            and economic stability.</p>
                        <Button />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default HomeCTA
