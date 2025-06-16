import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={`http://localhost:8000/storage/${car.image}`}
        alt={car.name}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h2 className="text-xl font-semibold">{car.name}</h2>
      <p className="text-gray-700 mb-1">{car.description}</p>
      <p className="text-lg font-bold text-blue-700">₹{car.price}</p>
      <Link
        to={`/enquire/${car.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enquire Now
      </Link>
    </div>
  );
};

export default CarCard;
