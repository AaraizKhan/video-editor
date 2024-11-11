// CloudUploads.js
import { FaCloudUploadAlt } from 'react-icons/fa';

function CloudUploads() {
  return (
    <div className="space-y-4">
      {/* Cloud Upload Button */}
      <button className="flex items-center justify-center space-x-2 w-full bg-gray-200 p-3 rounded-md">
        <FaCloudUploadAlt className="text-2xl text-gray-700" />
        <span className="text-lg text-gray-700 font-semibold">Click to upload new file</span>
      </button>

      {/* Video Boxes */}
      <div className="grid grid-cols-1 gap-4">
        <div className="relative hover:cursor-pointer">
          <img
            src="images/video_pic_1.jpeg"
            alt="Video 1"
            className="w-full h-32 object-cover rounded-md"
          />
          <button className="absolute bottom-2 left-2 bg-black text-white py-1 px-3 rounded-md text-sm">
            02:15
          </button>
        </div>

        <div className="relative hover:cursor-pointer">
          <img
            src="images/video_pic_1.jpeg"
            alt="Video 2"
            className="w-full h-32 object-cover rounded-md"
          />
          <button className="absolute bottom-2 left-2 bg-black text-white py-1 px-3 rounded-md text-sm">
            03:00
          </button>
        </div>

        <div className="relative hover:cursor-pointer">
          <img
            src="images/video_pic_1.jpeg"
            alt="Video 3"
            className="w-full h-32 object-cover rounded-md"
          />
          <button className="absolute bottom-2 left-2 bg-black text-white py-1 px-3 rounded-md text-sm">
            01:45
          </button>
        </div>
      </div>
    </div>
  );
}

export default CloudUploads;
