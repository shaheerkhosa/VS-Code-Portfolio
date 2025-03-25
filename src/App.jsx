import { useState } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import BottomBar from "./components/BottomBar";

function App() {
  const [openTabs, setOpenTabs] = useState(["home.jsx"]); // Open Home by default
  const [activeTab, setActiveTab] = useState("home.jsx"); // Set Home as active

  const openFile = (fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
  };

  return (
    <div className="h-screen flex-1 flex-col bg-gray-800 text-gray-100">
      <TopBar />
      <div className="flex flex-1">
        {/* Pass both openFile and activeTab to keep the highlight */}
        <Sidebar openFile={openFile} activeTab={activeTab} />
        <MainContent openTabs={openTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
