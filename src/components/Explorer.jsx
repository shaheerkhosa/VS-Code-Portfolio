import { useState } from "react";
import { FiFile, FiChevronRight, FiChevronDown } from "react-icons/fi";

export default function Explorer({ openFile, activeTab }) {
  const [folders, setFolders] = useState({ pages: true });

  const toggleFolder = (folder) => {
    setFolders({ ...folders, [folder]: !folders[folder] });
  };

  return (
    <div className="w-52 bg-gray-900 text-gray-300 p-4 h-[calc(100vh-40px)] border-r border-gray-700">
      <p className="font-bold mb-2">EXPLORER</p>

      {/* Pages Folder */}
      <div className="mt-2">
        <button
          onClick={() => toggleFolder("pages")}
          className="flex items-center gap-2"
        >
          {folders.pages ? <FiChevronDown /> : <FiChevronRight />}
          <span className="text-sm font-bold -ml-1">VS-Code-Portfolio</span>
        </button>
        {folders.pages && (
          <div className="ml-6 mt-1">
            {[
              "home.jsx",
              "projects.js",
              "contact.jsx",
              "extras.jsx",
            ].map((file) => (
              <p
                key={file}
                className={`flex items-center gap-2 text-sm cursor-pointer rounded px-2 
                ${
                  activeTab === file
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => openFile(file)}
              >
                <FiFile /> {file}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
