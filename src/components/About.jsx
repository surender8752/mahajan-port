


const About = () => (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
            WordPress Developer with 2+ years experience in designing, developing, and maintaining high-performance websites.
            Proficient in theme customization, plugin development, SEO optimization, and responsive design.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
            <div className="p-6 shadow rounded-lg bg-white hover:shadow-xl hover:scale-105 hover:-translate-y-2 active:shadow-xl active:scale-105 active:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-200 active:border-indigo-200 active:bg-indigo-50">📍 Bilaspur, HP</div>
            <div className="p-6 shadow rounded-lg bg-white hover:shadow-xl hover:scale-105 hover:-translate-y-2 active:shadow-xl active:scale-105 active:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-200 active:border-indigo-200 active:bg-indigo-50">🎓 B.Tech in Biotechnology</div>
            <div className="p-6 shadow rounded-lg bg-white hover:shadow-xl hover:scale-105 hover:-translate-y-2 active:shadow-xl active:scale-105 active:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-200 active:border-indigo-200 active:bg-indigo-50">🏫 Lovely Professional University (2020)</div>
        </div>
    </section>
);


export default About;