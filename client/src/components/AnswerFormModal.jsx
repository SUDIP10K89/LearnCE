import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnswerFormModal = ({ showAnswerForm, setShowAnswerForm, answerText, setAnswerText, charactersRemaining, setCharactersRemaining }) => {
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

  return (
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
  );
};

export default AnswerFormModal;