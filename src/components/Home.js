// src/components/Home.js
import React from 'react';
import parfait from '../assets/parfait.jpg';

function Home() {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-indigo-200 to-indigo-50 text-center md:text-left p-4">
      {/* Image Card Section */}
      <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 ">
        <div className="shadow-lg p-1 w-64 h-64 md:w-80 md:h-80  rounded-2xl"> {/* Smaller card with shadow */}
          <img
            src={parfait}
            alt="my image"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Text Section, Vertically Centered */}
      <div className="md:w-1/2 h-full flex items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Hello, I'm <span className='text-white text-5xl'>Djiela Fomo Ayuk Parfait</span></h1>
          <p className="text-lg mb-8">A passionate developer skilled in modern web technologies.</p>
          <a href="#projects" className="px-6 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
