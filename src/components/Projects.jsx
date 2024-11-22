import React, { useEffect } from 'react';
import Aurashop from '../assets/Aurashop.JPG';
import SwiftRide from '../assets/swidtred.JPG';
import QuickFix from '../assets/Qquickfix.JPG';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className="mx-auto pt-20 max-w-8xl rounded-md">
            {/* Section Header */}
            <div
                className="text-center mb-12"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="100"
            >
                <h1 className="text-4xl font-bold dark:text-white">My Projects</h1>
                <p className="text-lg mt-4 dark:text-gray-300">
                    Here are some of the projects I've worked on. Each project highlights my skills <br /> in web
                    development and showcases my approach to solving real-world problems.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {/* Aurashop Project */}
                <div
                    className="w-full sm:w-96 min-h-[28rem] shadow-md dark:bg-gray-600 rounded flex flex-col"
                    data-aos="fade-right"
                >
                    <img src={Aurashop} alt="Aurashop Project" className="w-full h-auto rounded-t" />
                    <div className="p-4 flex flex-col flex-grow">
                        <h1 className="font-extrabold text-lg dark:text-white">Aurashop</h1>
                        <h2 className="font-medium text-[#F3C623]">Description:</h2>
                        <p className="text-sm mb-4 dark:text-white">
                            Aurashop is a modern e-commerce platform designed to offer a seamless shopping experience for
                            customers looking for a wide range of products.
                        </p>
                        <div className="mt-auto">
                            <a
                                href="https://github.com/Daikii1/Aurashop"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-gray-800 hover:bg-slate-700 text-white py-2 px-4 rounded-full flex items-center space-x-2">
                                    <FaGithub size={20} />
                                    <span>GitHub</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* SwiftRide Project */}
                <div
                    className="w-full sm:w-96 min-h-[28rem] shadow-md dark:bg-gray-600 rounded flex flex-col"
                    data-aos="fade-up"
                >
                    <img src={SwiftRide} alt="SwiftRide Project" className="w-full h-auto rounded-t" />
                    <div className="p-4 flex flex-col flex-grow">
                        <h1 className="font-extrabold text-lg dark:text-white">SwiftRide</h1>
                        <h2 className="font-medium text-[#F3C623]">Description:</h2>
                        <p className="text-sm mb-4 dark:text-white">
                            SwiftRide is a reliable car rental service that offers a wide range of vehicles for short or
                            long-term use. Book your car today for a convenient driving experience!
                        </p>
                        <div className="mt-auto">
                            <a
                                href="https://github.com/Daikii1/Swiftride"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-gray-800 hover:bg-slate-700 text-white py-2 px-4 rounded-full flex items-center space-x-2">
                                    <FaGithub size={20} />
                                    <span>GitHub</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* QuickFix Project */}
                <div
                    className="w-full sm:w-96 min-h-[28rem] shadow-md dark:bg-gray-600 rounded flex flex-col"
                    data-aos="fade-left"
                >
                    <img src={QuickFix} alt="QuickFix Project" className="w-full h-auto rounded-t" />
                    <div className="p-4 flex flex-col flex-grow">
                        <h1 className="font-extrabold text-lg dark:text-white">QuickFix</h1>
                        <h2 className="font-medium text-[#F3C623]">Description:</h2>
                        <p className="text-sm mb-4 dark:text-white">
                            QuickFix is an on-demand service platform offering expert maintenance solutions for
                            plumbing, electrical, and home repairs, available at your convenience.
                        </p>
                        <div className="mt-auto">
                            <a
                                href="https://github.com/Daikii1/QuickFix"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-gray-800 hover:bg-slate-700 text-white py-2 px-4 rounded-full flex items-center space-x-2">
                                    <FaGithub size={20} />
                                    <span>GitHub</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
