import { useState } from "react";
import {
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Explorer({ openFile, activeTab }) {
  const [folders, setFolders] = useState({ pages: true });

  const toggleFolder = (folder) => {
    setFolders({ ...folders, [folder]: !folders[folder] });
  };

  const files = [
    { name: "home.jsx", icon: <img src="../../React.png" width={18} height={18} /> },
    { name: "projects.js", icon: <img src="../../Javascript.png" width={18} height={18} /> },
    { name: "contact.html", icon: <FaHtml5 className="text-orange-500 text-md" /> },
    { name: "extras.css", icon: <FaCss3Alt className="text-blue-500 text-md" /> },
  ];

  return (
    <div className="w-60 bg-gray-900 text-gray-300 p-5 h-[calc(100vh-40px)] border-r border-gray-700 text-base">
      <p className="font-bold mb-3 text-lg">EXPLORER</p>

      {/* VS-Code-Portfolio Folder */}
      <div className="mt-3">
        <button
          onClick={() => toggleFolder("pages")}
          className="flex items-center gap-3 text-lg"
        >
          {folders.pages ? <FiChevronDown className="text-xl" /> : <FiChevronRight className="text-xl" />}
          <span className="font-bold -ml-1">VS-Code-Portfolio</span>
        </button>

        {folders.pages && (
          <div className="ml-6 mt-2 space-y-0">
            {files.map(({ name, icon }) => (
              <p
                key={name}
                className={`flex items-center gap-2 cursor-pointer rounded-lg px-3 py-1 text-md 
                ${
                  activeTab === name
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => openFile(name)}
              >
                {icon} {name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
