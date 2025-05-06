import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white rounded-full shadow-md">
 
      <div className="flex items-center space-x-2">
        <div className="text-3xl">🔥</div>
        <h1 className="text-2xl font-bold text-gray-900">CalorieTrack</h1>
      </div>

 
      <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
        <li><a href="#features" className="hover:text-red-500">Features</a></li>
        <li><a href="#how-it-works" className="hover:text-red-500">How it Works</a></li>
        <li><a href="#nutrition" className="hover:text-red-500">Nutrition</a></li>
        <li><a href="#progress" className="hover:text-red-500">Progress</a></li>
        <li><a href="#community" className="hover:text-red-500">Community</a></li>
        <li><a href="#support" className="hover:text-red-500">Support</a></li>
      </ul>

 
      <button className="bg-[#ffcc91] text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-[#fbbf77] transition">
        Track Now
      </button>
    </nav>
  );
};

export default Navbar;