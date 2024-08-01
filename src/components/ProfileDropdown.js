// ProfileDropdown.js
import React from 'react';
import { User } from 'lucide-react';

const ProfileDropdown = ({ user, onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <div className="py-2">
        <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
          <User size={18} className="mr-2" />
          <span>{user.displayName || 'My Profile'}</span>
        </a>
        <a href="/bookings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Bookings
        </a>
        <a href="/group-booking" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Group Booking <span className="text-green-600">New</span>
        </a>
        <a href="/refer-friend" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Refer a Friend <span className="text-green-600">Get 50 GBP</span>
        </a>
        <a href="/partner" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Partner with Us
        </a>
        <a href="/list-with-us" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          List with Us
        </a>
        <div className="border-t border-gray-200"></div>
        <button onClick={onLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
