import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1f1a] text-white px-4 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-72 h-72 bg-[#244D3F] opacity-30 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-[#244D3F] opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* 404 Text */}
      <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-[#244D3F] to-green-300 text-transparent bg-clip-text animate-pulse">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved somewhere
        else.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="mt-8 px-6 py-3 rounded-2xl bg-[#244D3F] hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
          Go Back Home
        </button>
      </Link>

      {/* Subtle Footer Text */}
      <p className="mt-6 text-sm text-gray-500">Lost in the dark forest 🌲</p>
    </div>
  );
};

export default ErrorPage;
