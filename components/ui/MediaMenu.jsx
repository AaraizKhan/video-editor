import { useState } from 'react';
import ProjectUploads from './ProjectUploads';
import CloudUploads from './CloudUploads';

function MediaMenu() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("project");

  return (
    <div className="space-y-6">
      {/* Toggle Buttons for Project Uploads and Cloud Uploads */}
      <div className="flex mb-4">
        {/* Project Uploads Button */}
        <button
          onClick={() => setActiveTab("project")}
          className={`py-2 px-4 font-semibold relative ${activeTab === "project" ? "text-blue-500" : "text-gray-500"} whitespace-nowrap`}
        >
          Project Uploads
          {activeTab === "project" && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50px] h-[2px] bg-blue-500"></span>
          )}
        </button>

        {/* Cloud Uploads Button */}
        <button
          onClick={() => setActiveTab("cloud")}
          className={`py-2 px-4 font-semibold relative ${activeTab === "cloud" ? "text-blue-500" : "text-gray-500"} whitespace-nowrap`}
        >
          Cloud Uploads
          {activeTab === "cloud" && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50px] h-[2px] bg-blue-500"></span>
          )}
        </button>
      </div>

      {/* Render content based on the active tab */}
      {activeTab === "project" ? <ProjectUploads /> : <CloudUploads />}
    </div>
  );
}

export default MediaMenu;
