"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white sticky top-0 z-50 shadow-md py-4">
            <div className="mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="font-bold text-2xl text-green-500">
                        Linklead
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200 ease-in-out">
                        Post Your Business
                    </Link>
                    {/* <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200 ease-in-out">
                        Sign up
                    </Link> */}
                    <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200 ease-in-out">
                        Log in
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Log in Button */}
                    <Link
                        href="#"
                        className="text-gray-600 hover:text-green-500 transition duration-200 ease-in-out mr-4 border border-gray-300 px-4 py-1 rounded-lg"
                    >
                        Log in
                    </Link>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                        aria-label="Open Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 z-20 mt-4">
                    <nav className="flex flex-col px-6 py-4 space-y-4">
                        <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200 ease-in-out">
                            Home
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200 ease-in-out">
                            Services
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200 ease-in-out">
                            Privacy
                        </Link>
                        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out">
                            Post Your Business
                        </button>

                    </nav>
                </div>
            )}
        </header>
    );
}
