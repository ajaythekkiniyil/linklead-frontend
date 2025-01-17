import React from "react";

export default function ServicesSection() {
  const services = [
    { icon: "🥁", name: "Chenda Melam" },
    { icon: "🍽️", name: "Catering" },
    { icon: "🎂", name: "Home Made Cakes" },
    { icon: "🎨", name: "Art & Craft" },
    { icon: "🎶", name: "Music Bands" },
    { icon: "📸", name: "Photography" },
    { icon: "🎥", name: "Videography" },
    { icon: "🎤", name: "Event Hosting" },
    { icon: "🔨", name: "Carpentry" },
    { icon: "🚿", name: "Plumbing" },
    { icon: "💡", name: "Electrical" },
    { icon: "🖥️", name: "Freelance Jobs" }
  ];

  return (
    <section className="md:bg-gray-100 pb-10 md:py-8">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="hidden md:block text-2xl font-bold text-center text-gray-800 mb-2">
          Our Services
        </h2>
        <p className="hidden md:block text-gray-600 text-center mb-12">
          From traditional performances to modern event services, we cater to all your needs.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="h-10 rounded-full flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <span className="text-xs font-medium text-gray-800">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
