import React from 'react'
import { abthero } from '../../assest/images/img'
import Button from '../common/Button'
import { organic } from '../../assest/videos/video'

const Homehero = () => {
  return (
    <div>
      <div className='relative overflow-hidden'>
        <video
          className='h-auto w-full object-cover'
          src={organic}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        {/* <img  src={abthero} alt="" /> */}
        <div className='absolute inset-0 bg-secondary/85 grid justify-start content-center gap-5 px-20'>
          <p className='txt-secondary  text-3 color-third uppercase px-5'>About Us</p>
          <h1 className='reltive txt-primary text-6xl color-third'>
            A little more <span className='color-fourth'>wonder</span><br /> in the  everyday.
          </h1>
          <p className='txt-secondary color-third'>Agriculture is the backbone of our society, providing food, materials, <br /> and economic stability. As the world population grows,
            the need for sustainable <br /> farming practices has never been more critical.</p>
          <Button />

        </div>
      </div>
    </div>
  )
}

export default Homehero








// import React, { useEffect, useState } from 'react'
// import Homeherodata from '../../data/Homeherodata';
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   Pagination,
//   Navigation,
//   EffectFade,
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// import { motion } from "framer-motion";


// const Homehero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [typedHeadline, setTypedHeadline] = useState("");
//   const [showCursor, setShowCursor] = useState(true);

//   const currentTitle = Homeherodata[activeIndex]?.title || "Pure Organic Harvest";

//   useEffect(() => {
//     let index = 0;
//     setTypedHeadline("");
//     setShowCursor(true);

//     const typingInterval = setInterval(() => {
//       setTypedHeadline((prev) => prev + currentTitle[index]);
//       index += 1;
//       if (index >= currentTitle.length) {
//         clearInterval(typingInterval);
//         setTimeout(() => setShowCursor(false), 1000);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//   }, [currentTitle]);

//   return (
//     <div>
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         effect="fade"
//         speed={1500}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//         }}
//         navigation
//         pagination={{
//           clickable: true,
//         }}
//         onSlideChange={(swiper) => {
//           setActiveIndex(swiper.realIndex);
//         }}
//         className="h-screen"

//       >
//         {Homeherodata.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-screen ">

//               {/* Background */}
//               <motion.img
//                 src={slide.backgroundImage}
//                 alt={slide.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//                 initial={{ scale: 1 }}
//                 animate={{
//                   scale: activeIndex === index ? 1.15 : 1,
//                 }}
//                 transition={{
//                   duration: 5, // same as autoplay delay
//                   ease: "linear",
//                 }}
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/55"></div>

//               {/* Content */}
//               <div className="relative z-10 flex h-full items-center justify-center text-center">

//                 <div>

//                   <motion.p
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="text-green-400 tracking-widest uppercase"
//                   >
//                     Welcome
//                   </motion.p>

//                   <motion.h1
//                     initial={{ opacity: 0, y: 70 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 1,
//                       delay: 0.4,
//                     }}
//                     className="text-6xl font-bold text-white"
//                   >
//                     {typedHeadline}
//                     <motion.span
//                       animate={{ opacity: [0, 1, 0] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                       className="inline-block ml-2 h-10 w-1 rounded-sm bg-white"
//                       style={{ visibility: showCursor ? 'visible' : 'hidden' }}
//                     />
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{
//                       delay: 0.8,
//                     }}
//                     className="mt-6 text-gray-200 max-w-xl mx-auto"
//                   >
//                     Agriculture solutions for modern farming.
//                   </motion.p>

//                   <motion.button
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{
//                       delay: 1,
//                     }}
//                     whileHover={{
//                       scale: 1.08,
//                     }}
//                     className="mt-8 bg-green-600 px-8 py-4 rounded-full font-semibold"
//                   >
//                     Explore More
//                   </motion.button>

//                 </div>

//               </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

// export default Homehero
