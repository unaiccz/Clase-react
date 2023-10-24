import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Luis & Unai</p>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;