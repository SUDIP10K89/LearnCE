import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        LEARN CE
      </h1>
      <p className='my-5  text-grey-700 text-center'>Empowering minds with knowledge, one resource at a time - your gateway to mastering computer engineering.</p>
      <button 
        onClick={() => navigate('/semesters')}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
      >
        View Resources
      </button>
    </div>
  )
}

export default Home
