import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };


    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <nav className="rounded-lg hover:bg-[#b2def8] dark:hover:hover:bg-[#214255]  md:max-w-2xl md:mt-1 mx-auto fixed left-0 right-0 text-black font-bold shadow-md bg-[#F4F6FF] p-2 z-50 dark:bg-gray-600 dark:bg-opacity-50 dark:text-white transition-colors duration-500">
            <div className="flex justify-between items-center">
                {/* Icons for large screens */}
                <div className="flex space-x-4 hidden md:flex">
                    <a href="https://github.com/Daikii1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github hover:text-gray-700 dark:hover:text-gray-400 text-2xl text-black dark:text-white transition-colors duration-300"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/outmane-jail-7194422b7/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin hover:text-blue-800 dark:hover:text-blue-400 text-2xl text-black dark:text-white transition-colors duration-300"></i>
                    </a>
                </div>

                {/* Hamburger Icon for small screens */}
                <div onClick={() => setIsMobileMenuOpen(prev => !prev)} className="cursor-pointer md:hidden">
                    <i className="fas fa-bars text-2xl text-black dark:text-white transition-colors duration-300"></i>
                </div>

                {/* Desktop Navbar Links */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a href="#home" className="hover:bg-[#F3C623] p-3 transition-colors duration-500 rounded-md">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:bg-[#F3C623] p-3 transition-colors duration-500 rounded-md">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:bg-[#F3C623] p-3 transition-colors duration-500 rounded-md">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:bg-[#F3C623] p-3 transition-colors duration-500 rounded-md">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Dark Mode Icon */}
                <div onClick={toggleDarkMode} className="cursor-pointer ml-4">
                    <i className={`fas fa-moon text-2xl ${isDarkMode ? 'text-yellow-500' : 'text-black'} transition-colors duration-300`}></i>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className={`md:hidden overflow-hidden  transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} absolute top-0 left-0 right-0 bg-slate-600`}>
                <div className="space-y-4 text-center dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    {/* Close Button */}
                    <div onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 cursor-pointer">
                        <i className="fas fa-times text-2xl text-white hover:text-red-600"></i>
                    </div>

                    {/* Mobile Links */}
                    <ul className="space-y-4 mt-8">
                        <li>
                            <a href="/" className="block p-4 rounded-md text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="block p-4 rounded-md text-white">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="block p-4 rounded-md text-white">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block p-4 rounded-md text-white">
                                Contact
                            </a>
                        </li>

                        {/* Mobile Social Links */}
                        <div className="flex justify-center space-x-4 mt-6">
                            <a href="https://github.com/Daikii1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github hover:text-gray-700 dark:hover:text-gray-400 text-2xl text-white transition-colors duration-300"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/outmane-jail-7194422b7/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin hover:text-blue-800 dark:hover:text-blue-400 text-2xl text-white transition-colors duration-300"></i>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
