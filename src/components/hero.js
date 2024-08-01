import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Home away from home!</h1>
        <p className="text-xl mb-8">Book student accommodations near top universities and cities across the globe.</p>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search by City, University or Property"
              className="w-full py-3 px-6 text-gray-700 focus:outline-none"
            />
            <button className="bg-red-500 p-3 hover:bg-red-600">
              <Search className="text-white" />
            </button>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <span className="bg-gray-600 text-sm py-1 px-3 rounded-full">Verified Properties</span>
          <span className="bg-gray-600 text-sm py-1 px-3 rounded-full">24x7 Assistance</span>
          <span className="bg-gray-600 text-sm py-1 px-3 rounded-full">Lowest Price Guarantee</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;