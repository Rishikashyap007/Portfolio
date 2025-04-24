
import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  CheckCircle, 
  Code, 
  Users, 
  ExternalLink,
  Github,
  ChevronDown
} from "lucide-react";

// You'll need to update these image imports with your actual project screenshots
import ultraauraImg from "../assests/ultraaura-img.png";
import resumeintellectImg from "../assests/resumeIntellect-img.png";
import billingImg from "../assests/billing.png";
import Learn from "../assests/Learnit.png";

function Projects() {
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

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: "UltraAura",
      image: ultraauraImg,
      description: "Developed an EdTech platform where users can purchase courses, stream live classes, and interact with course materials.",
      features: [
        "User registration, login, course exploration, and secure payment processing",
        "Course management with features to add to cart, favorite/unfavorite courses",
        "Live class streaming functionality for real-time learning",
        "Trainer module for course creation, video/PDF uploads, and live class scheduling",
        "Vendor module for course marketplace management",
      ],
      technologies: "React.js, Tailwind CSS, Redux for state management, React Router",
      teamRole: "Worked in a team environment focusing on frontend development",
      liveLink: "https://ultraaura.education/home",
      sourceLink: "#",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "ResumeIntellect",
      image: resumeintellectImg,
      description: "Built an AI-powered resume builder platform that helps users create professional resumes with ease.",
      features: [
        "User-friendly resume creation interface with customizable templates",
        "Save, edit, and download resumes in various formats based on subscription package",
        "AI-assist functionality to help users optimize resume content",
        "Rich text editing capabilities for professional document formatting",
        "Subscription-based service model with different feature tiers",
      ],
      technologies: "Next.js, Tailwind CSS, Redux for state management, React Quill for rich text editing",
      teamRole: "Collaborated in a team setting, focusing on frontend implementation",
      liveLink: "https://resumeintellect.com",
      sourceLink: "#",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Billing Dashboard",
      image: billingImg,
      description: "Developed a web dashboard for billing operations using React JS, NodeJS, Express JS, and MongoDB.",
      features: [
        "Master Module for customer and item data management",
        "Billing Module for generating invoices with unique alphanumeric IDs",
        "Dashboard Module for viewing and searching invoices",
        "Modular reusable code using Tailwind CSS and custom CSS",
      ],
      technologies: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      teamRole: "Individual project with full-stack implementation",
      liveLink: "https://billing-dashboard.vercel.app/",
      sourceLink: "https://github.com/Rishikashyap007/Billing-Dashboard",
      color: "from-amber-500 to-pink-600"
    },
    // {
    //   title: "Learn...it",
    //   image: Learn,
    //   description: "Developed a comprehensive E-Learning platform using the MERN stack.",
    //   features: [
    //     "User registration, login, course exploration, and secure transactions via Razorpay.",
    //     "Course search, details view, cart management, and purchases for users (students).",
    //     "Admin functionalities for course and user management, and revenue tracking.",
    //     "User dashboard for students to manage details and track enrolled courses.",
    //   ],
    //   liveLink: "https://learn-it-mocha.vercel.app/",
    //   technologies: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    //   sourceLink: "https://github.com/Rishikashyap007/Learn...it",
    //   teamRole: "Individual project with full-stack implementation",
    //    color: "from-emerald-500 to-teal-600"
    // },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-60 right-40 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">
              Projects
            </span>
          </h2>
          <div className="flex justify-center mb-16">
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto relative">
              A showcase of my recent development work, demonstrating my skills and expertise in building modern web applications.
              <span className="block h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6 rounded-full"></span>
            </p>
          </div>
        </div>

        {/* Project cards - flex layout */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] transform transition-all duration-1000 ${
                isInView 
                  ? 'translate-y-0 opacity-100' 
                  : `translate-y-20 opacity-0 delay-${index * 300}`
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card container */}
              <div className="group bg-gray-800/80 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700 hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
                {/* Animated highlight glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl transform scale-[1.02] blur-xl transition-all duration-500 -z-10`}
                  style={{ 
                    opacity: hoveredIndex === index ? 0.2 : 0,
                    transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1.02)'
                  }}
                ></div>
                
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100`}></div>
                
                {/* Image at the top */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <div className={`bg-clip-text text-transparent bg-gradient-to-r ${project.color} text-2xl font-bold mb-1`}>
                        {project.title}
                      </div>
                      <p className="text-sm text-gray-200">{project.technologies}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  {/* Project title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                      {project.title}
                    </span>
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-start group/item text-sm">
                          <CheckCircle className="text-blue-400 flex-shrink-0 mr-2 mt-0.5 h-4 w-4 transform group-hover/item:scale-110 transition-transform duration-300" />
                          <span className="group-hover/item:text-white transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech & Role */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group/tech">
                      <h4 className="text-md font-semibold text-blue-300 mb-1 flex items-center">
                        <Code className="mr-2 h-4 w-4" />
                        Technologies
                      </h4>
                      <p className="text-gray-300 group-hover/tech:text-white transition-colors duration-300 text-sm">{project.technologies}</p>
                    </div>
                    <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group/role">
                      <h4 className="text-md font-semibold text-blue-300 mb-1 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Role
                      </h4>
                      <p className="text-gray-300 group-hover/role:text-white transition-colors duration-300 text-sm">{project.teamRole}</p>
                    </div>
                  </div>
                  
                  {/* Buttons at the bottom */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 group/btn">
                      <button className={`w-full bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-300`}>
                        <span>View Project</span>
                        <ExternalLink className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </a>
                    {/* <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="flex-1 group/src">
                      <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 border border-gray-700 hover:border-blue-500/40 hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </button>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce bg-white bg-opacity-10 p-2 w-10 h-10 ring-1 ring-slate-700/20 shadow-lg rounded-full flex items-center justify-center">
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;