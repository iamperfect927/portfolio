import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-800 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Parfait. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/iamperfect927" className="hover:text-indigo-400" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/iamperfect927" className="hover:text-indigo-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/iamperfect927" className="hover:text-indigo-400" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}
