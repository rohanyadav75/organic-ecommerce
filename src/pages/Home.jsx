import React, { useEffect } from 'react'
import AOS from 'aos';
import Homehero from '../component/home/Homehero';
import Homeabout from '../component/home/Homeabout';
import Homecategory from '../component/home/Homecategory';
import Homeshop from '../component/home/Homeshop';
import Homewhychoose from '../component/home/Homewhychoose';
import Homeimage from '../component/home/Homeimage';
import Footer from '../component/layouts/Footer';

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

      <Homehero />
      <Homecategory />
      <Homeabout />
      <Homeimage />
      <Homeshop/>
      <Homewhychoose />
      <Footer/>

    </>
  )
}

export default Home