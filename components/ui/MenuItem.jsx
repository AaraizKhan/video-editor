// src/components/ui/MenuItem.jsx
import React from 'react';

const MenuItem = ({ name, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center w-full space-y-2 text-lg hover:text-gray-500 hover:cursor-pointer transition-all duration-200 ease-in-out"
    >
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white">
        {icon}
      </span>
      <span className="text-sm mt-1">{name}</span>
    </div>
  );
};

export default MenuItem;
