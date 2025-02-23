import React from "react";
import { useParams } from "react-router-dom";
import { subjects } from "./SubjectPage";

const OldQuestions = () => {
  const { semId, subjectId } = useParams();

  const subject = subjects[semId]?.[subjectId - 1]; // Get subject details safely
  if (!subject) {
    return <div className="text-center text-red-500">Subject not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-center">{subject.name}</h1>
        <p className="text-center mt-2 text-blue-100">Semester {semId}</p>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Previous Year Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {subject.oldQuestions.length > 0 ? (
          subject.oldQuestions.map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-between p-4 md:p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-600">📄</div>
                  <div className="font-medium text-gray-800">{file.name}</div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={file.url}
                    download
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm md:text-base flex items-center"
                  >
                    <span className="hidden md:inline">Download</span>
                    <span className="md:hidden">📥</span>
                  </a>

                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 text-sm md:text-base flex items-center"
                  >
                    <span className="hidden md:inline">Preview</span>
                    <span className="md:hidden">👁️</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No old questions available.</p>
        )}
      </div>
    </div>
  );
};

export default OldQuestions;
