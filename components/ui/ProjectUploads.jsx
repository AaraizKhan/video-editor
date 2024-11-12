// Import necessary hooks and components
import { useState, useRef, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import VideoBox from './VideoBox';

function ProjectUploads() {
  // State for storing the uploaded video file's URL
  const [videoFile, setVideoFile] = useState(null);

  // Reference for accessing the video element
  const videoRef = useRef(null);

  // State for tracking the video playback progress
  const [videoProgress, setVideoProgress] = useState(0);

  // Handle file input click for uploading a video
  const handleFileClick = () => {
    if (!videoFile) {
      document.getElementById('videoUpload').click();
    }
  };

  // Handle file change event for video upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if the file is a video
    if (file && file.type.startsWith('video/')) {
      const fileURL = URL.createObjectURL(file); // Create a URL for the uploaded video file
      setVideoFile(fileURL); // Store the video URL in state
    } else {
      alert('Please select a video file.'); // Alert if the file is not a video
    }
  };

  // Effect to track and update the video progress during playback
  useEffect(() => {
    if (videoRef.current) {
      // Function to update the progress based on current time and duration
      const updateProgress = () => {
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setVideoProgress(progress); // Update the progress state
      };

      videoRef.current.addEventListener('timeupdate', updateProgress); // Add listener to update progress

      // Cleanup listener when component is unmounted
      return () => {
        videoRef.current.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [videoFile]); // Only re-run when videoFile changes

  // Handle video playback toggle (play/pause on click)
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      {/* Video Upload/Preview Box */}
      <div
        className={`${
          videoFile ? 'items-start' : 'justify-center items-center'
        } flex flex-col hover:cursor-pointer relative rounded-[30px] overflow-hidden ${
          videoFile ? 'border-2 border-blue-400 border-solid w-[170px] h-[100px]' : 'border-2 border-dashed'
        }`}
        onClick={handleFileClick} // Open file dialog only if no video is selected
      >
        {videoFile ? (
          <>
            {/* Video Preview */}
            <video
              src={videoFile}
              ref={videoRef}
              className="w-full h-auto rounded-[30px]"
              controls={false}
              onClick={handleVideoClick} // Toggle play/pause on click
            >
              Your browser does not support the video tag.
            </video>

            {/* Progress Bar */}
            <div
              className="absolute"
              style={{
                width: '3px', // Fixed width for the progress bar
                height: '100%', // Full height of the video box
                backgroundColor: 'blue', // Color of the progress bar
                position: 'absolute',
                left: `${(videoProgress / 100) * 100}%`, // Horizontal position based on video progress
                top: 0,
              }}
            />
          </>
        ) : (
          // Upload prompt if no video is uploaded
          <div className="flex flex-col justify-center items-center py-12 rounded-[15px]">
            <p><FaDownload className="text-3xl text-gray-400 mb-4" /></p>
            <p className="text-gray-300">There is nothing yet. Click here to upload</p>
          </div>
        )}
      </div>

      {/* Hidden file input for video upload */}
      <input
        type="file"
        id="videoUpload"
        style={{ display: 'none' }}
        accept="video/*" // Accept only video files
        onChange={handleFileChange} // Triggered when a file is selected
      />

      {/* Render VideoBox component and pass videoFile URL */}
      <VideoBox videoSrc={videoFile} />
    </div>
  );
}

export default ProjectUploads;
