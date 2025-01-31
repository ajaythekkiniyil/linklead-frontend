"use client"
import { useState } from "react";

const UpdateProfile = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        business: "Doe's Bakery",
        bio: "Baking with love since 2010",
        profilePic: "https://github.com/shadcn.png",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfile((prev) => ({ ...prev, profilePic: imageUrl }));
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            {/* Profile Photo */}
            <div className="flex flex-col items-center">
                <label className="relative cursor-pointer">
                    <img
                        src={profile.profilePic}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                    />
                    <input type="file" className="hidden" onChange={handleImageChange} />
                </label>
                <p className="mt-2 text-sm text-gray-600">Click to change photo</p>
            </div>

            {/* Profile Info */}
            <div className="mt-6 space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold">Bio</label>
                    <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                </div>
            </div>

            {/* Save Button */}
            <div className="mt-6 text-center">
                <button className="bg-primary text-white px-6 py-2 rounded-lg transition">
                    Save Changes
                </button>
            </div>
        </div>  
    );
}

export default UpdateProfile;