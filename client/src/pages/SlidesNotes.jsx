import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { subjects } from "./SubjectPage";
import axios from "axios";
import { FolderId } from "../components/FolderId";

const Notes = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { semId, subjectId } = useParams();
  const subjectName = subjects[semId][subjectId - 1];

  useEffect(() => {
    const GOOGLE_DRIVE_FOLDER_ID = FolderId[semId - 1].subjects[subjectId - 1].categories.notes;
    const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    
    const fetchFiles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents&key=${GOOGLE_API_KEY}`
        );
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFiles();
  }, [semId, subjectId]);
  
  return (
    <div className="container mx-auto px-4 py-8 pt-25">
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-center">{subjectName}</h1>
        <p className="text-center mt-2 text-blue-100">Semester {semId}</p>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Study Notes
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading Notes..</p>
          </div>
        ) : files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-between p-4 md:p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-600">📋</div>
                  <div className="font-medium text-gray-800">{file.name}</div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={`https://drive.google.com/uc?export=download&id=${file.id}`}
                    download
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600
                              transition-colors duration-300 text-sm md:text-base flex items-center"
                  >
                    <span className="hidden md:inline">Download</span>
                    <span className="md:hidden">📥</span>
                  </a>
                  
                  <a
                    href={`https://drive.google.com/file/d/${file.id}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600
                              transition-colors duration-300 text-sm md:text-base flex items-center"
                  >
                    <span className="hidden md:inline">Preview</span>
                    <span className="md:hidden">👁️</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">No Notes found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;