import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

import Home from '../components/Home';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Cntact from '../components/Contact';

export default function Layout() {
    return (
        <div
            className="flex flex-col min-h-screen 
            bg-[repeating-linear-gradient(90deg,hsla(196,0%,79%,0.08)_0px,hsla(196,0%,79%,0.08)_2px,transparent_2px,transparent_98px),repeating-linear-gradient(0deg,hsla(196,0%,79%,0.08)_0px,hsla(196,0%,79%,0.08)_2px,transparent_2px,transparent_98px),repeating-linear-gradient(0deg,hsla(196,0%,79%,0.12)_0px,hsla(196,0%,79%,0.12)_2px,transparent_2px,transparent_14px),repeating-linear-gradient(90deg,hsla(196,0%,79%,0.12)_0px,hsla(196,0%,79%,0.12)_2px,transparent_2px,transparent_14px),linear-gradient(90deg,rgb(255,255,255),rgb(255,255,255))] 
            dark:bg-[repeating-linear-gradient(90deg,hsla(57,0%,42%,0.12)_0px,hsla(57,0%,42%,0.12)_2px,transparent_2px,transparent_62px),repeating-linear-gradient(0deg,hsla(57,0%,42%,0.12)_0px,hsla(57,0%,42%,0.12)_2px,transparent_2px,transparent_62px),repeating-linear-gradient(0deg,hsla(57,0%,42%,0.12)_0px,hsla(57,0%,42%,0.12)_2px,transparent_2px,transparent_12px),repeating-linear-gradient(90deg,hsla(57,0%,42%,0.12)_0px,hsla(57,0%,42%,0.12)_2px,transparent_2px,transparent_12px),linear-gradient(90deg,rgb(20,20,20),rgb(20,20,20))]"
        >
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

