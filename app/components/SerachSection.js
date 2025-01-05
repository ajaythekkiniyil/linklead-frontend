export default function SearchSection() {
    return (
        <section className="bg-white py-12 mt-5">
            <div className="container mx-auto px-4">
                {/* SEO Heading */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    LinkLead - Connecting Businesses with Customers in Kerala
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Discover how LinkLead bridges the gap between businesses and
                    customers with innovative solutions. Enhance your connections, lead
                    the market, and grow your brand.
                </p>

                {/* Location Search Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
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
                            <button className="mt-0 md:mt-7 w-full md:w-auto bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
