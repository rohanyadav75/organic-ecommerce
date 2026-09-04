import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Header from './component/layouts/Header';
import Footer from './component/layouts/Footer';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
