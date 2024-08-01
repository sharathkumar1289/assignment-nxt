import React from 'react';

const OfferCard = ({ title, description, buttonText, imageSrc }) => (
  <div className="relative rounded-lg overflow-hidden bg-white shadow-md group">
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50">
      <div className="text-white">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-pink-600 transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

export default OfferCard;
