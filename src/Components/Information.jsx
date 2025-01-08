import React, { useEffect, useRef } from 'react'
import { FaDumbbell } from "react-icons/fa";
import CountUp from 'react-countup';
import { motion } from 'motion/react';
function Information() {
  const text = "Transform Your Fitness Journey with Gym Guru";
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, 
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div>
    <div className=' flex flex-col items-center justify-center py-20'>
        <div className='md:flex md:gap-5'>
        <h1 className="flex text-4xl md:text-6xl tracking-wide font-sans font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-700 dark:from-neutral-300 dark:via-white dark:to-white">
      <span>GYM  </span>
      <motion.h1
       initial={{ opacity: 0, scale: 0.4, y: 300 }}
       whileInView={{ opacity: 1, scale: 0.9, y: 0, rotate: 720 }}
       whileHover={{ scale: 1 }}
       transition={{ duration: 1, ease: "easeInOut" }}
       viewport={{ once: true }}
        className="tracking-wide text-[#16FCFA]"
      >
        GURU
      </motion.h1>
    </h1>
    
    <motion.div
    animate={{y: [0, -40, 0],}}
    transition={{ duration: 1.5,
      repeat: Infinity,
      repeatType: "loop", 
      ease: "easeInOut",
     }}
    >
      <FaDumbbell size={50}  className='text-neutral-500 md:pt-3 md:ml-0 md:mt-0 ml-16 mt-6'/>
      </motion.div>
        </div>
        <motion.h1
       variants={container}
       initial="hidden"
       whileInView={"visible"}
        className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-100 dark:from-neutral-100 dark:via-white dark:to-white">
          {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char} {/* Handle spaces */}
        </motion.span>
      ))}
        </motion.h1>
    </div>
    <div className=" flex flex-wrap  items-center justify-center w-full gap-20 my-10">
        <div className='box text-white border border-[#16FCFA] px-12 py-12 shadow-xl rounded-lg cursor-pointer'>
         <h1 className='text-2xl font-bold tracking-widest'> <CountUp start={0} end={1200}  separator=',' suffix='+' duration={1.5} enableScrollSpy={true} scrollSpyOnce={true}></CountUp></h1>
         <h3 className='text-xl text-neutral-400 tracking-widest'>Members</h3>
        </div>
        <div className='text-white border border-[#16FCFA]  px-12 py-12 shadow-xl rounded-lg cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-widest'> <CountUp start={0} end={120} suffix='+' duration={1.5} enableScrollSpy={true} scrollSpyOnce={true}></CountUp></h1>
          <h3 className='text-xl text-neutral-400 tracking-widest'>Trainers</h3>
        </div>
        <div className='text-white border border-[#16FCFA]  px-10 py-10 shadow-xl rounded-lg cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-widest'> <CountUp start={0} end={13} suffix='+' duration={1.5} enableScrollSpy={true} scrollSpyOnce={true}></CountUp></h1>
          <h3 className='text-md text-neutral-400 tracking-widest max-w-28'>Years Of Experiences</h3>
        </div>
        <div className='text-white border border-[#16FCFA]  px-16 py-12 shadow-xl rounded-lg cursor-pointer'>
         <h1 className='text-2xl font-bold tracking-widest'> <CountUp start={0} end={30} suffix='+' duration={1.5} enableScrollSpy={true} scrollSpyOnce={true}></CountUp></h1>
         <h3 className='text-xl text-neutral-400 tracking-widest'>GYM'S</h3>
        </div>
    </div>
    </div>
  )
}

export default Information