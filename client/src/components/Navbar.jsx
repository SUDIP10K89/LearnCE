import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
    //   navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchVisible(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-xl font-bold tracking-wider">CE Resources</div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="focus:outline-none"
          >
            🔍
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Search Input */}
        {isSearchVisible && (
          <div className="absolute top-full left-0 right-0 mt-2 md:hidden">
            <div className="flex mx-4">
              <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow px-3 py-2 rounded-l-lg text-gray-800 
                           focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <button 
                onClick={handleSearch}
                className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg 
                           hover:bg-cyan-600 transition-colors"
              >
                Go
              </button>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <div className={`
          ${isOpen ? 'block' : 'hidden'} 
          md:flex md:items-center md:space-x-6 
          absolute md:relative top-16 md:top-0 
          left-0 right-0 md:bg-transparent 
          bg-gradient-to-r from-indigo-600 to-purple-700 p-4 md:p-0
        `}>
          <a href="/home" className="block md:inline hover:text-cyan-200 transition-colors">Home</a>
          <a href="/semesters" className="block md:inline hover:text-cyan-200 transition-colors">Semesters</a>
          <a href="/resources" className="block md:inline hover:text-cyan-200 transition-colors">Resources</a>
        </div>

        {/* Desktop Search */}
        <div className="items-center space-x-2 hidden md:flex">
          <input 
            type="text" 
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 rounded-lg text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
          <button 
            onClick={handleSearch}
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg 
                       hover:bg-cyan-600 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;