import { useState } from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Extras from "../pages/Extras";
import Projects from "../pages/Projects";

const tabComponents = {
  "home.jsx": Home,
  "contact.jsx": Contact,
  "extras.jsx": Extras,
  "projects.js": Projects,
};

export default function MainContent({ openTabs, activeTab, setActiveTab }) {
  const ActiveComponent = tabComponents[activeTab] || (() => <p>File not found.</p>);

  return (
    <div className="flex flex-col flex-1 bg-gray-800 min-h-0 max-h-[calc(100vh-40px)] overflow-hidden">
      {/* Tabs Section */}
      <div className="flex bg-gray-900">
        {openTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-sm border-r border-gray-700
              ${activeTab === tab ? "bg-gray-800 border-b-0" : "bg-gray-900"}`}
          >
            {activeTab === tab && (
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500"></div>
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section - Adjusted Height */}
      <div className="flex-1 min-h-0 max-h-full p-4">
        <ActiveComponent/>
      </div>
    </div>
  );
}
