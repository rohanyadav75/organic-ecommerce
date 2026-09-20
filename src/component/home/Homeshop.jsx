import React from 'react'
import shop from '../../data/Shop/data'
import Aboutcard from '../common/Aboutcard'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

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

            <div className='grid grid-cols-4 items-center gap-10 p-20'>
                {shop.slice(0, 4).map((data) => (
                    <div key={data.id}>
                        <Link
                            to={`/product/${data.id}`}
                            state={{ product: data }}
                            className="block"
                        >
                            <Aboutcard image={data.image} />
                            <div className='txt-primary text-secondary mt-5 flex items-center justify-between'>
                                <span className='text-[16px]'>{data.name}</span>
                                <span className='text-3'>₹{data.price}</span>
                            </div>
                            <p className='text-3 mt-2 txt-primary'>{data.category}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homeshop
