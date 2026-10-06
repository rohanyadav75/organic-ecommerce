import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import homePage from '../../data/Home/data'
import Categorycard from '../common/Categorycard'

const Homecategory = () => {
    const { category = [] } = homePage
    return (
        <div>
            {/* ONLY VIEW IN DESKTOP */}
            <div className="hidden md:grid p-2 grid-cols-5 justify-items-center shadow-md">

                {category.map(item => (
                    <Link
                        key={item.id}
                        to="/shop"
                        state={{ ingredient: item.name }}
                        className="  transition-transform"
                    >
                        <Categorycard image={item.image} name={item.name} />
                    </Link>
                ))}

            </div>

            <div className='p-5 md:hidden md:p-0 mt- txt-primary text-secondary '>
                <p className='uppercase text-3'>Ingredients</p>
            </div>
            <div className=' grid grid-cols-3 gap-y-3'>
                {category.map((item) => (
                    <Link
                        key={item.id}
                        to="/shop"
                        state={{ ingredient: item.name }}
                        className=" md:hidden  transition-transform"
                    >
                        <Categorycard image={item.image} name={item.name} />
                    </Link>
                ))}
            </div>





        </div>



    )
}

export default Homecategory
