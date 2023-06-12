import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container pb-6">
        <div className="border-t border-gray-900/10 pt-8 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6">
          <a href="https://github.com/mt-ch/gi-ti" className="text-xs leading-5 text-gray-500 hover:underline">
            Source Code
          </a>
          <p className="text-xs leading-5 text-gray-500">&copy; 2023 Matthew Chan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
