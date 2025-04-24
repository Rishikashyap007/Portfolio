
// import React from 'react';

// const Skills = () => {
//   const skills = [
//     'React', 'Node','Nextjs', 'Express', 'MongoDB', 'Tailwind CSS', 
//     'JavaScript (ES6)', 'Bootstrap', 'HTML', 'CSS'
//   ];

//   return (
//     <section id="skills" className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-900 text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="bg-gray-800 bg-opacity-50 py-4 px-6 rounded-xl shadow-lg hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500 text-center"
//             >
//               <span className="text-lg font-medium text-blue-200">{skill}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState, useEffect } from 'react';
import { Code, Server, Palette, Zap } from "lucide-react";

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Skills categorized
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Palette className="h-5 w-5" />,
      skills: ['React', 'Next.js', 'JavaScript (ES6)', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Redux'],
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Tools & Others",
      icon: <Zap className="h-5 w-5" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Responsive Design', 'Figma',],
      color: "from-amber-500 to-pink-600"
    },
    {
      name: "Learning",
      icon: <Code className="h-5 w-5" />,
      skills: ['TypeScript', 'GraphQL', 'Firebase', 'Docker'],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">
              Technical Skills
            </span>
          </h2>
          <div className="flex justify-center mb-16">
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto relative">
              My toolkit of technologies and skills I've mastered to build modern web applications
              <span className="block h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6 rounded-full"></span>
            </p>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`transform transition-all duration-1000 ${
                isInView 
                  ? 'translate-y-0 opacity-100' 
                  : `translate-y-20 opacity-0 delay-${idx * 200}`
              }`}
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category card */}
              <div className="group bg-gray-800/80 rounded-xl shadow-2xl backdrop-blur-lg border border-gray-700 hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden h-full">
                {/* Animated highlight glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl transform scale-[1.02] blur-xl transition-all duration-500 -z-10`}
                  style={{ 
                    opacity: hoveredCategory === idx ? 0.2 : 0,
                    transform: hoveredCategory === idx ? 'scale(1.03)' : 'scale(1.02)'
                  }}
                ></div>
                
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100`}></div>
                
                {/* Category header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
                      {category.name}
                    </h3>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 text-white shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2`}
                      >
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill meter - Overall experience */}
        {/* <div className={`mt-16 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gray-800/80 rounded-xl shadow-xl backdrop-blur-lg border border-gray-700 p-6">
            <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Development Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-blue-300">Frontend Development</span>
                  <span className="text-blue-300">85%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" 
                    style={{ width: '85%', transition: 'width 1.5s ease-in-out' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-blue-300">Backend Development</span>
                  <span className="text-blue-300">75%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full" 
                    style={{ width: '75%', transition: 'width 1.5s ease-in-out' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-blue-300">UI/UX Design</span>
                  <span className="text-blue-300">70%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-pink-600 rounded-full" 
                    style={{ width: '70%', transition: 'width 1.5s ease-in-out' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-blue-300">Problem Solving</span>
                  <span className="text-blue-300">90%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" 
                    style={{ width: '90%', transition: 'width 1.5s ease-in-out' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;