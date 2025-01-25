import React from 'react'
import {useNavigate} from 'react-router-dom'
import About from '../components/About'

const Home = () => {
    const navigate = useNavigate()


  return (
    <div>

    <div id='home' className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        LEARN CE
      </h1>
      <p className='my-5  text-white text-center'>Empowering minds with knowledge, one resource at a time - your gateway to mastering computer engineering.</p>
      <button 
        onClick={() => navigate('/semesters')}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
      >
        View Resources
      </button>
    </div>
    <About />
    </div>
  )
}

export default Home
