import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


export default function App() {
return (
<div className="font-sans text-gray-800">
<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
<footer className="py-6 text-center bg-gray-900 text-white">© {new Date().getFullYear()} Abhishek Mahajan</footer>
</div>
);
}