import { useState } from 'react';

const AskQuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      // Prevent adding more than 10 tags
      if (tags.length < 10) {
        setTags([...tags, tagInput.trim()]);
        setTagInput('');
      }
      e.preventDefault(); // Prevent form submission
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      question,
      description,
      tags
    });
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 bg-gray-50 mt-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Ask the community a question</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Question input */}
        <div className="mb-6">
          <label htmlFor="question" className="block text-lg text-gray-600 mb-2">Your question</label>
          <input
            id="question"
            type="text"
            placeholder="What would you like to know?"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <p className="text-sm text-gray-500 mt-1">Tip: write as if asking a friend, being as specific as possible</p>
        </div>
        
        {/* Description textarea */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-lg text-gray-600 mb-2">Description</label>
          <textarea
            id="description"
            placeholder="Include as much detail as possible to get the most relevant answers."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 min-h-40"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        
        {/* Tags input */}
        <div className="mb-8">
          <label htmlFor="tags" className="block text-lg text-gray-600 mb-2">Tags</label>
          <div className="relative">
            <input
              id="tags"
              type="text"
              placeholder="Start typing to add tags..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
            />
            
            {/* Display selected tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                    <button 
                      type="button" 
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">You can add up to 10 tags</p>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-colors"
          >
            Post question
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestionForm;