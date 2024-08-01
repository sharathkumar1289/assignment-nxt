import React from 'react';

const Step = ({ number, icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BookingSteps = () => (
  <section className="my-8">
    <div className="container mx-auto px-4 py-8">

  
    <h2 className="text-2xl font-bold mb-2">Book your place in 3 easy steps</h2>
    <p className="text-gray-600 mb-8">Book places in major cities and universities across the globe</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Step
        number="1"
        icon="🔍"
        title="Discover and Finalise"
        description="Choose from a plethora of verified student home listings"
      />
      <Step
        number="2"
        icon="📄"
        title="Get your paperwork done"
        description="Paperwork's on us, no need to fuss."
      />
      <Step
        number="3"
        icon="🏠"
        title="Accommodation Booked!"
        description="Relax, pack your bags, and unravel a new life chapter!"
      />
    </div>
    </div>
  </section>
);

export default BookingSteps;