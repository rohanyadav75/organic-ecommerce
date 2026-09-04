import React from 'react'

const Aboutcard = ({ image, title, description }) => {
    const src = image
    return (
        <div>
            <div className='grid items-center justify-items-center content-center'>
                <img src={src} className='object-cover shadow-2xl rounded-2xl w-[100%] h-70' alt={title} />
            </div>
            <div className=' '>
                <p className=''>{title}</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default Aboutcard
