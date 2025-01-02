import React, { useRef } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { gsap } from "gsap";
function Pricing() {

  return (
    <div>
         <h2 className='text-3xl text-white sm:text-5xl lg:text-6xl text-center my-16 tracking-wide'>
            Plans
        </h2>
    <div className="flex flex-wrap gap-10 justify-center mt-10 mx-5"> 
      <div  className="border h-[35rem] w-96 border-[#16FCF9] rounded-lg ">
        <h1 className="text-neutral-300 text-center text-4xl font-sans tracking-wider pt-5 font-bold">
          Baic Plane
        </h1>
        <h1 className="text-neutral-300 border-b px-2 border-x-yellow-500   text-center text-3xl font-sans tracking-wider p-3 font-bold">
          <span className="text-[#16FCF9]">$30.00</span>/month
        </h1>
        <div className="flex justify-center items-center mb-6">
          <div className="py-6 px-3">
            <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
            <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
            <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
            <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          </div>
          <div className="text-neutral-400 font-sans text-lg  py-5 tracking-tighter">
            <p>Access to gym equipment</p>
            <p>Locker facilities</p>
            <p>1 group fitness class per week</p>
            <p>Open gym access</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="relative  h-12 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-20 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              Join Now
            </span>
          </button>
        </div>
      </div>

      <div className="border-2 rounded-lg shadow-2xl border-[#16FCF9] w-96">
        <h1 className="text-neutral-300 text-center text-4xl font-sans tracking-wider pt-5 font-bold">
        Standard Plan
        </h1>
        <h1 className="text-neutral-300 border-b px-2 border-x-yellow-500   text-center text-3xl font-sans tracking-wider p-3 font-bold">
          <span className="text-[#16FCF9]">$50.00</span>/month
        </h1>
        <div className="flex justify-center items-center mb-7">
          <div className="py-2 px-3 flex flex-col gap-1">
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          </div>
          <div className="text-neutral-400 font-sans text-lg  py-5 tracking-tighter">
            <p>Access to gym equipment</p>
            <p>Locker facilities</p>
            <p>Unlimited group fitness classes</p>
            <p>Personalized workout plan</p>
            <p>Free Gym Guru OutFit</p>
            <p>Upto 20% Discount on Gym Products</p>
            <p>Open gym access</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="relative mb-10 h-12 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              Join Now
            </span>
          </button>
        </div>
      </div>
      <div className="border border-[#16FCF9] rounded-lg shadow-md w-96 ">
        <h1 className="text-neutral-300 text-center text-4xl font-sans tracking-wider pt-5 font-bold">
        Premium Plan
        </h1>
        <h1 className="text-neutral-300 border-b px-2 border-x-yellow-500   text-center text-3xl font-sans tracking-wider p-3 font-bold">
          <span className="text-[#16FCF9]">$100.00</span>/month
        </h1>
        <div className="flex justify-center items-center mb-7">
          <div className="py-2 px-3 flex flex-col gap-1">
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />
          <IoIosCheckboxOutline size={24} className="text-[#16FCF9]" />

          </div>
          <div className="text-neutral-400 font-sans text-lg  py-5 tracking-tighter">
          <p>Access to gym equipment</p>
            <p>Locker facilities</p>
            <p>Unlimited group fitness classes</p>
            <p>Personalized workout plan</p>
            <p>Free Gym Guru OutFit</p>
            <p>Upto 30% Discount on Gym Products</p>
            <p>Open gym access</p>
            <p>Diet consultation</p>
            <p>Access to spa and pool</p>
            <p>Personal training sessions</p>
          </div>
        </div>
        <div className="flex mb-10 justify-center items-center">
          <button className="relative  h-12 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16FCFA_0%,#16FCFA_50%,#16FCFA_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950  px-16 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              Join Now
            </span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Pricing;
