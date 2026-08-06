import React from 'react'
import { project } from '../../assest/images/img'

const Homeimage = () => {
    return (
        <div className='mt-30 w-full h-120'>
            <div className='relative w-full h-full '>
                <div className='absolute inset-0 bg-cover bg-center'
                    style={{ backgroundImage: `url(${project})` }}
                />
                <div className='absolute inset-0 bg-black/60' />
                <div className='relative z-10 flex items-center justify-center h-full'>
                    <h1 className='text-white'>hello</h1>
                </div>
            </div>
        </div>
    )
}

export default Homeimage
