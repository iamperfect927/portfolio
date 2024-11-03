// src/components/About.js
import React, { useEffect, useRef, useState } from 'react';
import logo1 from '../assets/logo1.png'; // Example logo images
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

export default function About() {
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-12 bg-indigo-50">
      <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>
      <div className="max-w-2xl mx-auto text-center px-4 mb-8">
        <p className="mb-4">I'm a developer with experience in various web technologies including React, JavaScript, and Tailwind CSS.</p>
        <p>My passion lies in creating dynamic and responsive web applications which solve a given problem in my society.</p>
      </div>

      {/* Cards Section */}
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src={logo1} alt="Logo 1" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600 mb-4">I build web applications with JavaScript frameworks like Angular.js and React.js</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Learn More</button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src={logo2} alt="Logo 2" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600 mb-4">I can create simple UI designs with Figma which can be used in the development phase</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Learn More</button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src={logo3} alt="Logo 3" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p className="text-gray-600 mb-4">I can manage and promote a product in the market for better results</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Learn More</button>
        </div>
      </div>

      {/* Experience and Projects Section */}
      <div ref={experienceRef} className={`max-w-2xl mx-auto text-center px-4 mt-12 animate ${isVisible ? 'visible' : ''}`}>
        <h3 className="text-xl font-semibold mb-4">My Experience</h3>
        <p className="text-gray-700 mb-2">Years of Experience: <strong>3+</strong></p>
        <p className="text-gray-700 mb-2">Projects Completed: <strong>10+</strong></p>
      </div>
    </section>
  );
}
