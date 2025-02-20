import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Content Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            LEARN
                            <span className="block mt-2">COMPUTER ENGINEERING</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-blue-100 max-w-lg mx-auto md:mx-0">
                            Empowering minds with knowledge, one resource at a time - your
                            gateway to mastering computer engineering.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button
                                onClick={() => navigate("/semesters")}
                                className="px-8 py-4 bg-white text-blue-600 rounded-lg 
                                         hover:bg-blue-50 transition-all duration-300 
                                         shadow-lg hover:shadow-xl transform hover:-translate-y-1
                                         font-semibold text-lg"
                            >
                                View Resources
                            </button>
                            
                            <button
                                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-transparent border-2 border-white text-white 
                                         rounded-lg hover:bg-white/10 transition-all duration-300
                                         font-semibold text-lg"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative transform hover:scale-105 transition-transform duration-500">
                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <img 
                                src="/assets/img/laptop.png" 
                                alt="Computer Engineering Resources" 
                                className="relative z-10 w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;