import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Information from "./Components/Information";
import About from "./Components/About";
import BmiCal from "./Components/BmiCal";
import Services from "./Components/Services";
import Trainers from "./Components/Trainers";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
          <div className="bg-black h-full w-full">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Carousel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Information />
            <section id="about">
              <About />
            </section>
            <BmiCal />
            <section id="service">
              <Services />
            </section>
            <Trainers />
            <section id="plans" className="my-20"></section>
            <Pricing />
            <Testimonial />
            <section id="contact">
              <Footer />
            </section>
          </div>
        
  );
}

export default App;
