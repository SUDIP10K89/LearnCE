import { useParams, useNavigate } from "react-router-dom";
import { subjects } from "./SubjectPage";
import { FileText, Book, Notebook } from "lucide-react";

const SubjectDetailsPage = () => {
  const navigate = useNavigate();
  const { semId, subjectId } = useParams();
  const subjectName = subjects[semId][subjectId - 1];

  const resources = [
    {
      title: "Old Question Papers",
      icon: <FileText size={40} className="text-cyan-400" />,
      path: `/semesters/${semId}/subjects/${subjectId}/oldQ`,
      description: "Access previous year question papers",
    },
    {
      title: "Guide Books",
      icon: <Book size={40} className="text-cyan-400" />,
      path: `/semesters/${semId}/subjects/${subjectId}/practice`,
      description: "Download study materials and exercises",
    },
    {
      title: "Study Notes",
      icon: <Notebook size={40} className="text-cyan-400" />,
      path: `/semesters/${semId}/subjects/${subjectId}/notes`,
      description: "View lecture slides and study notes",
    },
  ];

  return (
    <div className="md:px-50 container min-w-full h-[100vh] overflow-auto mx-auto px-4 py-8 pt-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-center">
          {subjectName}
        </h1>
        <p className="text-center mt-2 text-gray-300">
          Semester {semId}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div
            key={resource.title}
            onClick={() => navigate(resource.path)}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all 
                     cursor-pointer transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-60 p-6 flex flex-col justify-center items-center 
                          bg-gradient-to-br from-gray-800 to-gray-700 text-gray-100">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h2 className="text-xl font-semibold text-center mb-3">
                {resource.title}
              </h2>
              <p className="text-gray-300 text-center text-sm">
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