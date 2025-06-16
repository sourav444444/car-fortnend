import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import playstore from "../assets/google-play-badge.png";
import appstore from "../assets/app-store-badge.png";

const EnquiryForm = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/cars/${carId}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.error("Car not found:", err));
  }, [carId]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email like abc@example.com";
    const phoneRegex = /^\+\d{1,4}\s?\d{6,14}$/;
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must include country code like +91 9876543210";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("http://localhost:8000/api/enquiries", {
        car_id: carId,
        ...formData,
      });
      alert("Enquiry submitted successfully!");
      navigate("/thankyou");
    } catch (err) {
      console.error("Enquiry failed:", err);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <span className="text-xl font-bold text-blue-700">CarWorld</span>
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <a href="http://localhost:3000/" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
  Admin
</a>

          </nav>
        </div>
      </header>

      {/* Enquiry Form */}
      <main className="flex-grow max-w-xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Enquire About This Car</h1>
        {car ? (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Car Name</label>
              <input
                type="text"
                value={car.name}
                disabled
                className="mt-1 block w-full bg-gray-100 rounded border px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 font-semibold"
            >
              Submit Enquiry
            </button>
          </form>
        ) : (
          <p className="text-center text-gray-600 text-lg">Loading car details...</p>
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

export default EnquiryForm;

