import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDumbbell } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
function Information() {

  const bounceRef = useRef()
  useEffect(() =>{
    gsap.to(bounceRef.current, {
      y: -30,               
      duration: 0.5,          
      // ease: "bounce.out",  
      repeat: -1,           
      yoyo: true            
    });
  }, []);

   
  return (
    <div>
    <div className=' flex flex-col items-center justify-center py-20'>
        <div className='md:flex md:gap-5'>
    <h1 className='text-4xl md:text-6xl tracking-wide font-sans font-bold  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-700 dark:from-neutral-300 dark:via-white dark:to-white'><span>GYM</span> <span className='tracking-wide text-[#16FCFA]'>GURU</span></h1>
    
    <div ref={bounceRef}>
      <FaDumbbell size={50}  className='text-neutral-500 md:pt-3 md:ml-0 md:mt-0 ml-16 mt-6'/>
      </div>
        </div>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-100 dark:from-neutral-100 dark:via-white dark:to-white">"Transform Your Fitness Journey with Gym Guru"</h1>
    </div>
    <div className=" flex flex-wrap  items-center justify-center w-full gap-20 my-10">
        <div className='box text-white border border-[#16FCFA] px-12 py-12 shadow-xl rounded-lg cursor-pointer'>
         <h1 className='text-2xl font-bold tracking-widest'>1200 +</h1>
         <h3 className='text-xl text-neutral-400 tracking-widest'>Members</h3>
        </div>
        <div className='text-white border border-[#16FCFA]  px-12 py-12 shadow-xl rounded-lg cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-widest'>120 +</h1>
          <h3 className='text-xl text-neutral-400 tracking-widest'>Trainers</h3>
        </div>
        <div className='text-white border border-[#16FCFA]  px-10 py-10 shadow-xl rounded-lg cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-widest'>13 +</h1>
          <h3 className='text-md text-neutral-400 tracking-widest max-w-28'>Years Of Experiences</h3>
        </div>
        <div className='text-white border border-[#16FCFA]  px-16 py-12 shadow-xl rounded-lg cursor-pointer'>
         <h1 className='text-2xl font-bold tracking-widest'>30+</h1>
         <h3 className='text-xl text-neutral-400 tracking-widest'>GYM'S</h3>
        </div>
    </div>
    </div>
  )
}

export default Information