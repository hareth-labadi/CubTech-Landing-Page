import React from 'react';
import Image from "next/image";

const TalkCard = ({ title, logo, description }) => {
  const MAX_LOGO_SIZE = 200; // Adjust this value as desired

  return (
    <div className="w-80 h-64 border border-gray-200 rounded-md shadow-md hover:shadow-primarysh hover:transform hover:scale-110 transition-all duration-200 flex flex-col">
      {/* Logo container with flexbox for centering */}
      <div className="flex justify-center items-center h-1/2">
      <Image
          src={`${logo}`}
          alt={`${title} logo`}
          height= {MAX_LOGO_SIZE}
          width= {MAX_LOGO_SIZE} 
        />
      </div>
      {/* Line */}
      <hr className="border-t border-gray-300" />
      {/* Content container with padding and text alignment */}
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-pr mb-2 text-gray-700 text-left">{title}</h3>
        <p className="text-gray-700 text-left">{description}</p>
      </div>
    </div>
  );
};

export default TalkCard;
