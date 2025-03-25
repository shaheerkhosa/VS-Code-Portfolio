import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import GitHubCalendar from "react-github-calendar";
import gsap from "gsap";

const projects = [
  {
    image: "../../rubikscube.png",
    name: "3D Rubik's Cube",
    description: "A fully interactive Rubik's Cube using Three.js.",
    githubLink: "https://github.com/shaheerkhosa/3D-Rubix-Cube",
  },
  {
    image: "../../Portfolio.png",
    name: "VS Code Portfolio",
    description: "A portfolio website that looks like VS Code.",
    githubLink: "https://github.com/shaheerkhosa/VS-Code-Portfolio",
  },
  {
    image: "../../attrition.png",
    name: "Employee Attrition Prediction",
    description: "A light model that allows for employee attrition prediction.",
    githubLink: "https://github.com/shaheerkhosa/Attrition-Prediction",
  },
];

function Projects() {
  const titleRef = useRef(null);
  const githubRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    // Title & Description Animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    });

    // GitHub Contributions Animation
    gsap.from(githubRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });

    // Project Cards Staggered Animation
    gsap.from(projectRefs.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="min-h-screen text-white p-10 -mt-5">
      {/* Title & Description */}
      <div className="text-center mb-8" ref={titleRef}>
        <h1 className="text-4xl font-bold text-blue-400">Projects</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Here are some things we've built—projects that showcase creativity,
          problem-solving, and technical skills.
        </p>
      </div>
  
      {/* GitHub Activity Widget */}
      <div className="flex justify-center">
        <div ref={githubRef} className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-white text-center mb-4">
            GitHub Contributions
          </h2>
          <div className="flex justify-center">
            <GitHubCalendar username="shaheerkhosa" colorScheme="dark" blockSize={8} fontSize={12} />
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
            ref={(el) => (projectRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );  
}

export default Projects;
