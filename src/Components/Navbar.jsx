import React, { useEffect, useRef, useState } from 'react'
// import logo from "./Logo.png"
import logo from "../assets/Logo.png"
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Navbar() {

  const[menu,setMenu] = useState()
  const handleMenu = () => {
    console.log("menu");
    tl.play() 
  }
  const handleCross = () =>{
    console.log("cross");
    tl.reverse()
  }
  const backRef = useRef()
  const items = useRef();
  const buttonRef = useRef()
  var tl = gsap.timeline();

  useGSAP(() =>{
    tl.from(backRef.current,{
      x:-50,
      opacity:0,
      duration:0.2,
    }),
    tl.from(items.current.children, {
      x:50,
      opacity:0,
      duration:0.7,
      delay:0.4,
      stagger: 0.2,
    }),
    tl.from(buttonRef.current,{
      x:80,
      opacity:0,
      duration:0.6,
    })
  })
  tl.pause()
  return (
  <div>
    <nav className='text-white flex justify-between px-10 py-1 items-center'>
    <div>
       <img src={logo} alt="logo" className='h-[5rem]'/>
    </div>
    <ul className='hidden md:flex gap-10 font-sans text-[1.20rem] font-medium text-gray-300'>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Services</a></li>
      <li><a href='#'>Plans</a></li>
      <li><a href='#'>Contact</a></li>
    </ul>
    <div>
    <button className="hidden md:inline-flex relative  h-12 overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Become A Member
        </span>
      </button>
    </div>
      <IoMenu size={36} className='md:hidden h-10 w-9' onClick={handleMenu}/>
    </nav>
   <div>
   <nav ref={backRef} className='absolute top-0 left-0 bg-black w-1/2 h-full'>
      <ul ref={items}  className='flex flex-col gap-10 ml-7 mt-20 mb-7 font-sans text-[1.75rem] font-medium text-gray-300'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Plans</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    
    <button ref={buttonRef} className="inline-flex relative  h-12 overflow-hidden rounded-full p-[1px] ml-7">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
         Become A Member
        </span>
      </button>
      <RxCross2 size={28} className='absolute top-0 right-0 m-10 text-white'
      onClick={handleCross}/>
    </nav>
   </div>
  </div>
    
  )
}

export default Navbar