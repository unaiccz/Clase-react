import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p><a target="_blank" href="https://github.com/luisnisc">Luis</a> & <a target="_blank" href="https://github.com/unaiccz">Unai</a></p>
        <a href="https://github.com/luisnisc/Clase-react" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;