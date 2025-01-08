import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import logo from "../assets/Logo.png"
import { footer } from '../animatation';
import { motion } from 'motion/react'
function Footer() {
  return (
    <>
    <div className='md:px-20 px-6 py-5'>
            <h1 className='text-white text-3xl tracking-widest font-sans font-semibold'>Contact Us</h1>
        </div>
    <div className='pt-10 pb-5 bg-[#0A0A0A]'>
        <div>
            <motion.div
            variants={footer(0.4)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className='text-white flex justify-center items-center space-x-8 pt-12 cursor-pointer'>
            <CiFacebook size={38}/>
            <FaInstagram size={38} />
            <CiYoutube size={38}/>
            <RiTwitterXLine size={38}/>
            </motion.div>

            <div className='text-white text-center pt-10'>
                <motion.h3
                variants={footer(0.6)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className='tracking-widest md:text-xl font-sans font-semibold max-w-[90%] mx-auto'>250 Executive park Blvd,Suite 3400 - San Francisco CA 96874 - United States </motion.h3>
            </div>
            <motion.div
            variants={footer(0.8)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className='text-white md:flex justify-center items-center pt-10 space-x-9'>
                <div className='flex gap-2 justify-center mb-3'>
                <MdLocalPhone size={28}/> 
               <h3 className='tracking-widest md:text-lg'>+123-456-789</h3>
                </div>
                <div className='flex gap-2 justify-center'>
                <CiMail size={28}/>
            <h3 className='tracking-widest md:text-lg'>gymguru@gmial.com</h3>
                </div>
            </motion.div>
            <div className='flex justify-center'>
                <motion.img
                 initial={{opacity:0, scale:0.5}}
                 whileInView={{opacity:1,scale:1}}
                 viewport={{ once: true }}
                 transition={{type:"spring", stiffness:30,delay:0.2,duration:1}}
                className='h-36'
                src={logo} alt="logo" />
            </div>
        </div>
    </div>
        <div >
         <h1 className='text-white text-center tracking-widest text-md font-sans font-semibold py-5'>&copy; 2022 Gym Guru. All rights reserved.</h1>
    </div>
    </>
  )
}

export default Footer