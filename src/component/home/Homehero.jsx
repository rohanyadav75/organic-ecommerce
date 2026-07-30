import React from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { home1, home2, home3 } from '../../assest/images/img'
import Homeherodata from '../../data/Homeherodata';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Homehero = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[90vh]"
      >
        {Homeherodata.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-4xl" style={{
              backgroundImage: `url(${slide.background})`,
            }}>{slide.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Homehero;
