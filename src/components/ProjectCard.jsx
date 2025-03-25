import React from "react";
import { FiGithub } from "react-icons/fi";

function ProjectCard({ image, name, description, githubLink }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-5 shadow-lg transition-transform transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-400 text-sm mt-2">{description}</p>

      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mt-4 text-blue-400 hover:text-blue-300"
      >
        <FiGithub className="mr-2 text-xl" />
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
