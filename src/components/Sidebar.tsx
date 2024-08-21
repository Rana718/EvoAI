import React from "react";

interface SidebarProps {
    isVisible: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-4 transition-transform transform translate-x-0`}>
            <ul className="text-white space-y-2">
                <li>Text to Image</li>
                <li>Image to Video</li>
                <li>Text to Video</li>
                
            </ul>
        </div>
    )
}

export default Sidebar;