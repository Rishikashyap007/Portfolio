// // WorkExperience.js

// import React from 'react';

// const workExperience = [
//   {
//     title: 'Frontend Developer',
//     company: 'Conscious Foundation',
//     role: 'Role & Responsibilities:',
//     responsibilities: [
//       'Developed and maintained responsive, dynamic frontends.',
//       'Integrated backend APIs for seamless user experiences.',
//       'Collaborated with backend teams for optimal performance.',
//     ],
//     startDate: '07/2024',
//     endDate: 'Present',
//     location: 'Jaipur, India',
//     technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Styled Components', 'HTML', 'CSS', 'JavaScript'],
//   },
//   {
//     title: 'React Developer',
//     company: 'The Enternurship Network',
//     role: 'Role & Responsibilities',
//     responsibilities: [
//       'Led the design and development of websites using React.js and Tailwind CSS.',
//       'Integrated frontend and backend components for seamless functionality.',
//       'Collaborated with diverse teams to deliver high-quality projects.',
//       'Optimized user experiences through innovative solutions.',
//     ],
//     startDate: '03/2024',
//     endDate: '06/2024',
//     location: '',
//     technologies: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Styled Components', 'HTML', 'CSS', 'JavaScript'],
//   },
// ];

// const WorkExperience = () => {
//     return (
//       <section className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 md:px-8">
//         <h2 className="text-4xl font-bold mb-10 text-center text-blue-300">Work Experience</h2>
//         <div className="space-y-12 max-w-4xl mx-auto">
//           {workExperience.map((job, index) => (
//             <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500/10">
//               <h3 className="text-3xl font-semibold text-blue-300">{job.title}</h3>
//               <p className="text-xl text-blue-200 mt-2">{job.company}</p>
//               <p className="mt-2 text-sm text-blue-400">{job.startDate} – {job.endDate}</p>
//               {job.location && <p className="text-sm text-blue-400">{job.location}</p>}
//               <div className="mt-6">
//                 <h4 className="font-semibold text-lg text-blue-300">{job.role}</h4>
//                 <ul className="list-none mt-3 space-y-2">
//                   {job.responsibilities.map((resp, i) => (
//                     <li key={i} className="text-gray-300 flex items-start">
//                       <span className="text-blue-400 mr-2">•</span>
//                       {resp}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="mt-6">
//                 <h4 className="font-semibold text-lg text-blue-300">Technologies Used</h4>
//                 <ul className="flex flex-wrap gap-3 mt-3">
//                   {job.technologies.map((tech, i) => (
//                     <li key={i} className="bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm text-blue-200 hover:bg-blue-600 transition-colors duration-200">{tech}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };

// export default WorkExperience;

import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  Code, 
  MapPin,
  ExternalLink
} from "lucide-react";

const workExperience = [
  {
    title: 'Frontend Developer',
    company: 'Conscious Foundation',
    role: 'Role & Responsibilities:',
    responsibilities: [
      'Developed and maintained responsive, dynamic frontends.',
      'Integrated backend APIs for seamless user experiences.',
      'Collaborated with backend teams for optimal performance.',
    ],
    startDate: '07/2024',
    endDate: 'Present',
    location: 'Jaipur, India',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Styled Components', 'HTML', 'CSS', 'JavaScript'],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: 'React Developer',
    company: 'The Enternurship Network',
    role: 'Role & Responsibilities',
    responsibilities: [
      'Led the design and development of websites using React.js and Tailwind CSS.',
      'Integrated frontend and backend components for seamless functionality.',
      'Collaborated with diverse teams to deliver high-quality projects.',
      'Optimized user experiences through innovative solutions.',
    ],
    startDate: '03/2024',
    endDate: '06/2024',
    location: '',
    technologies: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Styled Components', 'HTML', 'CSS', 'JavaScript'],
    color: "from-emerald-500 to-teal-600"
  },
];

const WorkExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="experience" className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-60 left-40 w-72 h-72 bg-indigo-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">
              Work Experience
            </span>
          </h2>
          <div className="flex justify-center mb-16">
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto relative">
              My professional journey as a frontend developer, showcasing my experience and expertise in building modern web applications.
              <span className="block h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6 rounded-full"></span>
            </p>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {workExperience.map((job, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-1000 ${
                isInView 
                  ? 'translate-y-0 opacity-100' 
                  : `translate-y-20 opacity-0 delay-${index * 300}`
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card container */}
              <div className="group bg-gray-800/80 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700 hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden">
                {/* Animated highlight glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${job.color} rounded-3xl transform scale-[1.02] blur-xl transition-all duration-500 -z-10`}
                  style={{ 
                    opacity: hoveredIndex === index ? 0.2 : 0,
                    transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1.02)'
                  }}
                ></div>
                
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${job.color} transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100`}></div>
                
                {/* Content section */}
                <div className="p-6 md:p-8">
                  {/* Header with job title and company */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${job.color}`}>
                          {job.title}
                        </span>
                      </h3>
                      <p className="text-xl text-gray-300 mt-1">{job.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{job.startDate} – {job.endDate}</span>
                      </div>
                      {job.location && (
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                          <span>{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                      <Briefcase className="mr-2 h-4 w-4" />
                      {job.role}
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-300 flex items-start group/item">
                          <CheckCircle className="text-blue-400 flex-shrink-0 mr-2 mt-0.5 h-4 w-4 transform group-hover/item:scale-110 transition-transform duration-300" />
                          <span className="group-hover/item:text-white transition-colors duration-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="bg-gray-900/60 p-5 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group/tech">
                    <h4 className="text-md font-semibold text-blue-300 mb-3 flex items-center">
                      <Code className="mr-2 h-4 w-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {job.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`bg-gradient-to-r ${job.color} bg-opacity-20 px-4 py-2 rounded-full text-sm text-white shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;