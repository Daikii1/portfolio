import me from '../assets/me.jpg';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="mx-auto mt-10 pt-20 max-w-6xl">
            <div className="container flex flex-col-reverse md:flex-row md:justify-between">
                {/* First section */}
                <div>
                    <motion.h1
                        className="text-3xl text-[#10375C] font-bold dark:text-white"
                        initial={{ y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Hi! 👋
                    </motion.h1>
                    <motion.h1
                        className="text-3xl text-[#10375C] font-semibold dark:text-white"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        My Name is <span className="text-3xl font-semibold text-[#F3C623]">Outmane</span>
                    </motion.h1>
                    <motion.p
                        className="mt-4 font-semibold dark:text-white"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                    >
                        Full-Stack Developer 💻 <br />
                        From Morocco 📍<br />
                        Passionate about building seamless web <br />
                        experiences with Laravel and React, always <br />
                        learning, and sharing knowledge along the way.
                    </motion.p>
                    <motion.a
                        href="#contact"
                        className="p-4 rounded-lg hover:bg-slate-200 transition-all duration-300 text-[#10375C] font-semibold bg-[#F4F6FF] mt-6 inline-block"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.5 }}
                    >
                        Contact Me!
                    </motion.a>
                </div>

                {/* Second section with blob */}
                <motion.div
                    className="blob w-80 h-80 rounded-full border-4 border-[#F3C623] bg-cover bg-center shadow-2xl"
                    style={{ backgroundImage: `url(${me})` }}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 1.2 }}
                ></motion.div>
            </div>

            {/* Inline CSS for Blob Animation */}
            <style>{`
                @keyframes blobAnimation {
                    0% { border-radius: 50%; }
                    25% { border-radius: 40% 50% 50% 60%; }
                    50% { border-radius: 30% 60% 40% 50%; }
                    75% { border-radius: 50% 30% 60% 40%; }
                    100% { border-radius: 60% 50% 30%; }
                }
                .blob {
                    animation: blobAnimation 7s infinite alternate ease-in-out;
                }
            `}</style>

            <div className="mt-12 space-y-8">
                {/* Clickable heading with arrow icon */}
                <div onClick={toggleDropdown} className="cursor-pointer">
                    <h1 className="font-bold text-2xl hover:text-[#F3C623] text-[#10375C] dark:text-white dark:hover:text-[#F3C623] flex items-center">
                        Show My Skills
                        <i className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 animate-bounce ml-2 hover:text-[#F3C623]"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </i>
                    </h1>
                </div>

                {/* Dropdown with smooth animation */}
                <div
                    className={`${isDropdownOpen ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-30 opacity-0 scale-95'
                        } overflow-hidden transition-all duration-700 ease-in-out`}
                >
                    <h4 className="font-semibold mt-3 mb-3 flex items-center  dark:text-white">Technologies :</h4>
                    <div className="p-4 mt-2 flex flex-wrap space-x-3">
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 dark:text-[#F3C623] font-medium p-2 mb-2 rounded-md">HTML5</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">CSS3</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">JavaScript</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">Tailwind</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">Bootstrap</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">React.js</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">PHP</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">Laravel</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 font-medium dark:text-[#F3C623]  p-2 mb-2 rounded-md">WordPress</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 dark:text-[#F3C623]  font-medium p-2 mb-2 rounded-md">Figma</div>
                        <div className="block bg-gray-400 text-white dark:bg-slate-800 dark:text-[#F3C623]  font-medium p-2 mb-2 rounded-md">Git</div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-20 flex justify-center">
                <a
                    href="https://daikii1.github.io/portfolio/Outman Jail cv.pdf"
                    download="cv.pdf"
                    className="hover:scale-125 bg-[#F3C623] transition-all duration-300 hover:bg-amber-500 p-4 rounded font-bold text-gray-50 flex items-center"
                >
                    <i className="fas fa-download mr-2 animate-bounce"></i>
                    Download CV
                </a>
            </div>
        </div>
    );
}
