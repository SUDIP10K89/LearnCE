import React from "react";
import { useNavigate } from "react-router-dom";

const SemesterPage = () => {
  const navigate = useNavigate();
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
        Select a Semester
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {semesters.map((sem) => (
          <button 
            key={sem}
            
            onClick={() => navigate(`/semesters/${sem}`)}
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Semester {sem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SemesterPage;
