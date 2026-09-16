import React from 'react'



const Productdetail = ({image,name,category,}) => {
    return (
        <div>
            <div className='grid items-center justify-items-center mt-20 grid-cols-12 bg-primary'>
                <div className='col-span-6'>
                    <h1 className='text-white'>{name}</h1>

                </div>
                <div className=' col-span-6'>
                    <h1>Rohan</h1>

                </div>
            </div>
        </div>
    )
}

export default Productdetail
