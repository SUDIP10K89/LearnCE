import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-700 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to <span className="text-blue-500 font-bold">LEARN CE</span> !, your one-stop solution for educational resources tailored for Computer Engineering students of Tribhuvan University (TU).

We understand the unique challenges and aspirations of students pursuing Computer Engineering, and our mission is to simplify your academic journey by providing organized and easily accessible resources for every semester and subject in the TU curriculum.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
        Whether you're a freshman starting your journey or a senior preparing for your board, we are here to support you every step of the way.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg text-center p-3 shadow-2xl"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h3>
          <p className="text-gray-600 mb-3">To be a global leader in delivering exceptional and creative solutions.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-lg text-center p-3 shadow-2xl"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
          <p className="text-gray-600 mb-3">To be a global leader in delivering exceptional and creative solutions.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-lg text-center p-3 shadow-2xl"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Our goal</h3>
          <p className="text-gray-600 mb-3">To be a global leader in delivering exceptional and creative solutions.</p>
        </motion.div>
        
      </motion.div>
    </section>
  );
}
