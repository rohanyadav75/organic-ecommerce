import React from 'react'
import shop from '../../data/Shop/data'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar
} from 'swiper/modules'

import Productcard from './Productcard'

const Mobileproduct = ({ onClose, wishlist = [], toggleWishlist = () => {} }) => {

    return (
        <div>

            <div className='p-1 txt-primary text-secondary '>
                <p className='uppercase text-3 mt-5 tracking-[5px]'>Feature Products</p>
            </div>
            {/* SWIPER SLIDER */}
            <div className="relative  max-w-6xl mx-auto">

                <Swiper
                    modules={[
                        Navigation,
                        Scrollbar,
                        Autoplay
                    ]}
                    // pagination={{
                    //     clickable: true,
                    //     dynamicBullets: true,
                    //     bulletClass: 'swiper-pagination-bullet',
                    //     bulletActiveClass: 'swiper-pagination-bullet-active'
                    // }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >

                    {shop.map((data) => (

                        <SwiperSlide key={data.id}>

                            <Link
                                to={`/product/${data.id}`}
                                state={{ product: data }}
                                className="block"
                                onClick={onClose}
                            >

                                <Productcard {...data} wishlist={wishlist} toggleWishlist={toggleWishlist} />

                            </Link>

                        </SwiperSlide>

                    ))}

                </Swiper>

                <button
                    type="button"
                    className="custom-prev"
                    aria-label="Previous slide"
                >
                    <span aria-hidden="true">‹</span>
                </button>

                <button
                    type="button"
                    className="custom-next"
                    aria-label="Next slide"
                >
                    <span aria-hidden="true">›</span>
                </button>

            </div>

        </div>
    )
}

export default Mobileproduct