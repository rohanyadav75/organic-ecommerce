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

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                loop={true}
                spaceBetween={0}
                slidesPerView={2}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    
                }}
                className=' block shadow-md md:hidden'
            >

                {category.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link
                            key={item.id}
                            to="/shop"
                            state={{ ingredient: item.name }}
                            className=" md:hidden  transition-transform"
                        >
                            <Categorycard image={item.image} name={item.name} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>



    )
}

export default Homecategory
