import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import resume from "../assets/Prince_Vishwakarma_Resume.pdf";
import profile2 from "../assets/profile2.jpeg";

const Snow = () => {
    const snowArray = new Array(50).fill(0);
    return (
        <div className="absolute inset-0 overflow-hidden ">
            {snowArray.map((_, i) => (
                <span key={i} className="absolute top-[0px] w-[3px] h-[3px] rounded-full bg-white animate-snow"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${6 + Math.random() * 10}s`,
                    }}
                />
            ))}
        </div>
    );
};

function Hero() {
    const [text, setText] = useState("");
    useEffect(() => {
        const word = "Vishwakarma";
        let i = 0;

        const interval = setInterval(() => {
            setText(word.slice(0, i + 1));
            i++;

            if (i === word.length) {
                clearInterval(interval);
            }
        }, 120);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col md:flex-row items-center py-10 md:py-33 md:justify-between px-6 md:px-16 bg-gray-950 text-white overflow-hidden">
            <Snow />
            {/* Left Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:max-w-xl z-10">

                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <h1 className="text-4xl pt-7 sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                        Prince <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600/10 text-transparent bg-clip-text">
                            {text}
                        </span>
                    </h1>
                </Tilt>

                <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-md md:max-w-xl">
                    I build <b>modern, scalable <span className="text-green-400">MERN</span> applications</b> and robust React ecosystems.
                    I also craft <b>responsive web apps</b> with clean architecture and interactive user experiences.
                </p>

                <div className="flex gap-4">
                    <a
                        href="#project"
                        className="px-4 md:px-8 py-3 rounded-full bg-indigo-600 text-white font-bold shadow-lg hover:scale-105 transition"
                    >
                        Explore Projects
                    </a>

                    <a
                        href={resume}
                        download
                        className="px-4 md:px-8 py-3 rounded-full border-2 border-gray-600 font-bold hover:scale-105 transition flex items-center gap-2"
                    >
                        <FiDownload /> Resume
                    </a>
                </div>
            </div>

            {/* Profile Img */}
            <Tilt >
                <div className="relative mt-22 md:mt-0 w-72 h-72 md:w-[380px] md:h-[380px] flex items-center justify-center">

                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-500">
                        <img
                            src={profile2}
                            alt="Profile"
                            className="w-full h-full object-cover scale-125 object-bottom"
                        />
                    </div>

                    {/* Tech Icon */}
                    <div className="absolute -top-11 left-1/2 -translate-x-1/2 text-4xl text-blue-400">
                        <FaReact />
                    </div>

                    <div className="absolute top-10 -left-6 text-4xl text-green-500">
                        <FaNodeJs />
                    </div>

                    <div className="absolute bottom-10 -left-6 text-4xl text-orange-500">
                        <FaHtml5 />
                    </div>

                    <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 text-4xl text-yellow-400">
                        <FaJs />
                    </div>

                    <div className="absolute bottom-10 -right-4 text-4xl text-green-600">
                        <SiMongodb />
                    </div>

                    <div className="absolute top-10 -right-6 text-4xl text-gray-300">
                        <SiExpress />
                    </div>

                </div>
            </Tilt>
        </section>
    );
}

export default Hero;
