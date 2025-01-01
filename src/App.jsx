import React, { useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Information from './Components/Information';
import About from './Components/About';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const informationRef = useRef(null);
  const aboutRef = useRef(null);


  useEffect(() => {
    gsap.fromTo(informationRef.current,
      {
        x: -80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
          trigger: informationRef.current,
          start: 'top 90%',
          end: "bottom 80%",
          scrub: true, 
        }
      });

    
    gsap.fromTo(aboutRef.current,
      {
        x: -80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 90%',
          end: "bottom 80%",
          scrub: true, 
        }
      });

  }, []);


  return (
    <div className="bg-black h-full w-full">
      
        <Navbar />
        <Carousel />
        <div ref={informationRef}>
              <Information />
            </div>
            <section id="about">
            <div ref={aboutRef}><About /></div>
            </section>
       
    </div>
  );
}

export default App;