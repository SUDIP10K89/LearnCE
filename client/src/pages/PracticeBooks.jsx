import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { subjects } from "./SubjectPage";
import axios from "axios";
import { FolderId } from "../components/FolderId";
import { Book, Download, Eye, LoaderCircle } from "lucide-react";

const PracticeBooks = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState({});
  const { semId, subjectId } = useParams();
  const subjectName = subjects[semId][subjectId - 1];

  useEffect(() => {
    const GOOGLE_DRIVE_FOLDER_ID = FolderId[semId - 1].subjects[subjectId - 1].categories.books;
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

  const handleDownload = async (fileId, fileName) => {
    const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    setDownloading((prev) => ({ ...prev, [fileId]: true }));
    try {
      const response = await axios.get(
        `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${GOOGLE_API_KEY}`,
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download the file. Please try previewing it instead.");
    } finally {
      setDownloading((prev) => ({ ...prev, [fileId]: false }));
    }
  };

  return (
    <div className="container md:px-40 min-w-full h-[100vh] mx-auto px-4 py-8 pt-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-center">{subjectName}</h1>
        <p className="text-center mt-2 text-gray-300">Semester {semId}</p>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-100">
        Guide Books
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <LoaderCircle className="w-12 h-12 text-cyan-400 animate-spin mb-4" />
            <p className="text-gray-300">Loading Guide Books...</p>
          </div>
        ) : files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex items-center justify-between p-4 md:p-6">
                <div className="flex items-center space-x-4">
                  <Book className="text-cyan-400" size={24} />
                  <div className="font-medium text-gray-100">{file.name.split('.').slice(0, -1).join('.')}</div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleDownload(file.id, file.name)}
                    disabled={downloading[file.id]}
                    className={`px-4 py-2 bg-gray-800 text-cyan-400 rounded-md hover:bg-gray-700 hover:text-cyan-300 transition-colors duration-300 text-sm md:text-base flex items-center ${
                      downloading[file.id] ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {downloading[file.id] ? (
                      <span className="flex items-center">
                        <LoaderCircle className="w-4 h-4 animate-spin mr-2" />
                        <span className="hidden md:inline">Downloading...</span>
                        <span className="md:hidden"><LoaderCircle size={16} className="animate-spin" /></span>
                      </span>
                    ) : (
                      <>
                        <Download className="mr-2" size={16} />
                        <span className="hidden md:inline">Download</span>
                        <span className="md:hidden hidden"><Download size={16} /></span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://drive.google.com/file/d/${file.id}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-md hover:bg-gray-700 hover:text-cyan-300 transition-colors duration-300 text-sm md:text-base flex items-center"
                  >
                    <Eye className="mr-2" size={16} />
                    <span className="hidden md:inline">Preview</span>
                    <span className="md:hidden hidden"><Eye size={16} /></span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-300">No Guide Books found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeBooks;