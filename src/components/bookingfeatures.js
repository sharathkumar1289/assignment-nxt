import React from 'react';
import { Heart, ThumbsUp, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-12 h-12 text-pink-500" />,
    title: "Quick & Easy Bookings",
    description: "Time is money. Save both when you book with us.",
  },
  {
    icon: <ThumbsUp className="w-12 h-12 text-blue-500" />,
    title: "Price-Match Guarantee",
    description: "Find a lower price and we'll match it. No questions asked.",
    learnMore: true,
  },
  {
    icon: <Clock className="w-12 h-12 text-purple-500" />,
    title: "24x7 Assistance",
    description: "If you have a doubt or a query, we're always a call away.",
  },
  {
    icon: <Shield className="w-12 h-12 text-green-500" />,
    title: "100% Verified Listings",
    description: "We promise to deliver what you see on the website.",
  },
];

const BookingFeatures = () => {
  return (
    
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Book your Perfect Accommodation</h2>
        <p className="text-gray-600 mb-8">Take the hassle out of securing your student home for the best years of your life</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
                {feature.learnMore && (
                  <span className="block text-blue-500 hover:text-blue-700 cursor-pointer mt-2">
                    Learn More.
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingFeatures;