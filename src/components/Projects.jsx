import React from "react";


const Projects = () => (
<section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
<div className="grid md:grid-cols-3 gap-6">
{["Upgraft Corporation", "Beltex Agencies", "Asees Feed"].map((p, i) => (
<div key={i} className="border rounded-xl p-6">
<h3 className="font-semibold text-xl">{p}</h3>
</div>
))}
</div>
</section>
);


export default Projects;