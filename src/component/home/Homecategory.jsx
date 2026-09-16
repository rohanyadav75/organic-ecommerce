import React from 'react'
import homePage from '../../data/Home/data'
import Categorycard from '../common/Categorycard'

const Homecategory = () => {
    const { category = [] } = homePage
    return (
        <section className="p-5 grid grid-cols-5 justify-items-center divide-y-1 divide-secondary/12 shadow-md">
            {category.map(item => (
                <Categorycard key={item.id} image={item.image} name={item.name}
                />
            ))}
        </section>
    )
}

export default Homecategory
