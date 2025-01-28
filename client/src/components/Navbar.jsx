import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button.";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-extrabold text-white tracking-wide">LEARN CE</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white font-medium hover:text-cyan-200 transition">
            Home
          </a>
          <a href="" className="text-white font-medium hover:text-cyan-200 transition">
            Semester
          </a>
        </div>
        <Button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
        >
          <div className="flex flex-col space-y-6 p-6">
            <a
              href="#home"
              className="text-white font-medium hover:text-gray-200 transition"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-medium hover:text-gray-200 transition"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="text-white font-medium hover:text-gray-200 transition"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white font-medium hover:text-gray-200 transition"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
