
// import React, { useState, useEffect } from 'react';
// import './Header.css';
// import MERN from '../assests/Resume.pdf';

// const roles = [
//   'Full Stack Developer',
//   'React Developer',
//   'Frontend Developer',
//   'Backend Developer'
// ];

// const Profile = () => {
//   const [currentRole, setCurrentRole] = useState(roles[0]);
//   const [transitioning, setTransitioning] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTransitioning(true);
//       setTimeout(() => {
//         setCurrentRole(prevRole => {
//           const currentIndex = roles.indexOf(prevRole);
//           return roles[(currentIndex + 1) % roles.length];
//         });
//         setTransitioning(false);
//       }, 500); // Duration of the transition
//     }, 3000); // Duration to show each role

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="profile" className="bg-gradient-to-b from-gray-900 to-gray-900 p-6 text-white flex flex-col items-center">
//       <div className="mb-4 text-center">
//         <h1 className="text-4xl font-semibold mb-2 animate-fade-in">Rishi Kashyap</h1>
//         <h2 className={`font-bold text-2xl md:text-4xl mt-1 gradient-text ${transitioning ? 'fade-out' : 'fade-in'}`}>
//           {currentRole}
//         </h2>
//       </div>
//       <div className="text-center mb-8">
//         <img 
//           src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" 
//           alt="Profile" 
//           className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg transform transition-transform duration-500 hover:scale-105 animate-zoom-in" 
//         />
//         <p className="text-lg md:text-xl text-gray-200 w-[90%] md:w-[70%] mx-auto animate-fade-in">
//           Passionate MERN Stack Developer with hands-on experience in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in crafting efficient backend architectures, implementing RESTful APIs, and designing responsive user interfaces. Skilled in version control with Git and deployment with platforms like Heroku. Committed to staying updated with the latest technologies and contributing to cutting-edge projects.
//         </p>
//       </div>
//       <a href={MERN} download target='_blank' className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
//         Download CV
//       </a>
//     </section>
//   );
// };

// export default Profile;


import React, { useState, useEffect, useRef } from 'react';
import { Download, Code, Briefcase, Coffee } from "lucide-react";
import MERN from '../assests/Resume.pdf';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Frontend Developer',
  'Backend Developer'
];

const Profile = () => {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [transitioning, setTransitioning] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentRole(prevRole => {
          const currentIndex = roles.indexOf(prevRole);
          return roles[(currentIndex + 1) % roles.length];
        });
        setTransitioning(false);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("profile");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Skills data with categories
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Backend",
      icon: <Briefcase className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase", "SQL"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Tools & Others",
      icon: <Coffee className="h-5 w-5" />,
      skills: ["Git", "GitHub", "Responsive Design", "VS Code", "Webpack", "Agile/Scrum"],
      color: "from-amber-500 to-pink-600"
    }
  ];

  return (
    <section id="profile" className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 md:px-8 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Enhanced animated background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-15 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-10 animate-pulse" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        {/* Code-like background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-10 text-xs md:text-sm font-mono opacity-20 hidden md:block">
            {`const developer = {
              name: "Rishi Kashyap",
              skills: ["React", "Node", "MongoDB"],
              passion: "Building amazing web experiences"
            };`}
          </div>
          <div className="absolute bottom-1/4 right-10 text-xs md:text-sm font-mono opacity-20 hidden md:block">
            {`function createSolution(problem) {
              return innovative && scalable && efficient;
            }`}
          </div>
        </div>
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero section with animation */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            {/* Name with animated underline */}
            <div className="mb-4 relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
                I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">Rishi Kashyap</span>
              </h1>
              <div className="h-1.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4 mx-auto md:mx-0" 
                style={{ 
                  animation: isInView ? 'expand-line 1.5s forwards 0.5s' : 'none',
                  '@keyframes expand-line': {
                    '0%': { width: '0%' },
                    '100%': { width: '80%' }
                  }
                }}>
              </div>
            </div>
            
            {/* Animated role display */}
            <div className="mb-6">
              <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 ${transitioning ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {currentRole}
              </h2>
            </div>
            
            {/* Description with highlighted keywords */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Passionate <span className="text-blue-400 font-medium">MERN Stack Developer</span> with hands-on experience in building scalable web applications. Proficient in crafting efficient backend architectures with <span className="text-blue-400 font-medium">Node.js</span> and <span className="text-blue-400 font-medium">Express</span>, implementing <span className="text-blue-400 font-medium">RESTful APIs</span>, and designing responsive interfaces with <span className="text-blue-400 font-medium">React</span> and <span className="text-blue-400 font-medium">Tailwind CSS</span>. Committed to delivering clean, efficient, and innovative solutions.
            </p>
            
            {/* CTA button */}
            <a 
              href={MERN} 
              download 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-medium inline-flex items-center gap-3 shadow-xl shadow-blue-600/20 hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <span>Download CV</span>
              <Download className="h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Right side - Profile image with effects */}
          <div className="order-1 md:order-2 flex-shrink-0 relative"
            onMouseEnter={() => setHoverEffect(true)}
            onMouseLeave={() => setHoverEffect(false)}
          >
            {/* Multiple layered glowing effects */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 blur-md opacity-70 transform transition-all duration-700 ${hoverEffect ? 'scale-110 rotate-[30deg]' : 'scale-105 rotate-0'}`}></div>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 blur-sm opacity-80 transform transition-all duration-1000 ${hoverEffect ? 'scale-105 rotate-[-20deg]' : 'scale-100 rotate-0'}`}></div>
            
            {/* Image container */}
            <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden ring-4 ring-gray-800/50 transform transition-all duration-500 hover:scale-105" ref={imageRef}>
              <img
                src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
                alt="Rishi Kashyap"
                className="rounded-full w-full h-full object-cover"
              />
              
              {/* Shine effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 ${hoverEffect ? 'animate-shine' : ''}`}></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center animate-bounce-slow opacity-90 shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center animate-bounce-slow opacity-90 shadow-lg" style={{ animationDelay: '1s' }}>
              <Briefcase className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        {/* <div className={`mt-16 md:mt-20 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'}`}>
          {/* Skills cards 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-blue-500/10 group relative overflow-hidden"
              >
                {/* Background glow 
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500`}></div>
                
                {/* Category header 
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
                    {category.name}
                  </h3>
                </div>
                
                {/* Skills tags 
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1.5 rounded-full text-sm bg-gradient-to-r ${category.color} bg-opacity-20 text-white hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 inline-block`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(0); opacity: 0.3; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-shine {
          animation: shine 2s ease-in-out;
        }
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 80%; }
        }
      `}</style>
    </section>
  );
};

export default Profile;