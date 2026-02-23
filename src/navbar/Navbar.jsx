import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import resume from "../assets/Prince_Vishwakarma_Resume.pdf";
import { useEffect } from "react";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [text, SetText] = useState("")
    useEffect(() => {
        const word = "VISHWAKARMA";
        let i = 0;
        const interval = setInterval(() => {
            SetText(word.slice(0, i + 1));
            i++;
            if (i === word.length) {
                clearInterval(interval);
            }
        }, 120);
        return () => clearInterval(interval);
    }, [])

    const handleToggle = () => {
        setOpenMenu((prev) => !prev);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full h-16 z-50 flex justify-between items-center px-6 bg-gray-950 text-white border-b border-gray-800 shadow-md">
                {/* Logo */}
                <h1 className="font-black text-xl">
                    PRINCE {" "}
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600/10 text-transparent bg-clip-text">
                        {text}
                    </span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 font-semibold">
                    <li>
                        <a href="#home" className="hover:text-violet-400 hover:border-b-2 border-violet-700 transition ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-violet-400 hover:border-b-2 border-violet-700 transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#project" className="hover:text-violet-400 hover:border-b-2 border-violet-700 transition">
                            Project
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-violet-400 hover:border-b-2 border-violet-700 transition">
                            Contact
                        </a>
                    </li>

                    {/* Resume Button */}
                    <li>
                        <a
                            href={resume}
                            download="Prince_Vishwakarma_Resume.pdf"
                            className="flex items-center gap-2 px-4 py-2 bg-violet-700 rounded-md font-bold hover:bg-violet-600 transition"
                        >
                            <MdOutlineFileDownload className="text-xl" />
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div onClick={handleToggle} className="md:hidden text-2xl cursor-pointer">
                    <TiThMenu />
                </div>
            </nav>

            {/* Mobile Menu */}
            {openMenu && (
                <div className="md:hidden fixed top-16 left-0 w-full bg-gray-950 text-white px-6 py-6 space-y-5 z-40 shadow-lg">
                    <a href="#home" onClick={handleToggle} className="block text-lg hover:text-violet-400 transition">
                        Home
                    </a>
                    <a href="#about" onClick={handleToggle} className="block text-lg hover:text-violet-400 transition">
                        About
                    </a>
                    <a href="#project" onClick={handleToggle} className="block text-lg hover:text-violet-400 transition">
                        Project
                    </a>
                    <a href="#contact" onClick={handleToggle} className="block text-lg hover:text-violet-400 transition">
                        Contact
                    </a>
                    {/* Mobile Resume Button */}
                    <a
                        href={resume}
                        download="Prince_Vishwakarma_Resume.pdf"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-violet-700 rounded-md font-bold hover:bg-violet-600 transition"
                    >
                        <MdOutlineFileDownload className="text-xl" />
                        Get Resume
                    </a>
                </div>
            )}
        </>
    );
}
export default Navbar;
