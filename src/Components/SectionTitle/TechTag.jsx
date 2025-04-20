// TechTag.js
import React from "react";

const TechTag = ({ tech }) => {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
      {tech}
    </span>
  );
};

export default TechTag;