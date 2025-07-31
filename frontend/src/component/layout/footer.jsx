// components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-bold mb-4 md:mb-0">EventHub</div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm mb-4 md:mb-0">
          <li className="hover:text-gray-300 cursor-pointer">Events</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
        </ul>
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          <FaTwitter className="hover:text-gray-300 cursor-pointer" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} EventHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
