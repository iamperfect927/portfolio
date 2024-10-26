// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white shadow p-4 z-10 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">
        Portfolio
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8">
        <li>
          <a
            href="#home"
            className={activeSection === 'home' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === 'about' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;