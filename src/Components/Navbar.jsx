import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "motion/react";
import { navText } from "../animatation";
function Navbar({ menuOpen, setMenuOpen }) {
  const handleMenu = () => {
    tl.play();
  };
  const handleCross = () => {
    tl.reverse();
  };
  const backRef = useRef();
  const items = useRef();
  const buttonRef = useRef();
  var tl = gsap.timeline();

  useGSAP(() => {
    tl.from(backRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.4,
    }),
      tl.from(items.current.children, {
        x: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
      }),
      tl.from(buttonRef.current, {
        x: 80,
        opacity: 0,
        duration: 0.4,
      });
  });
  tl.pause();
  return (
    <div>
      <nav className="text-white flex justify-between px-5 py-1 items-center overflow-auto ">
        <div>
          <img src={logo} alt="logo" className="h-[5rem] cursor-pointer z-50" />
        </div>
        <ul
          className="hidden md:flex gap-10 font-sans text-[1.20rem] font-medium text-gray-300"
        >
          <motion.li
          variants={navText(0.2)}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 30,
            delay: 0.2,
            duration: 1,
          }}
          className="relative group cursor-pointer z-50">Home</motion.li>
          <ScrollLink to="about" smooth={true} duration={900} offset={-70}>
            <motion.li
             variants={navText(0.3)}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 30,
            delay: 0.2,
            duration: 1,
          }} className="relative group cursor-pointer z-50">About</motion.li>
          </ScrollLink>
          <ScrollLink to="service" smooth={true} duration={900} offset={-70}>
            <motion.li
             variants={navText(0.4)}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 30,
            delay: 0.2,
            duration: 1,
          }} className="relative group cursor-pointer z-50">Services</motion.li>
          </ScrollLink>
          <ScrollLink to="plans" smooth={true} duration={900} offset={-70}>
            <motion.li
             variants={navText(0.5)}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 30,
            delay: 0.2,
            duration: 1,
          }} className="relative group cursor-pointer">Plans</motion.li>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={900} offset={-70}>
            <motion.li
             variants={navText(0.6)}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 30,
            delay: 0.2,
            duration: 1,
          }} className="relative group cursor-pointer">Contact</motion.li>
          </ScrollLink>
        </ul>
        <div>
          <button className="hidden md:inline-flex relative  h-12 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Become A Member
            </span>
          </button>
        </div>
        <IoMenu
          size={36}
          className="md:hidden h-10 w-9 cursor-pointer"
          onClick={handleMenu}
        />
      </nav>
      <div>
        <nav
          ref={backRef}
          className="absolute top-0 left-0 bg-black w-1/2 h-full z-40"
        >
          <ul
            ref={items}
            className="flex flex-col gap-10 ml-12 mt-20 mb-7 pt-6 font-sans md:text-[1.75rem] font-medium text-gray-300 "
          >
            <li>Home</li>
            <ScrollLink to="about" smooth={true} duration={900} offset={-70}>
              <li>About</li>
            </ScrollLink>
            <ScrollLink to="service" smooth={true} duration={900} offset={-70}>
              <li>Services</li>
            </ScrollLink>
            <ScrollLink to="planes" smooth={true} duration={900} offset={-70}>
              <li className="z-50">Plans</li>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={900} offset={-70}>
              <li>Contact</li>
            </ScrollLink>
          </ul>

          <button
            ref={buttonRef}
            className="inline-flex relative  h-12 overflow-hidden rounded-full p-[1px] ml-7"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-1 text-sm tracking-tighter font-medium text-white backdrop-blur-3xl hover:bg-[#0e3a38]">
              Become A Member
            </span>
          </button>
          <RxCross2
            size={28}
            className="absolute top-0 right-0 m-10 text-white cursor-pointer"
            onClick={handleCross}
          />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
