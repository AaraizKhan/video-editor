import { useState, useRef, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import VideoBox from './VideoBox';

function ProjectUploads() {
  const [videoFile, setVideoFile] = useState(null);
  const videoRef = useRef(null);
  const [videoProgress, setVideoProgress] = useState(0); // Track the video's progress

  const handleFileClick = () => {
    if (!videoFile) {
      document.getElementById('videoUpload').click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const fileURL = URL.createObjectURL(file);
      setVideoFile(fileURL); // Set the video URL as `videoFile`
    } else {
      alert('Please select a video file.');
    }
  };

  // Update video progress
  useEffect(() => {
    if (videoRef.current) {
      const updateProgress = () => {
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setVideoProgress(progress); // Update progress state
      };

      videoRef.current.addEventListener('timeupdate', updateProgress);

      // Clean up the event listener when the component is unmounted
      return () => {
        videoRef.current.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [videoFile]); // Only run the effect when the videoFile changes

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
        onClick={handleFileClick} // Only open file dialog if no video is selected
      >
        {videoFile ? (
          <>
            <video
              src={videoFile}
              ref={videoRef}
              className="w-full h-auto rounded-[30px]"
              controls={false}
              onClick={handleVideoClick}
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
                left: `${(videoProgress / 100) * 100}%`, // Horizontal progress based on video progress
                top: 0,
              }}
            />
          </>
        ) : (
          <div className="flex flex-col justify-center items-center py-12 rounded-[15px]">
            <p><FaDownload className="text-3xl text-gray-400 mb-4" /></p>
            <p className="text-gray-300">There is nothing yet. Click here to upload</p>
          </div>
        )}
      </div>

      <input
        type="file"
        id="videoUpload"
        style={{ display: 'none' }}
        accept="video/*"
        onChange={handleFileChange}
      />

      {/* Pass the videoFile URL to VideoBox */}
      <VideoBox videoSrc={videoFile} />
    </div>
  );
}

export default ProjectUploads;
