// components/WorkingProcess.js
import React from "react";

export default function WorkingProcess() {
    const services = [
        {
            title: "List Your Business",
            description:
                "Easily list your business online and reach thousands of potential customers.",
            icon: "📋",
        },
        {
            title: "Discover Services",
            description:
                "Search and find the best services and businesses tailored to your needs.",
            icon: "🔍",
        },
        {
            title: "Customer Reviews",
            description:
                "Read genuine reviews from customers to make informed decisions.",
            icon: "⭐",
        },
        {
            title: "Local Focus",
            description:
                "Find businesses and services in your locality for quick and reliable support.",
            icon: "📍",
        },
        {
            title: "Grow Your Reach",
            description:
                "Expand your business visibility and connect with more customers online.",
            icon: "📈",
        },
        {
            title: "Verified Listings",
            description:
                "Browse through verified businesses for reliable and trustworthy services.",
            icon: "✅",
        },
    ];

    return (
        <section className="bg-gray-50 py-6 md:py-12">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    How We Help You
                </h2>
                <p className="text-gray-600 text-center mb-10">
                    You can list your business or find the service you need here.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
