import { useState } from 'react';
import { ArrowUp, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Discussions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('Trending');

  const discussions = [
    {
      id: 1,
      title: '[FINISHED/OFFICIAL] 🎯 ☘️ St. Patrick\'s Day Code Challenge! ☘️',
      tags: ['luckycode', 'sololearn'],
      votes: 30,
      answers: 20,
      date: '11th Mar 2025, 11:01 AM',
      author: 'Nate',
      isOfficial: true,
    },
    {
      id: 2,
      title: '[OFFICIAL] 💝 Cupid\'s Code Picks – Valentine\'s Code Challenge 2025 Results',
      tags: ['codechallenge', 'codewithlove', 'sololearn', 'valentinesday'],
      votes: 22,
      answers: 33,
      date: '24th Feb 2025, 12:17 PM',
      author: 'Nate',
      isOfficial: true,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl mt-4 md:mt-20">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl md:text-2xl font-bold text-gray-800 mb-6"
      >
        Q&A Discussions
      </motion.h1>

      {/* Search and filter row */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="w-full">
          <form onSubmit={handleSearch} className="flex w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search discussions..."
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search discussions"
            />
            <button
              type="submit"
              className="bg-blue-100 text-blue-500 font-medium px-4 md:px-6 py-2 rounded-r-md hover:bg-blue-200 transition-colors"
              aria-label="Submit search"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white"
              aria-label="Filter discussions"
            >
              <option value="Trending">Trending</option>
              <option value="Newest">Newest</option>
              <option value="MostVoted">Most Voted</option>
              <option value="MostAnswered">Most Answered</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white font-medium px-4 md:px-6 py-2 rounded-md hover:bg-blue-600 transition-colors w-full sm:w-auto"
          >
            <Link to="/askquestion" className="block w-full h-full">
              Ask a question
            </Link>
          </motion.button>
        </div>
      </div>

      {/* Discussions list */}
      <AnimatePresence>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <motion.div
              key={discussion.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2 line-clamp-2">
                  {discussion.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {discussion.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-600 gap-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      <span>{discussion.votes} Votes</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{discussion.answers} Answers</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xs md:text-sm">{discussion.date}</span>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      {discussion.author.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Discussions;