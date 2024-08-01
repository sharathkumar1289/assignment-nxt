import React from 'react';
import OfferCard from './offercard';  // Adjust the path as necessary
import im1 from '../icons/image.png';  // Example image, replace with actual paths

const ReferralProgram = () => (
  <section className="my-8">
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">Amber Referral Program and Offers</h2>
      <p className="text-gray-600 mb-4">Several promotions, deals, and special offers crafted just for you.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <OfferCard
          title="Unlock up to $15,000 in Scholarships!"
          description="Dream of studying in the UK, USA, Ireland, or Canada? Apply now and start your future!"
          buttonText="Apply Now"
          imageSrc={im1}  // Replace with actual path
        />
        <OfferCard
          title="Win £50 in just a few steps! Refer a friend and earn your reward"
          description="Turn connections into rewards. Get credited after successful booking."
          buttonText="Refer Now"
          imageSrc="/path-to-students-image.jpg"  // Replace with actual path
        />
        <OfferCard
          title="Save up to £300 with amber"
          description="Get exclusive discounts from 150+ trusted partners at this one-stop student platform"
          buttonText="Claim Now"
          imageSrc="/path-to-discount-image.jpg"  // Replace with actual path
        />
      </div>
    </div>
  </section>
);

export default ReferralProgram;
