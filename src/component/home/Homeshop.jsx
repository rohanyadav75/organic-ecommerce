import React from 'react'
import shop from '../../data/Shop/data'
import Aboutcard from '../common/Aboutcard'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide, } from 'swiper/react'
import './Swiper.css'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import Productcard from '../common/Productcard'





const Homeshop = ({ wishlist = [], toggleWishlist = () => {} }) => {
    return (
        <div>
            <div className='grid grid-cols-2 p-1 justify-items-start gap-0 mt-5 md:grid-cols-2 items-center md:justify-items-center md:gap-30 md:mt-20'>
                <div className='p-1 md:p-0 txt-primary text-secondary '>
                    <p className='uppercase text-3'>Our Value</p>
                    <h1 className='leading-none mt-2 text-[18px]  font-semibold md:font-bold md:text-5xl  md:mt-0 md:leading-tight'>The way we work.</h1>
                </div>
                <div className='px-0 mt-5 md:mt-0 text-2 txt-secondary  md:px-30'>
                    <Button />
                </div>
            </div>

            {/* SWIPER SLIDER */}

            <div className='relative p-5 md:p-0 mt-10 md:mt-20 max-w-6xl mx-auto'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    autoplay={{ delay:3000, disableOnInteraction: true }}
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
                            >
                                <Productcard {...data} wishlist={wishlist} toggleWishlist={toggleWishlist} />
                                {/* <div className='txt-primary text-secondary mt-5 flex items-center justify-between'>
                                    <span className='text-[16px]'>{data.name}</span>
                                    <span className='text-3'>₹{data.price}</span>
                                </div>
                                <p className='text-3 mt-2 txt-primary'>{data.category}</p> */}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button type='button' className='custom-prev' aria-label='Previous slide'>
                    <span aria-hidden='true'>‹</span>
                </button>
                <button type='button' className='custom-next' aria-label='Next slide'>
                    <span aria-hidden='true'>›</span>
                </button>
            </div>


        </div>
    )
}

export default Homeshop
