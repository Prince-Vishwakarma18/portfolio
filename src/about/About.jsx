import React from "react";
import profile2 from "../assets/profile.png"
import AOS from "aos";



function About() {
    return (
        <section  className="py-15 md:px-16 text-white">
            <h1 className="text-4xl py-7 md:text-5xl text-center font-extrabold tracking-wide">
                About <span className="text-blue-500">Me</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Profile Image */}
                <div className="w-72 h-72 md:w-[380px] md:h-[380px] flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30">
                        <img
                            className="w-full h-full scale-75 "  
                            src={profile2}
                            alt="Profile"
                        />
                    </div>
                </div>

                {/* Profile + Education */}
                <div className="max-w-xl text-center px-2 md:px-0 md:text-left">

                    {/* Profile Section */}
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold mb-3 ">
                            Prince <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600/10 text-transparent bg-clip-text">Vishwakarma</span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-8">
                            Passionate Full Stack Developer specializing in MERN and  a strong foundation in Java., focused on building modern, scalable web applications with clean UI/UX and optimized performance.
                        </p>
                    </div>

                    {/* Education Section */}
                    <div className="px-2 md:px-0">
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Education
                        </h3>

                        <div className="bg-white/5 border rounded-lg p-5 backdrop-blur-md border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/10">
                            <p className="font-semibold text-lg">
                                Bachelor of Computer Applications (BCA)
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Shree Ram Swaroop Memorial University
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                2023 - 2026
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
