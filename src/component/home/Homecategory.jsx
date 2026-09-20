import React from 'react'
import { Link } from 'react-router-dom'
import homePage from '../../data/Home/data'
import Categorycard from '../common/Categorycard'

const Homecategory = () => {
    const { category = [] } = homePage
    return (
        <section className="p-5 grid grid-cols-5 justify-items-center divide-y- divide-secondary/12 shadow-md">
            {category.map(item => (
                <Link
                    key={item.id}
                    to="/shop"
                    state={{ ingredient: item.name }}
                    className="block transition-transform"
                >
                    <Categorycard image={item.image} name={item.name} />
                </Link>
            ))}
        </section>
    )
}

export default Homecategory
