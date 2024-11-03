import React from 'react';
import rba from '../assets/rba.png';
import mobile_app from '../assets/mobile_app.png'
import schms from '../assets/schms.png'

const projects = [
  {
    title: "Role-Based Authentication ( RB-AUTH )",
    description: "I developed an open-source software with Angular which allows users to register a new account. Only if an admin user grants access can they enter the system.",
    link: "https://github.com/iamperfect927/RB-AUTH-APP",
    image: rba // Replace with the actual path or URL of the image
  },
  {
    title: "CamairTour",
    description: "Built a 3D Cameroonian tourist guide mobile app with React Native, helping tourists discover sites with a 3D interactive display of pictures.",
    link: "https://github.com/iamperfect927/CamairTourApp_F-Bt",
    image: mobile_app // Replace with the actual path or URL of the image
  },
  {
    title: "Udemy Inter school",
    description: "This is project was aimed at building the frontend screens for a school management system with React.js",
    link: "https://github.com/iamperfect927/school-management-system-primus-solutions",
    image: schms // Replace with the actual path or URL of the image
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-4">
            <img 
              src={project.image} 
              alt={`${project.title} image`} 
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-indigo-600 hover:underline">
              Go to Github
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
