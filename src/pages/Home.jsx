import React, { useEffect } from 'react'
// import './Home.css'
import { RoughNotation } from 'react-rough-notation'; // new import
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCloudUploadAlt, FaLock, } from 'react-icons/fa'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import AOS from 'aos';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PiLeafThin } from 'react-icons/pi';
import { CiWheat as WheatIcon } from 'react-icons/ci';
import { LuWheat } from 'react-icons/lu';

const blogPosts = [
  {
    date: "Mar 16, 2020",
    category: "Marketing",
    title: "Boost your conversion rate",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla...",
    image:
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-3.jpg",
  },
  {
    date: "Mar 10, 2020",
    category: "Sales",
    title: "How to use search engine optimization to drive sales",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    image:
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-5.jpg",
  },
  {
    date: "Feb 12, 2020",
    category: "Business",
    title: "Improve your customer experience",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrum sint anim sunt aliqua. Nulla eu labore irure...",
    image:
      "https://wp25.dynamiclayers.net/agrox/wp-content/uploads/sites/4/2025/02/project-6.jpg",
  },
];

const heroSlides = [
  {
    title: "Slide 1 Title",
    background: "bg-[url('/image/Home-1-slider.jpg')] bg-amber-50 opacity-60 slide",
  },
  {
    title: "Slide 2 Title",
    background: "bg-[url('/image/Home-2-slider.jpg')] bg-cover bg-center h-full flex items-center justify-center text-white text-4xl",
  },
  {
    title: "Slide 3 Title",
    background: "bg-[url('/image/Home-3-slider.jpg')] bg-cover bg-center h-full flex items-center justify-center text-white text-4xl",
  },
];

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
      easing: "ease-out-back", // a smoother easing effect

    });
  }, []);

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
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={slide.background}>{slide.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* About Us Section */}

      <div className="max-w-6xl mx-auto  grid md:grid-cols-2 items-center gap-40 mt-25">
        <div className='relative flex items-center justify-center'>
          <img className="rounded-lg shadow-2xl p-2  w-full max-w-sm" src="/image/About.jpg" alt="" />
          <img className='absolute -right-20 top-40 -translate-y-1/2 w-[35%]  md:w-60 ' src="/image/about-farmer.png" alt="" />

        </div>

        <div >
          <ul className='flex gap-2 items-center'>
            <h3 className='color-primary capitalize font-bold txt-primary'>30 years of agriculture experience
            </h3> <WheatIcon className='color-fourth rotate-90 text-4xl' />

          </ul>

          <h1 data-aos="fade-left" className="text-[44px] leading-tight color-secondary font-bold p-0 txt-secondary mt-3"
          >
            Harvesting Innovation For Better{" "}
            <RoughNotation
              type="underline"
              show={true}
              color="#F8C32C"
              strokeWidth={1}
              animationDuration={3000}
            >
              Tomorrow!
            </RoughNotation>
          </h1>

          <p data-aos="fade-up" className='mt-5 text-[14px] txt-secondary color-third'>Agriculture is the backbone of our society, providing food, materials, and economic stability.
            As the world population grows, the need for sustainable farming practices has never been more critical.</p>
          <ul data-aos="fade-up" className='flex mt-8 p-0 gap-5 '>
            <li className='flex  items-center gap-4'>
              <FaCloudUploadAlt className="color-primary text-7xl" />
              <p className='font-semibold text-[14px] txt-secondary color-secondary '>Growing Organic Fruits
                and Vegetables</p>
            </li>
            <li className='flex items-center gap-4'>
              <FaLock className="color-primary text-5xl" />
              <p className='font-semibold text-[14px] txt-secondary color-secondary  color-secondary '>Agribusiness Training
                and Workshops</p>
            </li>

          </ul>

          <ul data-aos="fade-up" className='leading-[1.8] mt-7 font-medium color-secondary gap-4'>
            <li className='flex items-center gap-2'><LuWheat className='text-xl color-fourth' /> Pioneering Excellence in the Agriculture Market</li>
            <li className='flex items-center gap-2'><LuWheat className='text-xl color-fourth' /> Pioneering Excellence in the Agriculture Market</li>
            <li className='flex items-center gap-2'><LuWheat className='text-xl color-fourth' /> Pioneering Excellence in the Agriculture Market</li>
          </ul>


        </div>
      </div>

      {/* Video section */}

      <video data-aos="zoom-in"
        src='video/agri.mp4' // For public folder videos
        loop
        autoPlay
        control
        muted
        className="w-full h-[600px] object-cover  mt-25 "
      // Optional: preview image
      >
      </video>


      {/* Services Section */}

      <div className="min-h-screen flex-col  text-center justify-center items-center p-8">
        <div className='mt-25 '>
          <div className="flex justify-center items-center gap-2">
            <h3 className='text-green-700 font-bold'>Our services!</h3>
            <WheatIcon className='color-fourth rotate-90 text-4xl' />
          </div>
          <h1 className='text-5xl color-secondary font-bold mt-3 leading-tight'>Delivering Top-Quality <br />
            Agricultural {''}
            <RoughNotation
              type="underline"
              show={true}
              color="#F8C32C"
              strokeWidth={2}
              animationDuration={3000}
            > Services!</RoughNotation></h1>
          <p className='mt-5 text-[18px]'>Agriculture is the backbone of our society, providing food, materials, and economic stability.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className=" rounded-lg overflow-hidden">
              <img
                src={post.image}
                // alt={post.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="mt-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>{post.date}</span>
                  <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                {/* <h3 className="text-white font-semibold text-lg mb-2">
                  {post.title}
                </h3> */}
                <p className="text-gray-400 text-sm">{post.title}</p>

              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Home