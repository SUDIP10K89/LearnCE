import React from "react";

const SearchBar = () => {
  return (
    <section className="bg-gray-100 py-5">
      <div className="container mx-auto px-4 pt-10 text-center">
        <div className="max-w-md mx-auto flex overflow-hidden">
          <input
            type="email"
            placeholder="Search for resources"
            className="w-full sm:flex-grow px-4 py-3 rounded-l-full border border-purple-500 focus:outline-none text-gray-600"
          />
          <button className="bg-gradient-to-tl from-blue-500 to-purple-500 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
