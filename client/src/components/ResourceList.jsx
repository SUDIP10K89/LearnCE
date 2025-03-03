import { useEffect, useState } from "react";
import axios from "axios";
import { FolderId } from "./FolderId";

const GOOGLE_DRIVE_FOLDER_ID = FolderId[0].subjects[0].categories.questions;
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const ResourceList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents&key=${GOOGLE_API_KEY}`
        );
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Resources</h2>
      <ul className="mt-4 space-y-2">
        {files.map((file) => (
          <li key={file.id} className="p-2 bg-gray-100 rounded-lg shadow">
            <a
              href={`https://drive.google.com/file/d/${file.id}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
