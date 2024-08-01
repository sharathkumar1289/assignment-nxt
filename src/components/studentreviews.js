import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "My booking manager was exceptionally helpful and responsive, making the process simple and easy.",
    name: "Shreyas",
    university: "University Of Nottingham",
    avatar: "/path/to/shreyas-avatar.jpg"
  },
  {
    id: 2,
    text: "They worked with me day and night to solve any query I had . Immense respect and gratitude towards them for the services...",
    name: "Govind Bhatia",
    university: "Sheffield Hallam University",
    avatar: "/path/to/govind-avatar.jpg",
    hasMore: true
  },
  {
    id: 3,
    text: "Very nice and positive response by team. Loved the customer support and fast query solution.",
    name: "Dev Gupta",
    university: "Birkbeck University Of India",
    avatar: "/path/to/dev-avatar.jpg"
  },
  {
    id: 4,
    text: "The site and its executives are very helpful and kind. They helped me by suggesting the best. Thankyou!",
    name: "vineet",
    university: "University Of Leicester",
    avatar: "/path/to/vineet-avatar.jpg"
  }
];

const StudentReviews = () => {
  return (
    <div className="bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">What do students have to say about us?</h2>
          <div className="flex items-center">
            <Star className="text-green-500 mr-1" size={20} />
            <span className="font-bold text-green-500 mr-1">Trustpilot</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">4.8/5</span>
          </div>
        </div>
        <p className="text-gray-600 mb-8">Over 1M students trust amber for their student housing needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                {review.text}
                {review.hasMore && (
                  <span className="text-blue-500 cursor-pointer ml-1">Read More</span>
                )}
              </p>
              <div className="flex items-center">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-right">
          <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-end ml-auto">
            Read All Reviews
            <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;