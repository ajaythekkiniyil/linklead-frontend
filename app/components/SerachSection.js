"use client";
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchSection() {
    const [searchBoxClicked, setSearchBoxClicked] = useState(false);

    return (
        <section className="py-12">
            {/* Desktop Section */}
            <div className="container mx-auto px-4">
                {/* SEO Heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
                    LinkLead - Connecting Businesses with Customers
                </h1>
                <p className="hidden md:block text-gray-600 text-center mb-8">
                    Discover how LinkLead bridges the gap between businesses and customers
                    with innovative solutions. Enhance your connections, lead the market,
                    and grow your brand.
                </p>

                {/* Web Location Search Section */}
                <div className="hidden md:block bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                        {/* Location Dropdown */}
                        <div className="flex-grow">
                            <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Location
                            </label>
                            <select
                                id="location"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                            >
                                <option value="">Select a location</option>
                                <option value="kerala">Kerala</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="delhi">Delhi</option>
                            </select>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-grow">
                            <label
                                htmlFor="search"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Search
                            </label>
                            <input
                                id="search"
                                type="text"
                                placeholder="Search your business"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                            />
                        </div>

                        {/* Search Button */}
                        <div className="mt-4 md:mt-5">
                            <button className="mt-0 md:mt-7 w-full md:w-auto bg-primary text-white px-6 py-2 rounded-lg">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Location Search Section */}
                <div className="md:hidden">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden" onClick={() => setSearchBoxClicked((prevS) => !prevS)}>
                        {/* Input Field */}
                        <input
                            type="text"
                            className="flex-grow px-4 py-2 outline-none"
                            placeholder="Search..."
                            disabled={searchBoxClicked}
                        />

                        {/* Search Icon */}
                        <button
                            className="p-2"
                            aria-label="Search"
                        >
                            {searchBoxClicked ? (
                                <X size={20} strokeWidth={1.5} className="text-gray-500" />
                            ) : (
                                <Search size={20} strokeWidth={1.5} className="text-gray-500" />
                            )}
                        </button>
                    </div>

                    {/* Conditional Search Box */}
                    {searchBoxClicked && (
                        <div className="border border-gray-300 rounded-lg mt-2 p-2">
                            {/* Location Dropdown */}
                            <div className="mb-2">
                                <select
                                    id="location"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 outline-none"
                                >
                                    <option value="">Select a location</option>
                                    <option value="kerala">Kerala</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="delhi">Delhi</option>
                                </select>
                            </div>

                            {/* Search Bar */}
                            <div className="mb-4">
                                <input
                                    id="search"
                                    type="text"
                                    placeholder="Search your business"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                                />
                            </div>

                            {/* Search Button */}
                            <div>
                                <button className="w-full login-btn">
                                    Search
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
