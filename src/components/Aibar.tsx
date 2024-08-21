import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Aibar: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative">
      <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-lg">
        <div className="text-white font-bold text-xl">
          My App Name
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white bg-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {isSidebarVisible ? '✕' : '☰'}
        </button>
      </nav>
      {isSidebarVisible && (
        <div className="absolute top-0 left-0 w-full">
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Aibar;
