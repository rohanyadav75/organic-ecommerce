import React from 'react'
import products from '../../data/product';
import Productcard from '../common/Productcard';

const Homeshop = () => {

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 mt-30 max-w-6xl mx-auto items-center ">
                {products.map((item, index) => (
                    <Productcard
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        description={item.description}
                    />
                ))}

            </div>


        </div>
    )
}

export default Homeshop
