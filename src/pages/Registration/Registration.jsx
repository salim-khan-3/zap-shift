import React from "react";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Create an Account
          </h1>
          <p className="mt-2 text-lg text-gray-600">Register with ZapShift</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">
          {/* Avatar Circle */}
          <div className="flex justify-center -mt-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition text-gray-500"
              />
            </div>
          </div>

          {/* Register Button */}
          <button className="w-full cursor-pointer bg-lime-400 hover:bg-lime-500 text-black font-semibold py-4 rounded-lg transition duration-200 text-lg">
            Register
          </button>

          {/* Login Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <a href="#" className="text-lime-600 font-medium hover:underline">
              Login
            </a>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-800 font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition">
            
<FcGoogle />
            Register with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
