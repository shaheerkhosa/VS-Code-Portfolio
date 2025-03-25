import React from "react";
import ProjectCard from "../components/ProjectCard";
import GitHubCalendar from "react-github-calendar";
const projects = [
  {
    image: "/images/project1.jpg",
    name: "3D Rubik's Cube",
    description: "A fully interactive Rubik's Cube using Three.js.",
    githubLink: "https://github.com/shaheerkhosa/3D-Rubix-Cube",
  },
  {
    image: "/images/project2.jpg",
    name: "VS Code Portfolio",
    description: "A portfolio website that looks like VS Code.",
    githubLink: "https://github.com/yourusername/vscode-portfolio",
  },
];

function Projects() {
  return (
    <div className="min-h-screen text-white p-10">
      {/* Title & Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-400">Projects</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Here are some things we've built—projects that showcase creativity,
          problem-solving, and technical skills.
        </p>
      </div>

      {/* GitHub Activity Widget */}
      <div className="flex justify-center">
        <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-white text-center mb-4">
            GitHub Contributions
          </h2>
          <div className="flex justify-center">
            <GitHubCalendar username="shaheerkhosa" colorScheme="dark" blockSize={8} fontSize={12}/>
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
