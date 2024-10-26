import React from 'react';

const projects = [
  {
    title: "Role-Based Authentication ( RB-AUTH )",
    description: "I Developed an open-source software with Angular which allows user register new account and only if an admin user grants access to them before they can have access to the system.",
    link: "https://github.com/iamperfect927/RB-AUTH-APP",
  },
  {
    title: "CamairTour",
    description: "Built a 3d Cameroonian tourist guide mobile application with React Native which will help both local and international tourist discover amazing touristic sites with a 3d interactive display of pictures",
    link: "https://github.com/iamperfect927/CamairTourApp_F-Bt",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-indigo-600 hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}