import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-700 tracking-tight">
          EX<span className="text-black">CARS</span>
        </Link>

        {/* Future Navigation */}
        <nav className="space-x-4 text-sm text-gray-700">
          <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
