import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { swiperData } from "../Data";
import { motion, AnimatePresence } from "framer-motion";
import { carouselText } from "../animatation";
function Carousel({ menuOpen }) {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + swiperData.length) % swiperData.length
    );
  };
  const handleRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % swiperData.length);
  };

  return (
    <div>
      <FaAngleLeft
        size={32}
         className={`text-[#8dc9c8] absolute top-64 sm:top-56 md:top-96 left-2 cursor-pointer ${menuOpen ? "z-10" : "z-50"} opacity-50`}

        onClick={handleLeft}
      />
      <div className="pt-16 py-16 md:px-12 ">
        <div className="relative w-full h-[38vh] sm:h-[30vh] md:h-[30rem] ">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
          <AnimatePresence mode="wait">
            <motion.div 
            key={swiperData[index].id}
            >
              <motion.h1
                variants={carouselText(0.4)}
                initial="hidden"
                animate="visible"
                 exit="hidden"
                 className='text-2xl pt-10 ml-10 tracking-tight font-sans font-bold text-[#16FCFA] md:text-5xl md:mt-16 md:tracking-wide'
              >
                {swiperData[index].slogan}
              </motion.h1>

              <motion.h1
                variants={carouselText(0.6)}
                initial="hidden"
                animate="visible"
                 exit="hidden"
                  className='text-white text-4xl pt-3 ml-10 uppercase -tracking-tighter  font-sans font-bold md:text-6xl md:mt-5'
              >
                {swiperData[index].title}
              </motion.h1>

              <motion.h4
                variants={carouselText(0.8)}
                initial="hidden"
                animate="visible"
                 exit="hidden"
                className='pt-4 tracking-tighter max-w-60 ml-10 text-neutral-400 md:text-2xl md:max-w-full'
              >
                {swiperData[index].desc}
              </motion.h4>
            </motion.div>
            </AnimatePresence>
          </div>
          <div
            style={{ backgroundImage: `url(${swiperData[index].bgImg})` }}
            className="bg-cover bg-center bg-no-repeat w-full h-full rounded-lg"
          ></div>
        </div>
      </div>

      <FaAngleRight
        size={32}
        className="text-[#8dc9c8] absolute right-2 top-64 sm:top-56 md:top-96 cursor-pointer opacity-75"
        onClick={handleRight}
      />
    </div>
  );
}

export default Carousel;
