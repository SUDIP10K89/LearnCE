import React from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
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
      <About/>

      {/* Subscribe */}
    <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Stay Updated</h2>
            <p className="text-gray-500 mb-8">Subscribe to our newsletter for the latest resources and feature update</p>
            <div className="max-w-md mx-auto flex overflow-hidden">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full sm:flex-grow px-4 py-3 rounded-l-full border border-gray-700 focus:outline-none"
                />
                <button className="bg-gradient-to-tl from-blue-500 to-purple-500 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 transition">
                    Subscribe
                </button>
            </div>
        </div>
    </section>

      {/* footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-8">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Learn CE. All rights reserved.</p>
            <div className="mt-4 space-x-4">
                <a href="#" className="hover:text-blue-300">Privacy Policy</a>
                <a href="#" className="hover:text-blue-300">Terms of Service</a>
                <a href="#" className="hover:text-blue-300">Contact</a>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default Home;
