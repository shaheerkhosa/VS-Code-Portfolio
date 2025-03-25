import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaLaptopCode, FaServer, FaChartBar, FaUser, FaDatabase } from "react-icons/fa";

const techStacks = {
  frontend: ["React", "Three.js", "GSAP"],
  backend: ["Express.js", "FastAPI", "MongoDB", "SQL"],
  dataScience: ["TensorFlow", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
};

const Home = () => {
  const nameRef = useRef(null);
  const bioRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen p-10">
      <div className="max-w-6xl mx-auto grid grid-row-1 md:grid-row-2 gap-8">
        {/* Left Side (Intro + Image) */}
        <div className="flex flex-row md:flex-row items-start">
          <div className="flex-1">
            <h1 ref={nameRef} className="text-4xl font-bold text-blue-400">
              Shaheer Khosa
            </h1>
            <p className="text-gray-400 text-lg pt-2">
              Web Developer & Data Scientist
            </p>
            <p ref={bioRef} className="text-gray-400 mt-4 leading-relaxed">
              Hey! I'm a fourth-year Data Science student who loves building cool
              web apps and exploring machine learning. After three years as a tech
              writer, I'm now diving into software development—merging my passion
              for coding, design, and data (and, of course, video games 🎮).
            </p>
          </div>

          {/* Profile Picture */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ml-6 bg-gray-900">
            <img
              src="../../PFP.jpg" // Change this to your actual image path
              alt="Shaheer Khosa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Help & Technologies Section (Evenly Split) */}
        <div className="flex flex-row gap-6 items-center">
          {/* Help Section */}
          <div className="flex-1 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl text-blue-400 flex items-center">
              <FaUser className="mr-2" /> Help
            </h2>
            <p className="text-gray-400 mt-2">
              Not familiar with VS Code? No worries! This portfolio is designed
              to look like a code editor. Click on the 'Files' panel to navigate
              different sections like About, Projects, and Contact. If you're
              looking for my GitHub or social links, check the sidebar!
            </p>
          </div>

          {/* Technologies Section */}
          <div className="flex-1">
            <h2 className="text-2xl text-blue-400 flex items-center">
              <FaDatabase className="mr-2" /> Technologies
            </h2>

            {/* Frontend Section */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mt-4">
              <h2 className="text-xl text-blue-400 flex items-center">
                <FaLaptopCode className="mr-2" /> Frontend
              </h2>
              <p className="text-gray-300 text-lg mt-2">
                {techStacks.frontend.join(", ")}
              </p>
            </div>

            {/* Backend Section */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mt-4">
              <h2 className="text-xl text-blue-400 flex items-center">
                <FaServer className="mr-2" /> Backend
              </h2>
              <p className="text-gray-300 text-lg mt-2">
                {techStacks.backend.join(", ")}
              </p>
            </div>

            {/* Data Science Section */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mt-4">
              <h2 className="text-xl text-blue-400 flex items-center">
                <FaChartBar className="mr-2" /> Data Science
              </h2>
              <p className="text-gray-300 text-lg mt-2">
                {techStacks.dataScience.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
