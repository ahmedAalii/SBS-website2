import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-xl text-white">
          <span className="text-white">SBS</span>
          <span className="w-4 h-2 bg-yellow-400 block"></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400">HOME</Link>
          <Link to="/about" className="hover:text-yellow-400">ABOUT</Link>
          <Link to="/conference" className="hover:text-yellow-400">CONFERENCE</Link>
          <Link to="/events" className="hover:text-yellow-400">EVENTS</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition">
            LOGIN
          </Link>
          <Link to="/join-us" className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition">
            JOIN US
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2 text-sm font-medium">
          <Link to="/" className="block hover:text-yellow-400" onClick={toggleMenu}>HOME</Link>
          <Link to="/about" className="block hover:text-yellow-400" onClick={toggleMenu}>ABOUT</Link>
          <Link to="/conference" className="block hover:text-yellow-400" onClick={toggleMenu}>CONFERENCE</Link>
          <Link to="/events" className="block hover:text-yellow-400" onClick={toggleMenu}>EVENTS</Link>
          <hr className="border-gray-600" />
          <Link to="/login" className="block border border-yellow-400 text-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition" onClick={toggleMenu}>
            LOGIN
          </Link>
          <Link to="/join-us" className="block bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition" onClick={toggleMenu}>
            JOIN US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
