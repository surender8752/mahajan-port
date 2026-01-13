const skillsData = [
    {
        category: "Frontend",
        icon: "🎨",
        skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "SASS/SCSS"]
    },
    {
        category: "Backend",
        icon: "⚙️",
        skills: ["PHP", "MySQL", "REST API", "AJAX", "WordPress Hooks"]
    },
    {
        category: "WordPress",
        icon: "📝",
        skills: ["Core", "Theme Development", "Plugin Customization", "WooCommerce", "ACF", "Elementor", "Divi"]
    },
    {
        category: "Tools",
        icon: "🛠️",
        skills: ["Git/GitHub", "cPanel", "FTP", "SEO", "Analytics", "Database Optimization"]
    }
];

const Skills = () => (
    <section id="skills" className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillsData.map((category, i) => (
                <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:scale-105 hover:-translate-y-2 active:shadow-xl active:scale-105 active:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-indigo-300 active:border-indigo-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 active:bg-gradient-to-br active:from-indigo-50 active:to-purple-50"
                >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-bold text-lg text-gray-800 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, j) => (
                            <span
                                key={j}
                                className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium hover:bg-indigo-200 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;