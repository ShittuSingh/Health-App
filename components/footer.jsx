"use client"

import { useState } from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function NutriWellFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
  
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="max-w-7xl mx-auto py-12 px-4">
 
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Subscribe to Get an Update</h2>
        <p className="text-gray-600 mb-6">Subscribe now for updates. Stay informed and never miss a beat. Join today!</p>
        
        <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@framer.com"
            className="flex-grow px-4 py-2 rounded-full bg-gray-100"
          />
          <button 
            onClick={handleSubscribe}
            className="px-8 py-2 bg-green-200 hover:bg-green-300 transition duration-200 rounded-full font-medium"
          >
            Subscribe
          </button>
        </div>
      </div>
 
      <div className="border-2 border-dashed border-green-200 rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-8">
           <div>
            <div className="flex items-center mb-4">
               
              <h3 className="text-2xl font-bold">
              🔥 CalorieTrack</h3>
            </div>
            <p className="text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae maiores dolorem, odit repellat ea!
            </p>
            
           
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19.59 6.41l-4.83-4.83a1 1 0 00-1.41 0L9.41 5.5a1 1 0 000 1.41L11 8.5l-1.5 1.5-1.59-1.59a1 1 0 00-1.41 0l-4 4a1 1 0 000 1.41l4.83 4.83a1 1 0 001.41 0l3.93-3.93 3.33 3.33a1 1 0 001.41 0l5.66-5.66a1 1 0 000-1.41l-3.33-3.33z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                <Youtube size={20} />
              </a>
            </div>
          </div>

      
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Homepage</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Diet Menu Plans</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</a></li>
            </ul>
          </div>

     
          <div>
            <h3 className="text-xl font-bold mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">404 Page</a></li>
            </ul>
          </div>
        </div>
      </div>

 
      <div className="text-center mt-8 text-gray-600">
        <p>2024 © Nutriwell by <a href="#" className="text-green-600 font-medium">Holykit</a>. All Rights Reserved</p>
      </div>
    </footer>
  );
}