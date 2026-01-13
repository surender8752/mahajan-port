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
        <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white px-4 sm:px-6 pt-20 pb-10">
            {/* Text Content - Centered */}
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-indigo-300 uppercase tracking-widest text-sm md:text-base mb-2">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">
                    {displayText}
                    <span className={`inline-block w-1 h-[1em] bg-white ml-1 align-middle ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    WordPress Developer
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed">
                    WordPress Developer with 2+ years experience in designing, developing, and maintaining high-performance websites. Proficient in theme customization, plugin development, SEO optimization, and responsive design.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-8 md:mb-10">
                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base lg:text-lg"
                    >
                        Let's Talk
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1POVYRSWnAx-QcZAUIVXadQEqI1nR51mv/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-purple-400 text-purple-300 px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300 hover:scale-105 text-sm md:text-base lg:text-lg"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Profile Image - Below text */}
            <div className="relative animate-float">
                {/* Glowing ring effect */}
                <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl opacity-50 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-2xl opacity-30"></div>
                <img
                    src={profileImg}
                    alt="Abhishek Mahajan"
                    className="relative w-56 sm:w-64 md:w-80 lg:w-96 object-cover object-top rounded-2xl border-4 border-purple-400/50 shadow-2xl"
                />
            </div>
        </section>
    );
};

export default Hero;
