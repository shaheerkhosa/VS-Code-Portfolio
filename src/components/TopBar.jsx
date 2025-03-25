import { VscCode } from "react-icons/vsc"; // VS Code logo
import { RxCross2 } from "react-icons/rx"; // Close button
import { FiMinus, FiSquare } from "react-icons/fi"; // Minimize & Maximize buttons

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white px-4 flex items-center justify-between h-8 flex-shrink-0 border-b border-gray-700 select-none">
      {/* Left Side - VS Code Logo + Menu Options */}
      <div className="flex items-center space-x-4 text-sm text-gray-300">
        <VscCode className="text-xl text-blue-500" /> {/* VS Code Logo */}
        <span className="cursor-pointer hover:text-white">File</span>
        <span className="cursor-pointer hover:text-white">Edit</span>
        <span className="cursor-pointer hover:text-white">View</span>
        <span className="cursor-pointer hover:text-white">Go</span>
        <span className="cursor-pointer hover:text-white">Run</span>
        <span className="cursor-pointer hover:text-white">Terminal</span>
        <span className="cursor-pointer hover:text-white">Help</span>
      </div>

      {/* Center - VS Code Portfolio */}
      <h1 className="text-sm absolute left-1/2 transform -translate-x-1/2">
        Shaheer Khosa - VS Code Portfolio
      </h1>

      {/* Right Side - Window Control Buttons */}
      <div className="flex items-center space-x-1">
        <button className="w-10 h-8 flex items-center justify-center hover:bg-gray-700">
          <FiMinus className="text-gray-300" /> {/* Minimize */}
        </button>
        <button className="w-8 h-10 flex items-center justify-center hover:bg-gray-700">
          <FiSquare className="text-gray-300" /> {/* Maximize */}
        </button>
        <button className="w-10 h-8 flex items-center justify-center hover:bg-red-600">
          <RxCross2 className="text-gray-300" /> {/* Close */}
        </button>
      </div>
    </div>
  );
}
