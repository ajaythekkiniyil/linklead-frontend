import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
      <Link href='/' className="absolute md:hidden top-3 left-4">
        <ArrowLeft size={23} strokeWidth={0.8} />
      </Link>
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2> 
        <form>
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
          {/* Submit Button */}
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <Link href='/signup'
              className="text-primary ml-2"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <div className="text-center mt-2">
          <Link href="#" className="text-sm text-gray-600 hover:text-primary">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
