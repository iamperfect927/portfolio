import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
      <div className="max-w-lg mx-auto px-4">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="p-2 border border-gray-300 rounded" rows="4"></textarea>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}