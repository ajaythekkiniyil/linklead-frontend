"use client"
import { useState } from "react";

const PostBusinessSection = () => {
    const [businessName, setBusinessName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here (e.g., send data to the backend)
        console.log("Business details submitted:", {
            businessName,
            category,
            description,
            contact,
        });
        alert("Business posted successfully!");
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Post Your Business
                </h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
                    <div className="mb-6">
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                            Business Name
                        </label>
                        <input
                            type="text"
                            id="businessName"
                            placeholder="Enter your business name"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Food">Food</option>
                            <option value="Services">Services</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Retail">Retail</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                            Business Description
                        </label>
                        <textarea
                            id="description"
                            rows="4"
                            placeholder="Provide a brief description of your business"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Information
                        </label>
                        <input
                            type="text"
                            id="contact"
                            placeholder="Enter your contact number or email"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                            required
                        />
                    </div>

                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                        >
                            Post Your Business
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PostBusinessSection;
