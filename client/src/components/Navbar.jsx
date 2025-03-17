import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, User, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../components/firebase"; // Import auth from your firebase config
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Check auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsProfileOpen(false);
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const handleLogin = () => {
    navigate('/login');
    setIsMenuOpen(false);
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
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

          {/* User Profile or Login Button */}
          {user ? (
            <div className="relative ml-4" ref={profileRef}>
              <Button 
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-colors"
              >
                <div className="flex items-center">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                  ) : (
                    <User size={18} className="mr-2" />
                  )}
                  <span className="max-w-32 truncate">
                    {user.displayName || user.email || "User"}
                  </span>
                  <ChevronDown size={16} className="ml-2" />
                </div>
              </Button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50"
                >
                  <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <User size={16} className="mr-2" />
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <Button
              onClick={handleLogin}
              className="ml-4 px-4 py-2 rounded-full text-white font-medium bg-white/10 hover:bg-white/20 transition-colors"
            >
              Login
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          className="md:hidden bg-white/10 hover:bg-white/20 rounded-full p-2 border-0" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
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
            
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center py-3 px-4 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                  ) : (
                    <User size={18} className="mr-2" />
                  )}
                  My Profile
                </Link>
                <Button
                  onClick={handleLogout}
                  className="w-full py-3 px-4 text-white font-medium bg-red-500 hover:bg-red-600 rounded-lg text-left flex items-center"
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={handleLogin}
                className="w-full py-3 px-4 text-white font-medium bg-white/10 hover:bg-white/20 rounded-lg text-left"
              >
                Login
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}