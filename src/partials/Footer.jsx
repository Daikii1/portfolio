// src/Footer.js
export default function Footer() {
    return (
        <footer className="dark:bg-gray-800 mt-4 dark:text-white font-semibold flex md:justify-between md:flex-row flex-col-reverse bg-[#F4F6FF]  text-black  p-4">
            <div>
                <h1 className="font-extrabold text-2xl text-amber-500">Outmane Jail</h1>
                <h1>Full-Stack Developer </h1>
            </div>
            <div>
                <p>&copy; 2024 Outmane Jail. All rights reserved.</p>
                {/* Download CV Button */}
                <div className="w-full mt-2 flex justify-center">
                    <a
                        href="/Outman Jail cv.pdf"
                        download="Your_CV.pdf"
                        className="hover:scale-125 bg-[#F3C623] transition-all duration-300 hover:bg-amber-500 p-2 rounded font-bold text-gray-50 flex items-center"
                    >
                        <i className="fas fa-download mr-2 animate-bounce"></i>
                        Download CV
                    </a>
                </div>
            </div>
        </footer>
    );
}
