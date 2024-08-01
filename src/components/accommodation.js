import React from 'react';
import { Heart, MapPin, School } from 'lucide-react';

const AccommodationCard = ({ image, name, location, price, distance, university }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <button className="absolute top-2 right-2 p-1 bg-white rounded-full">
        <Heart className="text-gray-400 hover:text-red-500" size={20} />
      </button>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm">{location}</p>
      <p className="font-bold mt-2">From {price}</p>
      <div className="mt-2 flex items-center text-sm text-gray-500 ">
        <div className='border-2 rounded-full p-1 flex'>
        <MapPin size={16} className="mr-1" /> {distance}
        </div>   
        <div className='border-2 rounded-full p-1 flex'>


      

        
        <School size={16} className="ml-4 mr-1" /> {university}
        </div>
      </div>
    </div>
  </div>
);

const Accommodations = () => {
  const accommodations = [
    { image: 'path_to_image1.jpg', name: 'Abantos, Madrid', location: 'Madrid, Comunidad de Madrid, ES', price: '€2042/ month', distance: 'City Center | 2.6 Mi', university: 'Complute' },
    { image: 'path_to_image2.jpg', name: 'Hollis Croft, Sheffield', location: 'Sheffield, England, GB', price: '£119/ week', distance: 'City Center | 0.3 Mi', university: 'The Univ' },
    // Add more accommodation data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">Continue where you left from</h2>
      <p className="text-gray-600 mb-6">Your recently explored accommodations</p>
      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 border border-gray-300 rounded-full font-medium text-gray-700 bg-white">Active Enquiries</button>
        <button className="px-4 py-2 text-gray-600">Recently Viewed</button>
        <button className="px-4 py-2 text-gray-600">Shortlisted</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
        {accommodations.map((accommodation, index) => (
          <AccommodationCard key={index} {...accommodation} />
        ))}
      </div>
    </div>
  );
};

export default Accommodations;