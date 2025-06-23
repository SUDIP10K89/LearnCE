import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const AnswerItem = ({ answer }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [voteCount, setVoteCount] = useState(answer.votes);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setVoteCount((prev) => (isLiked ? prev - 1 : prev + 1));
    // Placeholder for backend API call to update likes
    console.log(`Toggled like for answer ${answer.id}: ${!isLiked ? 'Liked' : 'Unliked'}`);
  };

  return (
    <motion.div 
      key={answer.id} 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="border-b border-gray-700 pb-4 last:border-b-0"
    >
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={handleLikeToggle}
            className={`flex items-center justify-center w-8 h-6 cursor-pointer ${
              isLiked ? 'text-cyan-400' : 'text-gray-300'
            } hover:text-cyan-400 transition-colors`}
          >
            <ThumbsUp 
              className="w-4 h-4" 
              fill={isLiked ? 'currentColor' : 'none'} 
              stroke={isLiked ? 'currentColor' : 'currentColor'}
            />
          </button>
          <span className="font-bold text-lg text-gray-100">+ {voteCount}</span>
        </div>
        
        <div className="flex-1">
          {answer.content && (
            <p className="text-gray-300 mb-2">{answer.content}</p>
          )}
          <a 
            href={answer.link} 
            className="text-cyan-400 hover:text-cyan-300 text-sm break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {answer.link}
          </a>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-100">
                  {answer.answeredBy.name[0]}
                </div>
                <span className="text-sm font-medium text-gray-100">{answer.answeredBy.name}</span>
              </div>
            </div>
            <span className="text-xs text-gray-300">{Date(answer.createdAt)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnswerItem;