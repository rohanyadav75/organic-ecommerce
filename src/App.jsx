import React, { useEffect, useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Header from './component/layouts/Header';
import Footer from './component/layouts/Footer';
import Contact from './pages/Contact';
import Productdetail from './pages/Productdetail';
import Wishlist from './pages/Wishlist';

const App = () => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some((item) => item.id === product.id);

      if (exists) {
        return currentWishlist.filter((item) => item.id !== product.id);
      }

      return [...currentWishlist, product];
    });
  };

  return (
    <Router>
      <div>
        <Header wishlistCount={wishlist.length} />
        <div className="page-spacer" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
          <Route path='/wishlist' element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Productdetail />} />
          {/* <Route path='/product/:slug' element={<Productdetail />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
