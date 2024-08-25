

// import React from "react";
// import Learn from "../assests/Learnit.png";
// import billing from "../assests/billing.png";
// import image from "../assests/image.png";

// function Projects() {
//   return (
//     <section id="projects" className="p-8 bg-gradient-to-r from-black to-black text-gray-100 flex flex-col items-center gap-6">
//       <h2 className="text-4xl font-extrabold mb-8 text-center animate-fade-in">Projects</h2>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 w-full md:w-3/4 border-b-2 rounded-lg animate-slide-up">
//         <div className="w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105">
//           <img src={Learn} alt="Learn...it" className="w-full h-auto rounded-lg shadow-md animate-zoom-in" />
//         </div>
//         <div className="w-full md:w-1/2 flex flex-col gap-4">
//           <h3 className="text-2xl font-bold animate-fade-in">Learn...it</h3>
//           <p className="text-lg animate-fade-in">Developed a comprehensive E-Learning platform using the MERN stack.</p>
//           <ul className="list-disc pl-5 text-lg space-y-2 animate-fade-in">
//             <li>The platform supports user registration, login, course exploration, and secure transactions via Razorpay.</li>
//             <li>Users (students) can search for courses, view details, add or remove courses from their cart, and make purchases.</li>
//             <li>Admin functionalities include course creation, viewing, updating, and deletion, as well as user management and revenue tracking.</li>
//             <li>The user dashboard allows students to view and update their details and track their enrolled courses.</li>
//           </ul>
//           <div className="btns flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
//             <a href="https://learn-it-mocha.vercel.app/" target="_blank">
//               <button className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">View Project</button>
//             </a>
//             <a href="https://github.com/Rishikashyap007/Learn...it" target="_blank">
//               <button className="bg-gray-700 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">View Source Code</button>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 w-full md:w-3/4 border-b-2 rounded-lg animate-slide-up">
//         <div className="w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105">
//           <img src={billing} alt="Billing Dashboard" className="w-full h-auto rounded-lg shadow-md animate-zoom-in" />
//         </div>
//         <div className="w-full md:w-1/2 flex flex-col gap-4">
//           <h3 className="text-2xl font-bold animate-fade-in">Billing DashBoard</h3>
//           <p className="text-lg animate-fade-in">Developed a web dashboard for billing operations using React JS, NodeJS, Express JS, and MongoDB.</p>
//           <ul className="list-disc pl-5 text-lg space-y-2 animate-fade-in">
//             <li>Master Module that allows fetching and managing customer and item data from master records, as well as creating new customers and items.</li>
//             <li>The Billing Module enables users to generate billing invoices for specific customers, with unique alphanumeric invoice IDs.</li>
//             <li>The Dashboard Module allows users to view customer-specific and recently generated invoices, as well as search and view invoices by invoice ID.</li>
//             <li>Implemented modular reusable code using Tailwind CSS and custom CSS for the frontend design.</li>
//           </ul>
//           <div className="btns flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
//             <a href="https://billing-dashboard.vercel.app/" target="_blank">
//               <button className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">View Project</button>
//             </a>
//             <a href="https://github.com/Rishikashyap007/Billing-Dashboard" target="_blank">
//               <button className="bg-gray-700 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">View Source Code</button>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 w-full md:w-3/4 border-b-2  rounded-lg animate-slide-up">
//         <div className="w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105">
//           <img src={image} alt="E-commerce Platform" className="w-full h-auto rounded-lg shadow-md animate-zoom-in" />
//         </div>
//         <div className="w-full md:w-1/2 flex flex-col gap-4">
//           <h3 className="text-2xl font-bold animate-fade-in">is..store</h3>
//           <p className="text-lg animate-fade-in">Developed a feature-rich e-commerce platform using React and Tailwind CSS.</p>
//           <ul className="list-disc pl-5 text-lg space-y-2 animate-fade-in">
//             <li>User registration and login functionalities to manage user accounts securely.</li>
//             <li>Browse and search for products with detailed descriptions and pricing information.</li>
//             <li>Shopping cart functionality to add and remove products, with real-time updates.</li>
//             <li>Secure checkout process with integrated payment gateways for seamless transactions.</li>
//             <li>Admin dashboard for managing products, categories, and orders efficiently.</li>
//           </ul>
//           <div className="btns flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
//             <button className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">View Project</button>
//             <button className="bg-gray-700 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">View Source Code</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React from "react";
import Learn from "../assests/Learnit.png";
import billing from "../assests/billing.png";
import image from "../assests/image.png";

function Projects() {
  const projects = [
    {
      title: "Learn...it",
      image: Learn,
      description: "Developed a comprehensive E-Learning platform using the MERN stack.",
      features: [
        "User registration, login, course exploration, and secure transactions via Razorpay.",
        "Course search, details view, cart management, and purchases for users (students).",
        "Admin functionalities for course and user management, and revenue tracking.",
        "User dashboard for students to manage details and track enrolled courses.",
      ],
      liveLink: "https://learn-it-mocha.vercel.app/",
      sourceLink: "https://github.com/Rishikashyap007/Learn...it",
    },
    {
      title: "Billing Dashboard",
      image: billing,
      description: "Developed a web dashboard for billing operations using React JS, NodeJS, Express JS, and MongoDB.",
      features: [
        "Master Module for customer and item data management.",
        "Billing Module for generating invoices with unique alphanumeric IDs.",
        "Dashboard Module for viewing and searching invoices.",
        "Modular reusable code using Tailwind CSS and custom CSS.",
      ],
      liveLink: "https://billing-dashboard.vercel.app/",
      sourceLink: "https://github.com/Rishikashyap007/Billing-Dashboard",
    },
    {
      title: "is..store",
      image: image,
      description: "Developed a feature-rich e-commerce platform using React and Tailwind CSS.",
      features: [
        "User registration and login functionalities.",
        "Product browsing and search with detailed information.",
        "Shopping cart functionality with real-time updates.",
        "Secure checkout process with integrated payment gateways.",
        "Admin dashboard for efficient product and order management.",
      ],
      liveLink: "#",
      sourceLink: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Projects</h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500/10">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-300 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <ul className="list-none space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">View Project</button>
                  </a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">Source Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;