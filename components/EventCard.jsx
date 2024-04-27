import React from 'react';

const EventCard = ({ title, logo, description }) => {
  const MAX_LOGO_SIZE = 200; // Adjust this value as desired

  return (
    <div className="w-80 h-80 border border-gray-200 rounded-md shadow-md hover:shadow-lg hover:shadow-primaryshadow hover:scale-105 transition-all duration-200 flex flex-col">
      {/* Title container */}
      <div className="bg-primary text-white py-1 px-2 rounded-t-md flex justify-center">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
      {/* Logo container with flexbox for centering */}
      <div className="flex justify-center items-center h-1/2 border-b border-gray-200">
        <img
          src={`${logo}`}
          alt={`${title} logo`}
          style={{ maxHeight: MAX_LOGO_SIZE, maxWidth: MAX_LOGO_SIZE }}
        />
      </div>
      {/* Description container */}
      <div className="p-4 flex flex-col justify-between">
        <p className="text-gray-700 text-left">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
