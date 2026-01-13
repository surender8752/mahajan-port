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
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4 md:px-6 lg:px-8 pt-16 md:pt-16 lg:pt-20 pb-4 md:pb-6 lg:pb-10">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-3 md:gap-4 lg:gap-10 xl:gap-16">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-1 md:mb-2 lg:mb-4 min-h-[1.2em]">
                        {displayText}
                        <span className={`inline-block w-1 h-[1em] bg-white ml-1 align-middle ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
                    </h1>
                    <h2 className="text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl font-semibold mb-1 md:mb-2 lg:mb-4 text-white/90">
                        WordPress Developer | 2+ Years Experience
                    </h2>
                    <p className="max-w-xl mb-3 md:mb-3 lg:mb-6 text-white/80 text-xs sm:text-sm md:text-sm lg:text-base mx-auto md:mx-0">
                        Crafting High-Performance WordPress Solutions
                    </p>
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex flex-row flex-wrap gap-2 md:gap-2 lg:gap-4 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="bg-white text-indigo-600 px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg text-xs md:text-sm lg:text-base"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="border-2 border-white px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 text-xs md:text-sm lg:text-base"
                            >
                                Contact Me
                            </a>
                        </div>
                        <div className="flex justify-center md:justify-start w-full mt-2 md:mt-2 lg:mt-4">
                            <a
                                href="https://drive.google.com/file/d/1POVYRSWnAx-QcZAUIVXadQEqI1nR51mv/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative animate-float">
                        {/* Decorative ring */}
                        <div className="absolute -inset-2 md:-inset-2 lg:-inset-4 bg-gradient-to-tr from-purple-400 to-indigo-300 rounded-2xl opacity-30 blur-xl animate-pulse"></div>
                        <img
                            src={profileImg}
                            alt="Abhishek Mahajan"
                            className="relative w-40 sm:w-48 md:w-40 lg:w-64 xl:w-80 object-cover object-top rounded-2xl border-4 border-white/30 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;