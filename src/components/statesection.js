import React from 'react';
import { FaBed, FaUniversity, FaCity, FaStar } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaBed className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-2xl font-bold">1M+ Beds</h3>
          <p className="text-gray-500">Book your perfect place from an extensive list of options.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUniversity className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-2xl font-bold">800+ Universities</h3>
          <p className="text-gray-500">Find the best student homes near prestigious universities.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCity className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-2xl font-bold">250+ Global Cities</h3>
          <p className="text-gray-500">We operate in major cities around the world.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <FaStar className="text-green-500 text-4xl" />
            <FaStar className="text-green-500 text-4xl" />
            <FaStar className="text-green-500 text-4xl" />
            <FaStar className="text-green-500 text-4xl" />
            <FaStar className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-2xl font-bold">4.8/5 on Trustpilot</h3>
          <p className="text-gray-500">5000+ students have rated us excellent for our services.</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
