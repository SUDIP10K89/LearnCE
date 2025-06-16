import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import AnswerItem from './AnswerItem';

const AnswersList = ({ answers, sortBy, setSortBy, setShowAnswerForm }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Function to sort answers based on sortBy value
  const sortAnswers = (answers) => {
    return [...answers].sort((a, b) => {
      if (sortBy === 'Votes') {
        return b.votes - a.votes; // Sort by votes (descending)
      } else if (sortBy === 'Date') {
        // Convert timestamp to Date object for comparison
        return new Date(b.timestamp) - new Date(a.timestamp); // Sort by date (newest first)
      } else if (sortBy === 'Author') {
        return a.author.localeCompare(b.author); // Sort by author name (alphabetical)
      }
      return 0;
    });
  };

  const sortedAnswers = sortAnswers(answers);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-100">{answers.length} Answers</h3>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center gap-2 ">
            <span className="text-gray-100">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-700 rounded px-3 py-1 text-sm bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none"
            >
              <option>Votes</option>
              <option>Date</option>
              <option>Author</option>
            </select>
            <ChevronDown className="absolute right-2 h-4 w-4 text-cyan-400 pointer-events-none" />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 cursor-pointer text-cyan-400 px-4 py-2 rounded border border-gray-700 hover:bg-gray-700 transition-colors"
            onClick={() => setShowAnswerForm(true)}
          >
            Answer
          </motion.button>
        </div>
      </div>

      <div className="space-y-4">
        {sortedAnswers.map((answer) => (
          <AnswerItem key={answer.id} answer={answer} />
        ))}
      </div>
    </motion.div>
  );
};

export default AnswersList;