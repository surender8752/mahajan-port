
const projects = [
    {
        name: "Upgraft Corporation",
        url: "https://upgraft.com/",
        description: "Global group of brands powering digital transformation, sales growth, and outsourcing across software, people, healthcare, and finance",
        tech: ["WordPress", "Custom Theme Development", "Responsive Design"]
    },
    {
        name: "Beltex Agencies",
        url: "https://beltexagencies.com/",
        description: "Leading pump and flow solution supply company specializing in industrial-duty pumps for diverse applications",
        tech: ["WordPress", "WooCommerce", "Product Catalog"]
    },
    {
        name: "Asees Feed",
        url: "https://aseesfeed.com/",
        description: "Dairy business solutions platform focusing on milk production, animal health, and reproduction",
        tech: ["WordPress", "Custom Design", "SEO Optimization"]
    }
];

const Projects = () => (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
                <a
                    key={i}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 rounded-xl p-6 bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 active:shadow-2xl active:scale-105 active:-translate-y-2 transition-all duration-300 cursor-pointer hover:border-indigo-400 active:border-indigo-400 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 active:bg-gradient-to-br active:from-indigo-50 active:to-purple-50 group block"
                >
                    <h3 className="font-semibold text-xl group-hover:text-indigo-600 group-active:text-indigo-600 transition-colors duration-300 mb-3">
                        {project.name}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, j) => (
                            <span key={j} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-lg group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
                        <span>Live Link</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </a>
            ))}
        </div>
    </section>
);

export default Projects;