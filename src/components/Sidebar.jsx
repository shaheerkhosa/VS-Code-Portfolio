import { useState } from "react";
import Explorer from "./Explorer";
import { FiFile, FiPackage, FiBookOpen, FiGrid } from "react-icons/fi";

export default function Sidebar({ openFile, activeTab }) {
  const [selectedTab, setSelectedTab] = useState("files");

  const handleTabClick = (tab, file) => {
    setSelectedTab(tab);
    if (file) openFile(file);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-16 bg-gray-900 p-2 h-[calc(100vh-40px)] flex flex-col border-r border-gray-700 relative">
        {/* Blue Indicator Line */}
        <div
          className="absolute left-0 w-1 bg-blue-500 transition-all duration-300"
          style={{
            top: {
              files: "10px",
              projects: "58px",
              contact: "100px",
              extras: "148px",
            }[selectedTab],
            height: "42px",
          }}
        ></div>

        {/* Sidebar Buttons */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <button onClick={() => handleTabClick("files")}>
            <FiFile
              className={`text-3xl ${
                selectedTab === "files" ? "text-white" : "text-gray-300"
              }`}
            />
          </button>

          <button onClick={() => handleTabClick("projects", "projects.js")}>
            <FiPackage
              className={`text-3xl ${
                selectedTab === "projects" ? "text-white" : "text-gray-300"
              }`}
            />
          </button>

          <button onClick={() => handleTabClick("contact", "contact.jsx")}>
            <FiBookOpen
              className={`text-3xl ${
                selectedTab === "contact" ? "text-white" : "text-gray-300"
              }`}
            />
          </button>

          <button onClick={() => handleTabClick("extras", "extras.jsx")}>
            <FiGrid
              className={`text-3xl ${
                selectedTab === "extras" ? "text-white" : "text-gray-300"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Explorer Panel */}
      {selectedTab === "files" && <Explorer openFile={openFile} activeTab={activeTab} />}
    </div>
  );
}
