import React, { useRef } from "react";
import { Service } from "../Data";
import { LuMoveRight } from "react-icons/lu";
import { gsap } from "gsap";

function Services() {
  const cardRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1.1,          
      duration: 1,         
      ease: "back.out(1.7)",   
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1,              
      duration: 1,        
      ease: "power2.out",    
    });
  }

  return (
    <div className="my-6">
      <div className="flex justify-center">
        <h1 className="text-white sm:text-3xl text-2xl tracking-widest font-sans md:text-4xl">
          Our Services
        </h1>
      </div>
      <div className="p-3 gap-5 grid lg:grid-cols-4 md:grid-cols-2 ">
        {Service.map((item,index) => {
          return (
            <div key={item.id} className="mx-10 my-5 ">
                <div className="">
                <div
                ref={(el) => (cardRefs.current[index] = el)} // Assign a ref to each card
                onMouseEnter={() => handleMouseEnter(index)} // Pass the card's index
                onMouseLeave={() => handleMouseLeave(index)} // Pass the card's index
                className={`cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto p-4`}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
