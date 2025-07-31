import React from 'react';

const LoadingSpinner = ({ message = 'Loading...', overlay = true }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${overlay ? 'absolute inset-0 bg-white/70 z-50' : ''}`}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-r-transparent border-4 mb-4"></div>
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
