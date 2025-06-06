// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {
//   return (
//     <footer id='contacts'
//     className="bg-gradient-to-b from-gray-900 to-gray-900 text-gray-100 p-6 text-center md:text-left">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
//         <div className="mb-4 md:mb-0">
//           <p className="text-lg font-semibold">Contact</p>
//           <p className="py-1 flex items-center">
//             <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
//             <a href="mailto:kashyap1strishi@gmail.com" className="hover:text-gray-300">kashyap1strishi@gmail.com</a>
//           </p>
//           <p className="py-1 flex items-center">
//             <FontAwesomeIcon icon={faPhone} className="mr-2" />
//             <a href="tel:9878402898" className="hover:text-gray-300">9878402898</a>
//           </p>
//         </div>
//         <div className="mb-4 md:mb-0">
//           <p className="text-lg font-semibold">Location</p>
//           <p className="py-1 flex items-center">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
//             Rajiv Nagar, Sector 13
//           </p>
//           <p className="py-1">Gurugram, Haryana, 122001, India</p>
//         </div>
//         <div className="flex space-x-6">
//           <a href="https://www.linkedin.com/in/rishi-kashyap" className="text-gray-100 hover:text-gray-300" aria-label="LinkedIn">
//             <FontAwesomeIcon icon={faLinkedin} size="2x" />
//           </a>
//           <a href="https://github.com/Rishikashyap007" className="text-gray-100 hover:text-gray-300" aria-label="Github">
//             <FontAwesomeIcon icon={faGithub} size="2x" />
//           </a>
//         </div>
//       </div>
//       <hr className="my-4 border-gray-700" />
//       <div className="text-center">
//         <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Developed by @kashyap</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id='contacts' className="bg-gradient-to-b from-gray-900 to-black text-gray-300 p-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold text-blue-400">Contact</p>
          <p className="py-1 flex items-center">
            <Mail className="mr-2" size={16} />
            <a href="mailto:kashyap1strishi@gmail.com" className="hover:text-blue-400 transition-colors">kashyap1strishi@gmail.com</a>
          </p>
          <p className="py-1 flex items-center">
            <Phone className="mr-2" size={16} />
            <a href="tel:9878402898" className="hover:text-blue-400 transition-colors">9878402898</a>
          </p>
        </div>
        
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold text-blue-400">Location</p>
          <p className="py-1 flex items-center">
            <MapPin className="mr-2" size={16} />
            Rajiv Nagar, Sector 13
          </p>
          <p className="py-1">Gurugram, Haryana, 122001, India</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/rishi-kashyap" className="text-gray-200 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/Rishikashyap007" className="text-gray-200 hover:text-blue-400 transition-colors" aria-label="Github">
            <Github size={32} />
          </a>
        </div>
      </div>
      
      <hr className="my-4 border-gray-700" />
      
      <div className="text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Developed by @kashyap</p>
      </div>
    </footer>
  );
};

export default Footer;