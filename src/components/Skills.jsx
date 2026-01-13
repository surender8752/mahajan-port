import React from "react";


const Skills = () => (
<section className="py-20 bg-gray-50 px-6">
<h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
<div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
{[
"WordPress",
"Frontend",
"Backend",
"Tools",
].map((skill, i) => (
<div key={i} className="bg-white p-6 rounded-xl shadow">
<h3 className="font-semibold text-lg">{skill}</h3>
</div>
))}
</div>
</section>
);


export default Skills;