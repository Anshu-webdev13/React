import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import {Route, Routes} from 'react-router-dom'
import NoFound from './Pages/NoFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kid from './Pages/Kid'

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Nav />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kid />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
