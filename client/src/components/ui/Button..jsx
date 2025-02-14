import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
