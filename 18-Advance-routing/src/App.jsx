import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import { Route, Routes, useParams } from "react-router-dom";
import NoFound from "./Pages/NoFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";
import Courses from "./Pages/Courses";
import CoursesDetail from "./Pages/CoursesDetail";
import Nav2 from "./Pages/Nav2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Nav />
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kid />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetail />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
