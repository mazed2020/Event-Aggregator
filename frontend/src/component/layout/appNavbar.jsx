// components/Navbar.jsx
import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="text-xl font-semibold">Dashbeard</div>

      {/* Middle: Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-gray-300 cursor-pointer">Hackathons</Link>
        <li className="hover:text-gray-300 cursor-pointer">Contests</li>
        <li className="hover:text-gray-300 cursor-pointer">Jobs</li>
        <li className="hover:text-gray-300 cursor-pointer">Calendar</li>
      </ul>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <FaSearch className="cursor-pointer hover:text-gray-300" />
        <FaBell className="cursor-pointer hover:text-gray-300" />
        <Link to = "/Login"><FaUserCircle className="cursor-pointer hover:text-gray-300 text-xl" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
