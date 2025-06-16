import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-700">CarWorld</span>
          </div>
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <a href="http://localhost:3000/" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">Admin</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg">
          Reach us via email at <strong>support@example.com</strong> or call us at <strong>+91 9876543210</strong>.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 mt-10 shadow-inner border-t">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div>
            <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
              <li><a href="http://localhost:3000/" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">Admin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-xl hover:text-blue-600"><FaFacebook /></a>
              <a href="#" className="text-xl hover:text-pink-600"><FaInstagram /></a>
              <a href="#" className="text-xl hover:text-blue-400"><FaTwitter /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-white">Contact Info</h4>
            <p className="text-sm">Email: support@carworld.com</p>
            <p className="text-sm">Phone: +91 9876543210</p>
          </div>

          <div className="sm:col-span-2 md:col-span-1 mt-4 md:mt-0 text-center md:text-left">
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} CarWorld. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

