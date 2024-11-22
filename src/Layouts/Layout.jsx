// src/Layout.js
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

import Home from '../components/Home';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Cntact from '../components/Contact';

export default function Layout() {
    return (

        <div className="flex flex-col min-h-screen dark:bg-[#021526]">
            <Navbar />
            <main className="flex-grow p-4">
                <div id="home"><Home /></div>
                <div id="projects"><Projects /></div>
                <div id="experience"><Experience /></div>
                <div id="contact"><Cntact /></div>
            </main>
            <Footer />
        </div>

    );
}
