import React, { useEffect } from 'react'
import Homehero from '../component/home/Homehero';
import Homeabout from '../component/home/Homeabout';
import Homecategory from '../component/home/Homecategory';
import Homeshop from '../component/home/Homeshop';
// import Homewhychoose from '../component/home/Homewhychoose';
import Footer from '../component/layouts/Footer';
import Homestats from '../component/home/Homestats';
import HomeCTA from '../component/home/HomeCTA';

const Home = () => {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000, // animation duration in milliseconds
  //     once: true, // whether animation should happen only once
  //     easing: "ease-out-back", // a smoother easing effect

  //   });
  // }, []);

  return (
    <>
      <Homehero />
      <Homecategory />
      <Homeshop />
      <Homeabout />
      <Homestats />
      <Homeshop />
      <HomeCTA />


    </>
  )
}

export default Home