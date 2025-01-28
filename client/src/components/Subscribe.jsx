import React from 'react'

const Subscribe = () => {
  return (
    <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Stay Updated</h2>
            <p className="text-gray-500 mb-8">Subscribe to our newsletter for the latest resources and feature update</p>
            <div className="max-w-md mx-auto flex overflow-hidden">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full sm:flex-grow px-4 py-3 rounded-l-full border border-purple-500 focus:outline-none text-gray-600"
                />
                <button className="bg-gradient-to-tl from-blue-500 to-purple-500 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 transition">
                    Subscribe
                </button>
            </div>
        </div>
    </section>
  )
}

export default Subscribe
