import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, MessageCircle } from "lucide-react";
import ResourceList from "./ResourceList";

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center pt-16 py-12 px-6">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-100 mb-4">About Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Welcome to <span className="text-cyan-400 font-bold">LEARN CE</span>!, your one-stop solution for educational resources tailored for Computer Engineering students of Tribhuvan University (TU).
          We understand the unique challenges and aspirations of students pursuing Computer Engineering, and our mission is to simplify your academic journey by providing organized and easily accessible resources for every semester and subject in the TU curriculum.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
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
          className="bg-gray-800 rounded-lg shadow-lg text-center p-3 shadow-2xl"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 255, 255, 0.2)" }}
        >
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Our Mission</h3>
          <p className="text-gray-300 mb-3">Empower students with free, high-quality computer engineering resources for academic and practical learning.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg text-center p-3 shadow-2xl"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 255, 255, 0.2)" }}
        >
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Our Vision</h3>
          <p className="text-gray-300 mb-3">Become the leading platform for accessible, organized, and up-to-date computer engineering knowledge.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg text-center p-3 shadow-2xl"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 255, 255, 0.2)" }}
        >
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Our Goal</h3>
          <p className="text-gray-300 mb-3">
            Provide structured, up-to-date study materials, support hands-on learning, foster collaboration, and enable networking.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          onClick={() => navigate("/semesters")}
          className="px-8 py-4 bg-gray-800 text-cyan-400 rounded-lg 
                     hover:bg-gray-700 hover:text-cyan-300 transition-all duration-300 
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1
                     font-semibold text-lg flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BookOpen className="h-5 w-5 text-cyan-400" />
          View Resources
        </motion.button>

        <motion.button
          onClick={() => navigate("/discussion")}
          className="px-8 py-4 bg-gray-800 border-2 border-gray-700 text-cyan-400 
                     rounded-lg hover:bg-gray-700 hover:text-cyan-300 transition-all duration-300 
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1
                     font-semibold text-lg flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="h-5 w-5 text-cyan-400" />
          Discussions
        </motion.button>
      </motion.div>
    </section>
  );
}