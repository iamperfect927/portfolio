// src/components/About.js
import React from 'react';
import logo1 from '../assets/logo1.png'; // Example logo images
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

export default function About() {
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
          <h3 className="text-xl font-semibold mb-2">Web Developement</h3>
          <p className="text-gray-600 mb-4">I build web applications with javascript frameworks like, Angular.js and React.js</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Learn More</button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src={logo2} alt="Logo 2" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600 mb-4">I can create simple UI designs with figma which can be used in the developement phase</p>
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
    </section>
  );
}
