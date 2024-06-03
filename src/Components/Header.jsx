import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className={`bg-black text-white p-4 flex justify-between items-center sm:overflow-x-hidden  `}>
      <h1 className="text-2xl sm:text-3xl font-bold">Rishi Kashyap</h1>
      <button className="sm:hidden text-2xl" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav
        className={`text-lg sm:text-xl font-medium fixed top-0 left-0 h-full md:w-[500px] bg-black z-50 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-[80%] transition-transform duration-300 ease-in-out sm:static sm:flex sm:flex-row sm:translate-x-0`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
          <a href="#profile" className="px-4 py-2 my-1 sm:my-0 hover:text-gray-300">
            Profile
          </a>
          <a href="#skills" className="px-4 py-2 my-1 sm:my-0 hover:text-gray-300">
            Skills
          </a>
          <a href="#projects" className="px-4 py-2 my-1 sm:my-0 hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="px-4 py-2 my-1 sm:my-0 hover:text-gray-300">
             Contacts
          </a>
          <a href="mailto:kashyap1strishi@gmail.com" className="px-4 py-2 my-1 sm:my-0 hover:text-gray-300">
             Hire me
          </a>
         
        </div>
      </nav>
      
    </header>
     <hr className=" border-slate-500" />
     </>
  );
};

export default Header;
