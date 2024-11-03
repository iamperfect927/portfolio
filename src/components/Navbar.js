import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

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
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-white shadow transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } p-2 md:p-3 z-10 flex justify-between items-center`}
    >
      {/* Logo on the left for mobile, centered for tablet/desktop */}
      <div className="flex-grow md:w-1/3 lg:w-1/4 flex justify-start md:justify-center">
        <div className="text-2xl font-bold text-indigo-600">
          Djiela P.
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-indigo-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:gap-8 md:static md:justify-end absolute top-full left-0 w-full bg-white md:bg-transparent flex-col md:flex-row transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <li className="text-center md:text-left p-2">
          <a
            href="#home"
            className={activeSection === 'home' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li className="text-center md:text-left p-2">
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>
        <li className="text-center md:text-left p-2">
          <a
            href="#about"
            className={activeSection === 'about' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li className="text-center md:text-left p-2">
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
