import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import playstore from "../assets/google-play-badge.png";
import appstore from "../assets/app-store-badge.png";


const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:8000/api/cars")
      .then((res) => {
        setCars(res.data.cars);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load cars:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
    <span className="text-xl font-bold text-blue-700">CarWorld</span>

    {/* Mobile menu button */}
    <button
      onClick={() => setShowMenu(!showMenu)}
      className="md:hidden text-gray-600 focus:outline-none"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* Desktop nav */}
    <nav className="space-x-6 hidden md:flex">
      <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
      <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
      <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
      <a href="http://localhost:3000/" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
        Admin
      </a>
    </nav>
  </div>

  {/* Mobile dropdown menu */}
  {showMenu && (
    <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
      <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
      <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
      <a href="http://localhost:3000/" className="block text-gray-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
        Admin
      </a>
    </div>
  )}
</header>


      {/* Main Car Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Browse Our Featured Cars
        </h1>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading cars...</p>
        ) : cars.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No cars found.</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow p-4">
               <img
  src={car.image_url || "/no-image.png"}
  alt={car.name}
  className="w-full h-48 object-cover rounded"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/no-image.png";
  }}
/>

                <h2 className="text-xl font-bold mt-4">{car.name}</h2>
                <p className="text-gray-600 line-clamp-2">{car.description}</p>
                <p className="text-blue-600 font-semibold mt-2">₹ {car.price}</p>
                <Link
                  to={`/enquire/${car.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 mt-10 shadow-inner border-t">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div>
            <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-blue-600">Admin</Link></li>
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
            <h4 className="font-semibold mb-2 text-white">Download Our App</h4>
            <div className="space-y-2 mt-2">
              <img src={playstore} alt="Google Play" className="h-10" />
              <img src={appstore} alt="App Store" className="h-10" />
            </div>
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

export default HomePage;
