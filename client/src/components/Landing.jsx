import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-semibold text-blue-600 mb-4">Task Management </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Sign In and start building your todo list.
        </p>
        
        <div className="space-x-4">
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-block px-6 py-3 bg-gray-300 text-gray-800 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
