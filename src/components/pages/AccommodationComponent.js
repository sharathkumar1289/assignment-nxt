import React, { useState } from 'react';
import { Heart, MapPin, School } from 'lucide-react';

const AccommodationComponent = ({ title, subtitle, categories, accommodations }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  const filteredAccommodations = accommodations.filter(acc => acc.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border rounded-full ${
              selectedCategory === category ? 'bg-gray-200 border-gray-400' : 'border-gray-300'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredAccommodations.map((acc) => (
          <div key={acc.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => setSelectedAccommodation(acc)}>
            <div className="relative">
              <img src={acc.image} alt={acc.name} className="w-full h-48 object-cover" />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full">
                <Heart className="text-gray-400 hover:text-red-500" size={20} />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-green-500 font-bold">{acc.rating}</span>
                <span className="text-sm text-gray-500 ml-1">({acc.reviewCount})</span>
              </div>
              <h3 className="font-bold text-lg mb-1">{acc.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{acc.location}</p>
              <p className="font-bold mb-2">From {acc.price}/ week</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={16} className="mr-1" /> 
                <span className="mr-4">City Center | {acc.distanceToCenter}</span>
                <School size={16} className="mr-1" /> 
                <span>{acc.university}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedAccommodation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedAccommodation.name}</h2>
              <img src={selectedAccommodation.image} alt={selectedAccommodation.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-2">{selectedAccommodation.location}</p>
              <p className="font-bold mb-2">From {selectedAccommodation.price}/ week</p>
              <p className="mb-4">{selectedAccommodation.description}</p>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setSelectedAccommodation(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccommodationComponent;