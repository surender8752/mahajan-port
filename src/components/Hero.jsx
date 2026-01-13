import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const fullName = 'Abhishek Mahajan';

    useEffect(() => {
        let index = 0;
        let currentText = '';

        const typeInterval = setInterval(() => {
            if (index < fullName.length) {
                currentText += fullName[index];
                setDisplayText(currentText);
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typeInterval);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4 sm:px-6 pt-20 pb-10">
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 min-h-[1.2em]">
                        {displayText}
                        <span className={`inline-block w-1 h-[1em] bg-white ml-1 align-middle ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white/90">
                        WordPress Developer | 2+ Years Experience
                    </h2>
                    <p className="max-w-xl mb-6 sm:mb-8 text-white/80 text-sm sm:text-base mx-auto md:mx-0">
                        Crafting High-Performance WordPress Solutions
                    </p>
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
                            <a
                                href="#projects"
                                className="bg-white text-indigo-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="border-2 border-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                            >
                                Contact Me
                            </a>
                        </div>
                        <div className="flex justify-center lg:justify-start w-full mt-3 sm:mt-4">
                            <a
                                href="https://drive.google.com/file/d/1l9HNIU67Jb9QRcVNmkvWKhk1Go7doVOq/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 text-sm sm:text-base"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="relative animate-float">
                        {/* Decorative ring */}
                        <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-purple-400 to-indigo-300 rounded-2xl opacity-30 blur-xl animate-pulse"></div>
                        <img
                            src={profileImg}
                            alt="Abhishek Mahajan"
                            className="relative w-52 sm:w-64 md:w-72 lg:w-80 xl:w-96 object-cover object-top rounded-2xl border-4 border-white/30 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;