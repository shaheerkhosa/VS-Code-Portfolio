import React, { useEffect, useRef } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import gsap from "gsap";

function Contact() {
  const particlesRef = useRef([]);

  useEffect(() => {
    particlesRef.current.forEach((particle, index) => {
      gsap.to(particle, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        opacity: "random(0.3, 1)",
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute w-2 h-2 rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "rgba(0, 150, 255, 0.8)",
              boxShadow: "0 0 2px rgba(0, 150, 255, 0.9)",
              filter: "blur(1px)",
            }}
          ></span>
        ))}
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col items-center z-10 mt-[-12vh]">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Get in Touch</h1>
        <p className="text-gray-400 mb-8 text-center max-w-md pb-2">
          Feel free to reach out! Whether it's about a project, collaboration,
          or just to say hi, I'm always open to chat.
        </p>

        {/* Contact Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Contact Info
          </h2>
          <div className="space-y-4">
            <a
              href="mailto:shaheerkhosa6@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              <FiMail className="text-xl text-blue-400" />
              <span className="text-gray-200">shaheerkhosa6@gmail.com</span>
            </a>

            <a
              href="https://github.com/shaheerkhosa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              <FiGithub className="text-xl text-gray-300" />
              <span className="text-gray-200">github.com/shaheerkhosa</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shaheer-khosa-a3743b260/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              <FiLinkedin className="text-xl text-blue-400" />
              <span className="text-gray-200">
                linkedin.com/in/shaheer-khosa
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
