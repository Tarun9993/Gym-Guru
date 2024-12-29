import React, { useEffect, useRef, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { swiperData } from "../Data"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Carousel() {
 
    const[index,setIndex] = useState(0)

    const handleLeft = () =>{
     setIndex((prevIndex) => (prevIndex - 1 + swiperData.length) % swiperData.length);
    }
    const handleRight = () =>{
     setIndex((prevIndex) => (prevIndex + 1) % swiperData.length);
    }

    const gsapSlogan = useRef(null)
    useEffect(() => {
        gsap.fromTo(
            gsapSlogan.current,
            {
                x: -80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1, 
                duration: 1,
                delay: 0.6,
            }
        );
    }, [index]);
    return (
        <div>
            <FaAngleLeft size={32} className='text-[#8dc9c8] absolute top-64 sm:top-56 md:top-96 left-4 cursor-pointer z-40' onClick={handleLeft}/>
                        <div className='py-16 md:px-16 p-12'>
                            <div className="relative w-full h-[38vh] sm:h-[30vh] md:h-[30rem] ">
                                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
                                    <div ref={gsapSlogan}>
                                    <h1   className='text-2xl pt-10 ml-1 tracking-tight font-sans font-bold text-[#16FCFA] md:text-6xl md:mt-16 md:tracking-wide'>{swiperData[index].slogan}</h1>
                                    <h1  className='text-white text-4xl pt-3 ml-1 uppercase -tracking-tighter  font-sans font-bold md:text-7xl md:mt-5'>{swiperData[index].title}</h1>
                                    <h4  className='pt-4 tracking-tighter max-w-60 text-neutral-400 md:text-2xl md:max-w-full'>{swiperData[index].desc}</h4>
                                    </div>
                                   
                                </div>
                                <div style={{ backgroundImage: `url(${swiperData[index].bgImg})` }}  className="bg-cover bg-center bg-no-repeat w-full h-full rounded-lg"></div>

                            </div>
                        </div>

            <FaAngleRight size={32} className='text-[#8dc9c8] absolute right-8 top-64 sm:top-56 md:top-96 cursor-pointer' onClick={handleRight} />
        </div>
    )
}

export default Carousel