// ProjectUploads.js
import { FaDownload } from 'react-icons/fa';

function ProjectUploads() {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-dashed rounded-lg py-14 text-center hover:cursor-pointer">
      <div className='flex flex-col justify-center items-center '>
        <p><FaDownload className="text-3xl text-gray-400 mb-4" /></p>
        <p className="text-gray-300">There is nothing yet. Click here to upload</p>
      </div>
    </div>
  );
}

export default ProjectUploads;
