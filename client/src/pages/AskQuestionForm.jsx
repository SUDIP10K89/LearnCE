import { useState } from 'react';
import { X, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AskQuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      if (tags.length < 10) {
        setTags([...tags, tagInput.trim()]);
        setTagInput('');
      }
      e.preventDefault();
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ question, description, tags });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto max-w-4xl px-4 py-6 bg-gray-50 mt-4 md:mt-20 min-h-screen"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-xl md:text-2xl font-bold text-gray-800 mb-6"
      >
        Ask the community a question
      </motion.h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Question input */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label 
            htmlFor="question" 
            className="block text-base md:text-lg text-gray-600 font-medium"
          >
            Your question
          </label>
          <input
            id="question"
            type="text"
            placeholder="What would you like to know?"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            aria-label="Question title"
          />
          <p className="text-xs md:text-sm text-gray-500">
            Tip: write as if asking a friend, being as specific as possible
          </p>
        </motion.div>

        {/* Description textarea */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label 
            htmlFor="description" 
            className="block text-base md:text-lg text-gray-600 font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Include as much detail as possible to get the most relevant answers."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all min-h-[10rem] resize-y"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            aria-label="Question description"
          />
        </motion.div>

        {/* Tags input */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label 
            htmlFor="tags" 
            className="block text-base md:text-lg text-gray-600 font-medium"
          >
            Tags
          </label>
          <div className="relative">
            <div className="relative">
              <input
                id="tags"
                type="text"
                placeholder="Press Enter to add tags..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                aria-label="Add tags"
              />
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* Display selected tags */}
            <AnimatePresence>
              {tags.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-2 mt-2"
                >
                  {tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                        aria-label={`Remove ${tag} tag`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="text-xs md:text-sm text-gray-500">
            You can add up to 10 tags
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-end gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto"
          >
            <Link to="/discussion" className="block w-full h-full">Cancel</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-full sm:w-auto"
          >
            Post question
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AskQuestionForm;