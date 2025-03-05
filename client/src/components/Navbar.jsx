import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/semesters", label: "Semester", id: "semester" },
    // { href: "/discussion", label: "Discussion", id: "discussion" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="text-2xl font-extrabold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
            LEARN CE
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="relative px-4 py-2 text-white font-medium group"
            >
              <span className="relative z-10 group-hover:text-cyan-200 transition-colors">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
        
        <Button 
          className="md:hidden bg-white/10 hover:bg-white/20 rounded-full p-2 border-0" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600"
        >
          <div className="flex flex-col p-4 space-y-1 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="py-3 px-4 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
