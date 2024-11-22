import React, { useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            delay: 200,
        });
    }, []);

    return (
        <div className='mx-auto mt-12 max-w-6xl'>
            <h1
                className='dark:text-white font-semibold text-3xl'
                data-aos="fade-up"
                data-aos-delay="400"
            >
                Don’t be a Stranger!
            </h1>
            <p
                className='dark:text-white font-medium mt-4'
                data-aos="fade-up"
                data-aos-delay="800"
            >
                💌 Drop me an email if you think we’d make a great team! <br /> Let’s create amazing things together and have fun along the way. 😊
            </p>
            <h2
                className='font-bold text-gray-400 text-lg'
                data-aos="fade-up"
                data-aos-delay="1200"
            >
                outmanejail@gmail.com
            </h2>

            {/* Social Media Icons */}
            <div className='flex space-x-6 mt-8'>
                <a
                    href="mailto:outmanejail@gmail.com"
                    className="text-gray-500 dark:text-white hover:text-red-500 transition duration-200"
                    data-aos="fade-up"
                    data-aos-delay="1400"
                >
                    <SiGmail size={30} />
                </a>

                <a
                    href="https://github.com/Daikii1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition duration-200"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                >
                    <FaGithub size={30} />
                </a>


                <a
                    href="https://www.linkedin.com/in/outmane-jail-7194422b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-white hover:text-blue-600 transition duration-200"
                    data-aos="fade-up"
                    data-aos-delay="2000"
                >
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
}

export default Contact;
