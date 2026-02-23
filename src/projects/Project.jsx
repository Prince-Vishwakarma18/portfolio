import React from "react";
import chatify from "../assets/chatify.jpg";
import Tilt from 'react-parallax-tilt';
import portfolio from "../assets/pj2.jpg"



const projects = [
    {
        title: "CHATIFY : REAL-TIME CHAT APP",
        description:
            "A real-time chat application built using MERN stack with socket.io for instant messaging and authentication.",
        image: chatify,
        live: "https://chatify-18.onrender.com/",
        github: "https://github.com/Prince-Vishwakarma18/chatify",
    },
    {
        title: "PORTFOLIO",
        description:
            "A real-time chat application built using MERN stack with socket.io for instant messaging and authentication.",
        image: portfolio,
        live: "https://portfolio-ten-silk-hskl3toe1m.vercel.app/",
        github: "https://github.com/Prince-Vishwakarma18/portfolio",
    },
];

function Project() {
    return (
        <section className="min-h-screen text-white px-6 md:px-16 py-20">
            <h1 className="text-4xl md:text-5xl text-center font-extrabold pb-10 md:pb-15 tracking-wide">
                My <span className="text-blue-500">Projects</span>
            </h1>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Tilt key={index}>
                        <div
                            className="backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-400 hover:shadow-blue-500/30"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-28 md:h-44 w-full object-cover md:object-contain object-top"
                            />

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h2 className="text-lg font-bold mb-3">
                                    {project.title}
                                </h2>

                                <p className="text-sm text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-center gap-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                  </Tilt>
                ))}
            </div>
        </section>
    );
}

export default Project;
