"use client"
import { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign up

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form>
          {isLogin ? (
            <>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                  required
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Toggle between Login and Sign Up */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-500 ml-2 hover:text-green-600"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
