


const Skills = () => (
    <section id="skills" className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
                "WordPress",
                "Frontend",
                "Backend",
                "Tools",
            ].map((skill, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-indigo-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50">
                    <h3 className="font-semibold text-lg">{skill}</h3>
                </div>
            ))}
        </div>
    </section>
);


export default Skills;