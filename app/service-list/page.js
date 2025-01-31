"use client"
import { useState } from "react";

export default function ServiceList() {
  const [services, setServices] = useState([
    {
      id: 1,
      category: "Melam",
      name: "Chenda Melam Team",
      description: "Professional Chenda Melam team for events and functions.",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        facebook: "https://facebook.com/chendamelamteam",
        instagram: "https://instagram.com/chendamelamteam",
      },
    },
    {
      id: 2,
      category: "Catering",
      name: "Catering Services",
      description: "Delicious and hygienic catering for all occasions.",
      image: "https://via.placeholder.com/150",
      socialLinks: {
        facebook: "https://facebook.com/cateringservices",
        instagram: "https://instagram.com/cateringservices",
      },
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-6">Service List</h2>
      <p className="text-gray-600 text-center mb-6">
        Browse services offered by different users.
      </p>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="p-4 border rounded-lg shadow-sm">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{service.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.description}</p>
            <div className="flex space-x-4 mt-3">
              <a
                href={service.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
              <a
                href={service.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}