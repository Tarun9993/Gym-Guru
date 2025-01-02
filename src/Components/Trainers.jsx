import React, { useEffect, useRef } from 'react'
import { trainers } from "../Data"
import { LuMoveRight } from "react-icons/lu";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
function Trainers() {

  return (
    <div>
        <div className="flex justify-center mt-10">
        <h1 className="text-white sm:text-3xl text-2xl tracking-widest font-sans md:text-4xl">
            Our Expert Trainers
        </h1>
        </div>
        <div  className='grid gap-5  lg:grid-cols-4 md:grid-cols-2 m-10'>
            {trainers.map((item) =>{
                return(
                <div key={item.id} >
                    <div className='cursor-pointer overflow-hidden relative card h-80 w-72 rounded-lg shadow-xl max-w-sm mx-auto  p-4'>
                    <img src={item.img} alt="" />
                    </div>
                    <div className='ml-12 mt-3 lg:ml-12 md:ml-20 cursor-pointer'>
                    <h1 className='text-white text-xl font-sans font-semibold'>{item.name}</h1>
                    <p className='text-neutral-400 text-md '>{item.specialty}</p>
                    </div>
                </div>
                )
            })}
        </div>
        <div className='flex justify-center items-center'>
        <button className="relative  h-12 overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
       See More Trainers <LuMoveRight size={20} className="text-white mt-1 ml-3"/>
        </span>
        
      </button>
        </div>
    </div>
  )
}

export default Trainers