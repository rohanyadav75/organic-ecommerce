import React from 'react'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Header from './component/layouts/Header';
import Footer from './component/layouts/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
