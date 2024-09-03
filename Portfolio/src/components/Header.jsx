import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setIsHeaderVisible(false);
      } else {
        // Scroll up
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <div id='home'>
    <header
      className={`fixed top-0 z-50 w-full text-white bg-black shadow-md font-sans transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`} 
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center" >
        <a href="banner">
          <h1 className="font-bold text-xl tracking-tight text-white cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
            Kishoore Portfolio
          </h1>
        </a>
        <div className="md:hidden flex items-center">
          {isMobileMenuOpen ? (
            <FaTimes
              className="absolute top-6 right-6 text-xl cursor-pointer transition-transform transform hover:scale-110 z-50"
              onClick={toggleMobileMenu}
            />
          ) : (
            <FaBars
              className="text-xl cursor-pointer transition-transform transform hover:scale-110 z-50"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        <nav
          className={`md:flex gap-6 ${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:items-center mt-6 md:mt-0`} // Added mt-6 for top space in mobile view
        >
          <ul className="flex flex-col md:flex-row gap-6">
            {['Projects', 'Technologies', 'About Me', 'Contact'].map(
              (item) => (
                <li
                  key={item}
                  className="text-gray-300 text-sm relative cursor-pointer group transition-colors duration-300"
                >
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="relative block px-4 py-2 transition-transform duration-300 transform group-hover:scale-105"
                  >
                    {item}
                  </a>
                  <span className="absolute left-0 bottom-[-2px] w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
    </div>
  );
};

export default Header;
