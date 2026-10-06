import React from 'react'
import { Link } from 'react-router-dom'
import homePage from '../../data/Home/data'
import Categorycard from '../common/Categorycard'

const Mobilecategory = ({ onClose }) => {
    const { category = [] } = homePage

    return (
        <div className="mt-4 ">
            <p className='uppercase text-3  tracking-[5px]'>Ingredients</p>
            <div className="grid grid-cols-3 items-center justify-items-center ">
                {category.map(item => (
                    <Link
                        key={item.id}
                        to="/shop"
                        state={{ ingredient: item.name }}
                        onClick={onClose}

                        className="flex w-full justify-center mt-3 p-0 transition-transform "
                    >
                        <Categorycard image={item.image} name={item.name} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Mobilecategory
