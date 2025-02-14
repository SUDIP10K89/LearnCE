import React from 'react'
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div id="home" className="flex flex-row bg-gradient-to-tl from-blue-500 to-purple-500 p-4 pt-25 pb-25 width-full gap-6">
    <div         
      className="flex flex-col items-center justify-center sm:w-1/2 sm:ml-20"
    >
      <h1 className="text-4xl pt-20 font-bold text-center text-white mb-8">
        LEARN CE
      </h1>
      <p className="my-5  text-white text-center">
        Empowering minds with knowledge, one resource at a time - your
        gateway to mastering computer engineering.
      </p>
      <button
        onClick={() => navigate("/semesters")}
        className="px-6 py-3 mt-5 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
      >
        View Resources
      </button>
    </div>
    <div className="w-100 hidden sm:block pt-10" >
      <img src="/assets/img/laptop.png" alt="laptop Image" />
    </div>
  </div>
  )
}

export default Hero
