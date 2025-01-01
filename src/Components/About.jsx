import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function About() {
//   const aboutRef = useRef(null)
  
//   useEffect(() =>{
//     gsap.fromTo(aboutRef.current.children,{
//       x:-50,
//       opacity:1
//     },
//   {
//     opacity:2,
//     duration:1.5,
//     delay:1,
//     stagger:1,
//     scrollTrigger: {
//       trigger: aboutRef.current,  
//       start: 'top 80%',           
//       end: 'bottom 50%',         
//       scrub: true,                
//       once: true,                
//     },
//   });
// }, []);
  return (
    <div className='lg:grid grid-cols-3 gap-10 p-16 md:py-32 md:px-36'>
      <div >
        <img className='pb-20 rounded-lg w-full h-96 shadow-lg md:w-[30rem] md:h-96 ' src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className='text-white col-span-2'>
        <h1 className='text-3xl font-sans font-bold uppercase'>About  
        <span className='text-[#16FCFA]'> gym guru</span></h1>
        <p className='pt-5 text-lg text-neutral-500 leading-9 w-full text-justify md:w-full pb-4'>Gym Guru is your ultimate destination for discovering and reviewing the <span className='text-[#16FCFA] font-medium'>best fitness centers</span> across the country. Our platform is designed to empower fitness enthusiasts by connecting them with gyms that excel in that <span className='text-[#16FCFA] font-medium'>service quality, customer satisfaction,</span> and commitment to wellness. Whether you’re a seasoned athlete or just beginning your fitness journey, Gym Guru provides the insights you need to find the perfect gym tailored to your goals.
       </p>
       <button className="hidden md:inline-flex relative  h-12 overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Become A Member
        </span>
      </button>
      </div>
    </div>
  )
}

export default About