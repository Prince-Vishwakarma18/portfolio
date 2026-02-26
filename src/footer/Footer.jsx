import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-gray-950 text-white/90 flex flex-col items-center justify-center space-y-5 py-7 border-t border-gray-800">

            {/* Name */}
            <h1 className="font-bold text-2xl tracking-wide">
                <b>Prince Vishwakarma</b>
            </h1>

            <div className="flex gap-8 font-semibold text-gray-400">
                <a href="#home" className="hover:text-white transition">
                    Home
                </a>

                <a href="#skills" className="hover:text-white transition">
                    Skills
                </a>

                <a href="#project" className="hover:text-white transition">
                    Projects
                </a>
            </div>

            <div className="flex gap-6 text-xl">
                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition hover:scale-110"
                >
                    <FaLinkedin size={25} />
                </a>
                <a
                    href="https://github.com/Prince-Vishwakarma18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                >
                    <FaGithub size={25} />
                </a>
                <a
                    href="https://www.instagram.com/_.prince_panchal._?igsh=MXdrZzZhbDQyYmdjdA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition hover:scale-110"
                >
                    <FaInstagram size={25} />
                </a>

                <a
                    href="https://www.facebook.com/share/1GfsQQSJMp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition hover:scale-110"
                >
                    <FaFacebook size={25} />
                </a>

            </div>

            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Prince Vishwakarma. All rights reserved.
            </p>

        </footer>
    );
}

export default Footer;
