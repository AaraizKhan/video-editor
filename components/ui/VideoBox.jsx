//contain video content
'use client'
import React, { useRef, useEffect } from 'react';

function VideoBox({ videoSrc }) {
  // Reference to directly access the video element
  const videoRef = useRef(null); 

  // Effect to automatically play the video when videoSrc changes
  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.play(); // Automatically play video when it's loaded
    }
  }, [videoSrc]); // This effect runs whenever the videoSrc changes

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
            // Video element that plays the provided video
            <video
              ref={videoRef} // Attach the ref to the video element
              src={videoSrc} // Source URL of the video
              className="w-full h-auto object-contain" // Ensure video maintains aspect ratio
              controls // Enable video controls (play/pause, volume, etc.)
              style={{ pointerEvents: 'auto' }} // Ensure video is interactive
            >
              Your browser does not support the video tag.
            </video>
          ) : null} {/* Render nothing if no videoSrc is provided */}
        </div>
      </div>
    </div>
  );
}

export default VideoBox;
