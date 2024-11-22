import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 100, // optional: default delay can be set for a smooth experience
        });
    }, []);

    return (
        <div className='mx-auto h-fit pt-20 max-w-6xl'>
            <h1
                className='text-4xl font-bold mb-8 text-[#456b81fa] dark:text-slate-50'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="0"
            >
                Experience
            </h1>

            <div className='container'>
                <div
                    className='flex items-center space-x-4'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                >
                    <h3 className='mr-14 text-gray-500 dark:text-gray-200'>
                        May 1, 2024, to May 31, 2024
                    </h3>
                    <span className='font-bold dark:text-slate-100'>
                        SoftSevenArt.com, Casablanca
                    </span>
                    <h1 className='font-semibold text-amber-500'>
                        Intern
                    </h1>
                </div>
                <div
                    className='mt-4 font-medium dark:text-white'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    data-aos-delay="400"
                >
                    <p>
                        I completed an internship at SoftSevenArt.com in Casablanca from May 1 to May 31, 2024, where I worked with UI/UX design, web design, and technologies like HTML, CSS, JavaScript, PHP, and Laravel.
                    </p>
                </div>
            </div>

            <div className='container mt-8'>
                <div
                    className='flex items-center space-x-4'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                >
                    <h3 className='mr-14 text-gray-500 dark:text-gray-200'>
                        May 1, 2023, to May 31, 2023
                    </h3>
                    <span className='font-bold dark:text-slate-100'>
                        Filali Tech, TAZA
                    </span>
                    <h1 className='font-semibold text-amber-500'>
                        Intern
                    </h1>
                </div>
                <div
                    className='mt-4 font-medium dark:text-white'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    data-aos-delay="800"
                >
                    <p>Laptop repair and PC software installation</p>
                </div>
            </div>

            {/* Education */}
            <h1
                className='text-4xl mt-12 font-bold mb-8 text-[#456b81fa] dark:text-slate-50'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="1000"
            >
                Education
            </h1>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="1200"
            >
                <h1 className='font-bold dark:text-slate-100'>
                    ELOSIG, École Privée de Formation Professionnelle - Fes
                </h1>
                <h1 className='text-gray-500 dark:text-gray-200'>2022-2024</h1>
                <p className='font-medium dark:text-white'>
                    IT Development Specialist
                </p>
            </div>
        </div>
    );
}

export default Experience;
