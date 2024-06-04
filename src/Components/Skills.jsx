
import React from 'react';
import './Header.css';

const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-gradient-to-r from-black to-black text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-extrabold mb-8 animate-fade-in">Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full md:w-3/4">
        {['React','Node', 'Express','MongoDB','Tailwind CSS', 'JavaScript (ES6)', 'Bootstrap', 'HTML', 'CSS', ].map(skill => (
          <li key={skill} className="border-2 border-gray-700 py-3 px-6 bg-gray-700 bg-opacity-80 hover:bg-gray-600 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
