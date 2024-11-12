'use client'
import React, { useRef, useEffect } from 'react';

function VideoBox({ videoSrc }) {
  const videoRef = useRef(null); // Ref to access the video element directly

  // Check if videoSrc is set properly
  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.play(); // Automatically play when video is loaded
    }
  }, [videoSrc]); // This effect runs whenever videoSrc changes

  return (
    <div className="w-[950px] h-[320px] bg-transparent fixed right-0 top-0 border border-gray-300 p-4 shadow-lg z-10">
      {/* Header with title and export button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Untitled Video</h2>
        <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
          Export
        </button>
      </div>

      {/* Video Player Section */}
      <div className="flex justify-center items-center w-full h-[230px] bg-transparent">
        <div className="relative w-[150px] h-full border overflow-hidden shadow-sm flex justify-center items-center">
          {videoSrc ? (
            <video
              ref={videoRef} // Attach ref to the video element
              src={videoSrc}
              className="w-full h-auto object-contain" // Set video width to 100% and auto height to maintain aspect ratio
              controls
              style={{ pointerEvents: 'auto' }} // Ensures video remains interactive
            >
              Your browser does not support the video tag.
            </video>
          ) : null} {/* No text shown here now */}
        </div>
      </div>
    </div>
  );
}

export default VideoBox;
