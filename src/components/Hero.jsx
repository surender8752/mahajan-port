import profileImg from '../assets/profile.png';

const Hero = () => (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6 pt-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Abhishek Mahajan
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">
                    WordPress Developer | 2+ Years Experience
                </h2>
                <p className="max-w-xl mb-8 text-white/80">
                    Crafting High-Performance WordPress Solutions
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative">
                    {/* Decorative ring */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-purple-400 to-indigo-300 rounded-full opacity-30 blur-xl animate-pulse"></div>
                    <img
                        src={profileImg}
                        alt="Abhishek Mahajan"
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-top rounded-full border-4 border-white/30 shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;