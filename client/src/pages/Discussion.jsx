import { useState } from 'react';

const Discussions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Trending");
  
  // Sample discussion data
  const discussions = [
    {
      id: 1,
      title: "[FINISHED/OFFICIAL] 🎯 ☘️ St. Patrick's Day Code Challenge! ☘️",
      tags: ["luckycode", "sololearn"],
      votes: 30,
      answers: 20,
      date: "11th Mar 2025, 11:01 AM",
      author: "Nate",
      isOfficial: true
    },
    {
      id: 2,
      title: "[OFFICIAL] 💝 Cupid's Code Picks – Valentine's Code Challenge 2025 Results",
      tags: ["codechallenge", "codewithlove", "sololearn", "valentinesday"],
      votes: 22,
      answers: 33,
      date: "24th Feb 2025, 12:17 PM",
      author: "Nate",
      isOfficial: true
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl mt-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Q&A Discussions</h1>
      
      {/* Search and filter row */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-grow">
          <form onSubmit={handleSearch} className="flex w-full">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-blue-100 text-blue-500 font-medium px-6 py-2 rounded-r-md hover:bg-blue-200 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
        
        <div className="flex justify-between">
          <div className="w-64">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 appearance-none bg-white"
              style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23333%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
            >
              <option value="Trending">Trending</option>
              <option value="Newest">Newest</option>
              <option value="MostVoted">Most Voted</option>
              <option value="MostAnswered">Most Answered</option>
            </select>
          </div>
          
          <button  className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition-colors md:ml-4">
            
            <a href="/askquestion">Ask a question</a>
          </button>
        </div>
      </div>
      
      {/* Discussions list */}
      <div className="space-y-4">
        {discussions.map(discussion => (
          <div key={discussion.id} className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {discussion.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {discussion.tags.map(tag => (
                  <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    <span>{discussion.votes} Votes</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{discussion.answers} Answers</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span>{discussion.date}</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      {discussion.author.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussions;