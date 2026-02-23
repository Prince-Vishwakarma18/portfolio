import React from "react";
import Tilt from 'react-parallax-tilt';
import { FaJava } from "react-icons/fa6";
import { SiBootstrap, SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import {
    SiJavascript,
    SiReact,
    SiRedux,
    SiNodedotjs,
    SiMongodb,
    SiPostman,
    SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
const Snow = () => {
    const snowArray = new Array(50).fill(0);
    return (
        <div className="absolute inset-0 overflow-hidden ">
            {snowArray.map((_, i) => (
                <span key={i} className="absolute -top-[20px] w-[3px] h-[3px] rounded-full bg-white animate-snow"
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
function Skills() {
    const skillSet = [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Express", icon: <SiExpress />, color: "#F7DF1E" },
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Redux / Context", icon: <SiRedux />, color: "#764ABC" },
        { name: "Java", icon: <FaJava />, color: "#FF6C37" },
        { name: "HTML", icon: <FaHtml5 />, color: "#FF6C37" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#07C3ED" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "BootStrap", icon: <SiBootstrap />, color: "#B727F5" },
        { name: "SQL", icon: <GrMysql />, color: "#0000FF" },
        { name: "API Testing", icon: <SiPostman />, color: "#FF6C37" },
    ];

    return (
        <section className="relative top-0 bg-gray-950 min-h-screen text-white px-6 md:px-16 ">
            <Snow />
            <h1 className="text-4xl md:text-5xl text-center font-extrabold uppercase mb-16">
                Technical Skills
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                {skillSet.map((skill, index) => (
                    <Tilt key={index}>
                        <div
                            className="flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-lg border border-white/20  shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30"
                        >
                            <div
                                className="text-5xl mb-4 hover:scale-125 transition duration-500 shadow-lg"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </div>
                            <p className="font-semibold text-lg text-center">
                                {skill.name}
                            </p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}

export default Skills;
