


const Hero = () => (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Abhishek Mahajan</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">WordPress Developer | 2+ Years Experience</h2>
        <p className="max-w-xl mb-8">Crafting High-Performance WordPress Solutions</p>
        <div className="flex gap-4">
            <a href="#projects" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">View Projects</a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-lg font-semibold">Contact Me</a>
        </div>
    </section>
);


export default Hero;