const experiences = [
    {
        title: "WordPress Developer",
        company: "Second Brain, Delhi",
        period: "July 2023 – Present",
        current: true,
        responsibilities: [
            "Developed responsive WordPress websites for 15+ clients with SEO compliance",
            "Customized themes and created custom plugins for client requirements",
            "Implemented SEO strategies, speed optimization, and third-party API integrations",
            "Managed maintenance, security updates, and cross-team collaboration"
        ]
    },
    {
        title: "US Healthcare Recruiter",
        company: "ICONMA, Noida",
        period: "Jan 2021 – May 2021",
        current: false,
        responsibilities: []
    },
    {
        title: "Customer Care Executive",
        company: "Teleperformance, Indore",
        period: "Aug 2020 – Nov 2020",
        current: false,
        responsibilities: []
    }
];

const Experience = () => (
    <section id="experience" className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>

            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content card */}
                    <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl hover:scale-[1.02] active:shadow-2xl active:scale-[1.02] transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-l-indigo-500 active:border-l-indigo-500 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white active:bg-gradient-to-r active:from-indigo-50 active:to-white">
                            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                                <h3 className="font-bold text-lg text-gray-800">{exp.title}</h3>
                                {exp.current && (
                                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
                                        Current
                                    </span>
                                )}
                            </div>
                            <p className="text-indigo-600 font-medium mb-1">{exp.company}</p>
                            <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                            {exp.responsibilities.length > 0 && (
                                <ul className="text-sm text-gray-600 space-y-2">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-indigo-500 mt-1">•</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Experience;