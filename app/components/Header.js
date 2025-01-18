"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white sticky top-0 z-50 shadow-md py-5">
            <div className="mx-auto px-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <Image src='/assets/images/linklead-logo.svg' alt="Linklead logo" width={125} height={125} />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/post-service" className="text-gray-600 hover:text-primary transition duration-200 ease-in-out">
                        Post Your Business
                    </Link>
                    <Link href="/login" className="login-btn">
                        Log in
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center space-x-2">
                    {/* Log in Button */}
                    <Link
                        href="/login"
                        className="login-btn"
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
                        <Link href="#" className="text-gray-600 hover:text-primary transition duration-200 ease-in-out">
                            Home
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-primary transition duration-200 ease-in-out">
                            Services
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-primary transition duration-200 ease-in-out">
                            Privacy
                        </Link>
                        <Link
                            href="/post-service"
                            className="login-btn text-center"
                        >
                            Post Your Business
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
