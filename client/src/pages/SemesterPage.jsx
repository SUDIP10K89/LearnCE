import React from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Sprout } from "lucide-react";

const SemesterPage = () => {
  const navigate = useNavigate();
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  const getYearLabel = (sem) => {
    if (sem <= 2) return "First Year";
    if (sem <= 4) return "Second Year";
    if (sem <= 6) return "Third Year";
    return "Fourth Year";
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-center">
          Computer Engineering
        </h1>
        <p className="text-center mt-2 text-gray-300">
          Select your semester to access study materials
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {[1, 3, 5, 7].map((startSem) => (
          <div key={startSem} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              {getYearLabel(startSem)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semesters.slice(startSem - 1, startSem + 1).map((sem) => (
                <div
                  key={sem}
                  onClick={() => navigate(`/semesters/${sem}`)}
                  className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg 
                           transition-all cursor-pointer transform hover:-translate-y-1
                           border border-gray-700 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-100">
                          Semester {sem}
                        </h3>
                        <p className="text-gray-300 mt-1">
                          {sem % 2 === 1 ? 'Fall' : 'Spring'} Semester
                        </p>
                      </div>
                      <div className="text-3xl text-cyan-400">
                        {sem % 2 === 1 ? <Leaf size={32} /> : <Sprout size={32} />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterPage;