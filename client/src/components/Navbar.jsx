import React from "react";
import { Home, Book } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home", id: "home", icon: <Home size={24} /> },
    { href: "/semesters", label: "Semester", id: "semester", icon: <Book size={24} /> },
    // Add more links as needed
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-extrabold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
              LEARN CE
            </div>
          </Link>
          <div className="flex space-x-1">
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
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="flex justify-around items-center py-3">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="flex flex-col items-center text-white"
            >
              {link.icon}
              <span className="text-xs">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
