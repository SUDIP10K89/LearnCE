import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { subjects } from "./SubjectPage";

const SubjectDetailsPage = () => {
  const navigate = useNavigate();
  const { semId, subjectId } = useParams();
  const subjectName = subjects[semId][subjectId - 1];

  const resources = [
    {
      title: "Old Question Papers",
      icon: "📝",
      path: `/semesters/${semId}/subjects/${subjectId}/oldQ`,
      description: "Access previous year question papers",
    },
    {
      title: "Practice Books",
      icon: "📚",
      path: `/semesters/${semId}/subjects/${subjectId}/practice`,
      description: "Download study materials and exercises",
    },
    {
      title: "Slides And Notes",
      icon: "📑",
      path: `/semesters/${semId}/subjects/${subjectId}/notes`,
      description: "View lecture slides and study notes",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-25">
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-center">
          {subjectName}
        </h1>
        <p className="text-center mt-2 text-blue-100">
          Semester {semId}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div
            key={resource.title}
            onClick={() => navigate(resource.path)}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all 
                     cursor-pointer transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-60 p-6 flex flex-col justify-center items-center 
                          bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h2 className="text-xl font-semibold text-center mb-3">
                {resource.title}
              </h2>
              <p className="text-blue-100 text-center text-sm">
                {resource.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectDetailsPage;
