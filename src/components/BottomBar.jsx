const BottomBar = () => {
  return (
    <div className="w-full h-8 bg-gray-900 text-gray-300 flex justify-between items-center px-4 text-sm border-t border-gray-700 fixed bottom-0 left-0">
      {/* Left side: GitHub branch info & warning/error icons */}
      <div className="flex items-center space-x-2 h-full">
        <div className="flex items-center space-x-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="18" cy="18" r="3"></circle>
            <path d="M6 9v6a3 3 0 0 0 3 3h6"></path>
            <path d="M15 9h6"></path>
          </svg>
          <span className="text-gray-400">Shaheer*</span>
        </div>
        {/* Warning Icon with "0" */}
        <div className="flex items-center space-x-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          </svg>
          <span className="text-gray-400">0</span>
        </div>

        {/* Error Icon with "0" */}
        <div className="flex items-center space-x-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9l-6 6"></path>
            <path d="M9 9l6 6"></path>
          </svg>
          <span className="text-gray-400">0</span>
        </div>
      </div>

      {/* Right side: Prettier & other icons */}
      <div className="flex items-center space-x-1 h-full">
        <img
          src="../../doubleticks.png"
          width={16}
          height={16}
          className="opacity-70"
        />
        <span className="text-gray-400">Prettier</span>
      </div>
    </div>
  );
};

export default BottomBar;
