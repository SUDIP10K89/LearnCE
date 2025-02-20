import React from 'react';

const OldQuestions = () => {
  // Example file data - replace with your actual data
  const files = [
    { name: '2079', url: 'path/to/your/file1.pdf' },
    { name: '2078', url: 'path/to/your/file2.pdf' },
    { name: '2077', url: 'path/to/your/file3.pdf' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Previous Year Questions</h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {files.map((file, index) => (
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
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                             transition-colors duration-300 text-sm md:text-base flex items-center"
                >
                  <span className="hidden md:inline">Download</span>
                  <span className="md:hidden">📥</span>
                </a>

                <a
                  href={file.url}
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
        ))}
      </div>
    </div>
  );
};

export default OldQuestions;