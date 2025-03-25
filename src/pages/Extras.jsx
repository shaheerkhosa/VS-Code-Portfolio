import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const articles = [
  {
    title: "Celeste Is Hard For A Reason",
    description: "Celeste is a game all about difficulty and overcoming it.",
    link: "https://tech4gamers.com/celeste-is-hard-for-a-reason/",
    image: "../../Celeste.png",
  },
  {
    title: "Lies Of P: Familiar Yet Unique",
    description: "A lot can be done when there are shoulders of giants to stand on.",
    link: "https://tech4gamers.com/lies-of-p-familiar-yet-unique-an-underrated-game/",
    image: "../../liesofP.png",
  },
  {
    title: "Pirating Games Might Not Always Been Unethical",
    description: "Different people have different resources, and different moral grey areas.",
    link: "https://tech4gamers.com/pirating-games-might-not-always-be-unethical/",
    image: "../../Pirating.png",
  },
  {
    title: "The Problem With PvP Games",
    description: "Not buying into the hype of these games is... very understandable.",
    link: "https://tech4gamers.com/the-problem-with-pvp-games-why-people-dislike-it/",
    image: "../../PvP.png",
  },
  {
    title: "Manhunt & Manhunt 2: There’s A Reason No Sequel Is In Sight",
    description: "Rockstar is no stranger to some juicy controversy.",
    link: "https://tech4gamers.com/manhunt-manhunt-2-theres-a-reason-no-sequel-is-in-sight/",
    image: "../../Manhunt.png",
  }
];

function Extras() {
  const titleRef = useRef(null);
  const articleRefs = useRef([]);

  useEffect(() => {
    gsap.set(articleRefs.current, { opacity: 0, y: 20 });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(articleRefs.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="h-full w-full overflow-hidden flex flex-col items-center text-white p-6">
      {/* Scrollable content container */}
      <div className="w-full max-w-screen-lg h-full overflow-y-auto px-4 py-6 custom-scrollbar">
        {/* Title Section */}
        <div className="text-center mb-8" ref={titleRef}>
          <h1 className="text-4xl font-bold text-blue-400">Extras</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Some of our best work—articles that showcase deep insights,
            analysis, and storytelling.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ gridAutoRows: "minmax(0, 1fr)" }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              ref={(el) => (articleRefs.current[index] = el)}
              className="bg-gray-900 rounded-lg shadow-lg p-5 flex flex-col opacity-0 h-full min-h-[300px] transition-transform transform hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold text-white mt-3">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm mt-2 flex-grow">
                {article.description}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold mt-3 inline-block hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollbar styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        .custom-scrollbar {
          scrollbar-width: none; /* For Firefox */
          -ms-overflow-style: none; /* For Edge */
        }
      `}</style>
    </div>
  );
}

export default Extras;
