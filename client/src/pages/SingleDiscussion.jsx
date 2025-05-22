import React, { useState } from 'react';
import { 
  ChevronDown, 
  ThumbsUp, 
  Award, 
  Calendar, 
  Share, 
  Users, 
  MessageCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SingleDiscussion = () => {
  const [sortBy, setSortBy] = useState('Votes');
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [charactersRemaining, setCharactersRemaining] = useState(2048);

  const handleAnswerTextChange = (e) => {
    const text = e.target.value;
    setAnswerText(text);
    setCharactersRemaining(2048 - text.length);
  };

  const handleCancel = () => {
    setShowAnswerForm(false);
    setAnswerText('');
    setCharactersRemaining(2048);
  };

  const handlePost = () => {
    console.log('Posting answer:', answerText);
    setShowAnswerForm(false);
    setAnswerText('');
    setCharactersRemaining(2048);
  };

  const answers = [
    {
      id: 1,
      votes: 12,
      content: "just to make the ball roll:",
      link: "https://sololearn.com/compiler-playground/WPFTPL5Wrl2/?ref=app",
      author: "Oma Falk",
      timestamp: "13th May 2025, 11:00 AM",
      avatar: "OF"
    },
    {
      id: 2,
      votes: 10,
      content: "",
      link: "https://sololearn.com/compiler-playground/W0lAtluSRqBA/?ref=app",
      author: "Angel",
      timestamp: "13th May 2025, 1:22 PM",
      avatar: "A"
    },
    {
      id: 3,
      votes: 9,
      content: "",
      link: "https://sololearn.com/compiler-playground/WFNnqLvvh9J3/?ref=app",
      author: "жнец",
      timestamp: "13th May 2025, 12:25 PM",
      avatar: "Ж"
    },
    {
      id: 4,
      votes: 7,
      content: "It is a kind a code that takes your survey and will tell about your personality... Read the comments of code for better results!!",
      link: "https://sololearn.com/compiler-playground/c8z0BL29DkOb/?ref=app",
      author: "Aditi Shukla",
      timestamp: "13th May 2025, 2:53 PM",
      avatar: "AS"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4">
        {/* SoloLearn Header */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-700"
        >
          {/* Challenge Info */}
          <div className="border-l-4 border-cyan-400 pl-6">
            <div className="flex items-center gap-2 mb-2">
              <ThumbsUp className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-100 font-medium">+ 52</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              <h2 className="text-2xl font-bold text-gray-100">
                [OFFICIAL] 🧘‍♀️ Coding Challenge: Code for Calm
              </h2>
            </div>
            
            <p className="text-gray-300 mb-4">
              Join us in honoring Mental Health Awareness Month by creating code that brings peace, 
              positivity, and support to yourself and others.
            </p>
            
            <p className="text-gray-300 mb-4">
              If you're new to coding, this is a wonderful moment to take a small, brave step. Your 
              project doesn't need to be perfect—just honest and heartfelt. Every voice matters, and 
              we'd love to see what you create. 🌸
            </p>
            
            <div className="mb-4">
              <h3 className="font-bold text-gray-100 mb-2">🌟 Challenge:</h3>
              <p className="text-gray-300 mb-2">Create one original code project based on one of the following 3 themes:</p>
              <ul className="list-none text-gray-300 space-y-1 ml-4">
                <li>- Calm & Mindfulness</li>
                <li>Breathing animations, soothing soundscapes, peaceful visuals</li>
                <li>- Positive Affirmations & Motivation</li>
                <li>Daily affirmations, compliment or quote generators, uplifting messages</li>
                <li>- Mental Wellness Tools</li>
                <li>Mood trackers, gratitude logs, journaling prompts, self-care checklists</li>
              </ul>
            </div>
            
            <p className="text-gray-300 mb-4">
              Let your creativity flow with empathy, intention, and imagination.
            </p>
            
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-gray-100">Rewards: Win Sololearn PRO/MAX, Bits, and XP</span>
              </div>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Post your code: May 13-19, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share className="w-4 h-4 text-cyan-400" />
                  <span>Where? Make your code public and share the link in the comments of this post</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Only one code entry per user - make it your most thoughtful creation</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-100 font-medium">The Sololearn Zen Judges will be looking for originality, impact, and balance.</span>
            </div>
            
            <p className="text-gray-300">
              Let's take care of our minds—and each other—through code. 🌸
            </p>
          </div>
        </motion.div>

        {/* Answers Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-100">42 Answers</h3>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center gap-2">
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
                className="bg-gray-800 text-cyan-400 px-4 py-2 rounded border border-gray-700 hover:bg-gray-700 transition-colors"
                onClick={() => setShowAnswerForm(true)}
              >
                Answer
              </motion.button>
            </div>
          </div>

          <div className="space-y-4">
            {answers.map((answer) => (
              <motion.div 
                key={answer.id} 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="border-b border-gray-700 pb-4 last:border-b-0"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <button className="flex items-center justify-center w-8 h-6 text-gray-300 hover:text-cyan-400">
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg text-gray-100">+ {answer.votes}</span>
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
                            {answer.avatar}
                          </div>
                          <span className="text-sm font-medium text-gray-100">{answer.author}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-300">{answer.timestamp}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Answer Form Modal */}
        <AnimatePresence>
          {showAnswerForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl border border-gray-700"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-cyan-400 font-bold text-sm">SU</span>
                      </div>
                      <span className="font-medium text-gray-100">sudip</span>
                    </div>
                    
                    <textarea
                      value={answerText}
                      onChange={handleAnswerTextChange}
                      placeholder="Write your reply here..."
                      className="w-full h-48 p-3 bg-gray-800 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100 placeholder:text-gray-400"
                    />
                    
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-300">
                        {charactersRemaining} characters remaining
                      </span>
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleCancel}
                          className="px-4 py-2 text-cyan-400 border border-gray-700 rounded hover:bg-gray-700 transition-colors"
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handlePost}
                          className="px-4 py-2 bg-gray-800 text-cyan-400 border border-gray-700 rounded hover:bg-gray-700 transition-colors"
                        >
                          Post
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SingleDiscussion;