import React, { useRef } from "react";
import { Service } from "../Data";
import { LuMoveRight } from "react-icons/lu";
import { motion } from "motion/react";


function Services() {


  return (
    <div className="my-6">
      <div className="flex justify-center">
        <h1 className="text-white sm:text-3xl text-2xl tracking-widest font-sans md:text-4xl">
          Our Services
        </h1>
      </div>
      <div className="mx-6 p-1 gap-5 grid lg:grid-cols-4 md:grid-cols-2 ">
        {Service.map((item) => {
          return (
            <motion.div
            whileHover={{
              rotateY: 10, 
              rotateX: -5, 
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 8, 
            }}
            key={item.id} className="mx-10 my-5 ">
                <div className="">
                <div
                className={`cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto p-1`}
                style={{
                  backgroundImage: `linear-gradient(to top, black, transparent), url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                    <h1 className="absolute top-56 text-2xl font-semibold text-white">{item.title}</h1>
                    <p className="absolute top-64 text-sm tracking-tight pt-2 text-neutral-400">{item.desc}</p>
                    <button className=" absolute bottom-3 left-16 md:left-32 lg:left-16 sm:left-24  px-4 py-2 bg-slate-950 rounded-lg text-neutral-200 flex gap-2 ">Read More <LuMoveRight size={20} className="text-white mt-1"/>
                    </button>
                </div>
                </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
