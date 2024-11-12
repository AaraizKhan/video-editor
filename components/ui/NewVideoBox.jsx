// "use client"
// import { useState, useRef, useEffect } from 'react';
// import { FaDownload } from 'react-icons/fa';

// function NewVideoBox({ videoFile }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [volume, setVolume] = useState(1);
//   const [progress, setProgress] = useState(0);
//   const videoRef = useRef(null);

//   const handleVideoClick = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//         setIsPlaying(true);
//       } else {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       }
//     }
//   };

//   const handleVolumeChange = (event) => {
//     const newVolume = event.target.value;
//     if (videoRef.current) {
//       videoRef.current.volume = newVolume;
//     }
//     setVolume(newVolume);
//   };

//   const handleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//     }
//     setIsMuted(!isMuted);
//   };

//   const handleProgressChange = (event) => {
//     const newTime = (event.target.value / 100) * videoRef.current.duration;
//     if (videoRef.current) {
//       videoRef.current.currentTime = newTime;
//     }
//     setProgress(event.target.value);
//   };

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
//       setProgress(currentProgress);
//     }
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//   };

//   const handleDownload = () => {
//     const a = document.createElement('a');
//     a.href = videoFile;
//     a.download = 'video.mp4'; // Customize the filename
//     a.click();
//   };

//   return (
//     <div className="flex flex-col justify-center items-center text-center w-80 p-4 border-2 border-gray-300 rounded-lg">
//       <div className="relative">
//         <video
//           src={videoFile}
//           ref={videoRef}
//           className="w-full h-auto rounded-lg"
//           controls={false}
//           onClick={handleVideoClick}
//           onTimeUpdate={handleTimeUpdate}
//         >
//           Your browser does not support the video tag.
//         </video>

//         {/* Video Controls */}
//         <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-3 flex items-center justify-between">
//           {/* Play/Pause Button */}
//           <button
//             onClick={handleVideoClick}
//             className="text-white text-xl hover:text-gray-300"
//           >
//             {isPlaying ? 'Pause' : 'Play'}
//           </button>

//           {/* Time Duration */}
//           <div className="text-white text-sm">
//             {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(videoRef.current?.duration || 0)}
//           </div>

//           {/* Progress Bar */}
//           <div className="flex-1 mx-2">
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={progress}
//               onChange={handleProgressChange}
//               className="w-full"
//             />
//           </div>

//           {/* Mute/Unmute Button */}
//           <button
//             onClick={handleMute}
//             className="text-white text-xl hover:text-gray-300"
//           >
//             {isMuted ? 'Unmute' : 'Mute'}
//           </button>

//           {/* Volume Control */}
//           <div className="w-1/4 mx-2">
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.01"
//               value={volume}
//               onChange={handleVolumeChange}
//               className="w-full"
//             />
//           </div>

//           {/* Download Button */}
//           <button
//             onClick={handleDownload}
//             className="text-white text-xl hover:text-gray-300"
//           >
//             <FaDownload />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewVideoBox;
