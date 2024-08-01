import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const countryFlags = {
  'United Kingdom': '🇬🇧',
  'Australia': '🇦🇺',
  'Ireland': '🇮🇪',
  'United States': '🇺🇸',
  'Canada': '🇨🇦',
  'Germany': '🇩🇪',
  'Spain': '🇪🇸',
};

const cities = [
  { name: 'London', country: 'United Kingdom', image: '/path/to/london.jpg' },
  { name: 'Leicester', country: 'United Kingdom', image: '/path/to/leicester.jpg' },
  { name: 'Liverpool', country: 'United Kingdom', image: '/path/to/liverpool.jpg' },
  { name: 'Sheffield', country: 'United Kingdom', image: '/path/to/sheffield.jpg' },
  { name: 'Newcastle Upon Tyne', country: 'United Kingdom', image: '/path/to/newcastle.jpg' },
  { name: 'Cardiff', country: 'United Kingdom', image: '/path/to/cardiff.jpg' },
  { name: 'Birmingham', country: 'United Kingdom', image: '/path/to/birmingham.jpg' },
  { name: 'Nottingham', country: 'United Kingdom', image: '/path/to/nottingham.jpg' },
  { name: 'Coventry', country: 'United Kingdom', image: '/path/to/coventry.jpg' },
  { name: 'Leeds', country: 'United Kingdom', image: '/path/to/leeds.jpg' },
  { name: 'Manchester', country: 'United Kingdom', image: '/path/to/manchester.jpg' },
  { name: 'Swansea', country: 'United Kingdom', image: '/path/to/swansea.jpg' },
  // Add more cities for other countries
];

const PopularCities = () => {
  const [selectedCountry, setSelectedCountry] = useState('United Kingdom');

  const filteredCities = cities.filter(city => city.country === selectedCountry);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">Popular Cities across the Globe</h2>
      <p className="text-gray-600 mb-6">Book student accommodations near top cities and universities around the world</p>
      
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {Object.entries(countryFlags).map(([country, flag]) => (
          <button
            key={country}
            className={`px-4 py-2 border rounded-full flex items-center space-x-2 ${
              selectedCountry === country ? 'bg-gray-200 border-gray-400' : 'border-gray-300'
            }`}
            onClick={() => setSelectedCountry(country)}
          >
            <span>{flag}</span>
            <span>{country}</span>
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredCities.map((city) => (
          <div key={city.name} className="relative rounded-lg overflow-hidden shadow-md">
            <img src={city.image} alt={city.name} className="w-full h-40 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <p className="text-sm font-semibold">{city.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 flex items-center text-blue-600 hover:text-blue-800">
        <span>View all cities</span>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default PopularCities;