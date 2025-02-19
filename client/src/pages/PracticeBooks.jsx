
import React from 'react';

const OldQuestions = () => {
  const fileUrl = 'path/to/your/file.pdf'; // Replace with your file's URL

  return (
    <div className='pt-80'>
      <h2>This is Practice Books</h2>
      
      <div className="mt-4">
        {/* Download Button */}
        <a
          href={fileUrl}
          download
          className="mr-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Download
        </a>

        {/* Preview Button */}
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Preview
        </a>
      </div>
    </div>
  );
}

export default OldQuestions;

