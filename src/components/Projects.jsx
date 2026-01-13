


const Projects = () => (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {["Upgraft Corporation", "Beltex Agencies", "Asees Feed"].map((p, i) => (
                <div key={i} className="border-2 rounded-xl p-6 bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:border-indigo-400 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 group">
                    <h3 className="font-semibold text-xl group-hover:text-indigo-600 transition-colors duration-300">{p}</h3>
                </div>
            ))}
        </div>
    </section>
);


export default Projects;