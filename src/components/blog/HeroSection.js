"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HeroSection() {
  const title = "Blog";
  const backgroundImage = "/images/blogpage/handsingrass.jpg";

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <header
      className={`relative w-full h-[500px] flex flex-col justify-center items-center text-center bg-cover bg-center ${inter.className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, #3EBFF9 36%, #3EBFF9 80%, #666666 100%)`,
          opacity: 0.5,
        }}
      ></div>

      {/* Optional darker overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">
          {title}
        </h1>

        {/* Responsive search form */}
        <form
          onSubmit={handleSearch}
          className="relative w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-w-[600px] mx-auto flex flex-col sm:flex-row items-stretch"
        >
          {/* Input wrapper with icon */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </span>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 border-none focus:outline-none text-gray-800 bg-white"
            />
          </div>

          {/* Button */}
         <button
            type="submit"
            className="mt-3 sm:mt-0 sm:ml-3 px-6 py-3 bg-[#7F4592] text-white font-semibold hover:bg-[#693770] transition"
          >
            Search
          </button>
      </form>
      </div>
    </header>
  );
}
