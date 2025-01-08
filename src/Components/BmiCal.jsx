import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
function BmiCal() {

    const[age,setAge] = useState("")
    const[weight,setWeight] = useState("")
    const[height,setHeight] = useState("")
    const [bmi,setBmi] = useState("")
    const[msg,setMsg] = useState("")
    const [color, setColor] = useState("");
    const[success,setSuccess] = useState(false)
    console.log(age);
    console.log(weight);
    console.log(height);
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if (!age || !weight || !height || height <= 0 || weight <= 0) {
          alert("Please enter valid age, weight, and height values.");
          return;
        }
        const w = weight; 
       const heightInMeters = height / 100; 
       const h = heightInMeters * heightInMeters; 
       const bmi = w / h;
        setBmi(bmi.toFixed(2)); 
        if(bmi < 18.5){
          setMsg("Underweight - You might need to gain some weight.");
          setColor("text-yellow-500");
          toast.warning("⚠️ You are underweight! Consider gaining some weight.");
        }  
        else if(bmi >= 18.5 && bmi < 24.9){
          setMsg("Normal Weight - Great job! Keep maintaining your weight.");
          setColor("text-green-500");
          toast.success("🎉 Congratulations! You have a normal BMI!");
        }
        else if(bmi >= 24.9 && bmi < 29.9){
          setMsg("Overweight - Consider regular exercise and a balanced diet.");
          setColor("text-yellow-500");
          toast.warning("⚠️ You are overweight! Time to focus on your fitness.");
        }
        else{
          setMsg("Obese - Consult a healthcare provider for advice.");
          setColor("text-red-500");
          toast.error("🚨 Obesity Alert! Please consult a healthcare provider.");
        }
       setSuccess(true);
    }

    
    
  return (

    <div>
       <ToastContainer />
    <div className="text-neutral-300 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-4xl mx-auto text-center relative z-20 py-2 tracking-widest">
        BMI Calculator
      </h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 px-6 md:px-10 lg:px-36 mx-24">
      <form onSubmit={handleSubmit}>
      <div className="rounded-xl shadow-2xl flex flex-col px-6 py-6 sm:px-12 sm:py-12 md:px-16 md:py-16 justify-center items-center">
        <input
          className="block w-full sm:w-10/12 px-5 md:px-8 py-2 mb-6 rounded border-none focus:outline-none bg-neutral-200 text-gray-950 shadow-xl"
          type="number"
          id="age"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="block w-full sm:w-10/12 px-5 md:px-8 py-2 mb-6 rounded border-none focus:outline-none bg-neutral-200 text-gray-950 shadow-xl"
          type="number"
          id="weight"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className="block w-full sm:w-10/12 px-5 md:px-8 py-2 mb-6 rounded border-none focus:outline-none bg-neutral-200 text-gray-950 shadow-xl"
          type="number"
          id="height"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button
          className="block w-full sm:w-10/12 px-5 md:px-8 py-2 mb-6 text-white bg-slate-950 rounded-xl border border-[#16FCFA] hover:bg-slate-900 focus:outline-none shadow-xl text-xl tracking-widest"
          type="submit">Calculate BMI</button>
          
      </div>
      </form>
  
      <div>
      {success && (
            <div className="mt-2 text-center md:hidden">
              <p className="text-xl font-semibold text-neutral-300">Your BMI: {bmi}</p>
              <p className={`text-xl font-bold ${color}`}>{msg}</p>
            </div>
          )}
        <p className='pt-5 mt-5 text-lg text-neutral-400  w-full text-justify md:w-full pb-4'>
        A BMI Calculator is a tool used to compute the Body Mass Index (BMI), which is a numerical value derived from a person’s weight and height is also. It is widely used to determine the whether an individual has a healthy body weight for their height and assess potential health risks associated with it.
          </p>
          {success && (
            <div className="hidden md:block mt-6 text-center">
              <p className="text-xl font-semibold text-neutral-300">Your BMI: {bmi}</p>
              <p className={`text-xl font-bold ${color}`}>{msg}</p>
            </div>
          )}
       
      </div>
    </div>
  </div>
  
)
}

export default BmiCal