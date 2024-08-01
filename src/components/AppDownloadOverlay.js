import React from 'react';
import qrCode from '../icons/qr.png'; // update with the correct path to your QR code image
import googlePlayIcon from '../icons/googleplay.png'; // update with the correct path to the Google Play icon
import appStoreIcon from '../icons/appstore.png'; // update with the correct path to the App Store icon

const AppDownloadOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-4 w-120 relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <span>X</span>
        </button>
        <h2 className="text-xl font-bold mb-2 text-center">Start your journey from here!</h2>
        <p className="mb-2 text-center text-gray-700 text-sm">More than 1.25 million beds available in 600 cities</p>
        <div className="flex flex-col items-center">
          <img src={qrCode} alt="QR Code" className="mb-2 w-24 h-24" />
          <p className="mb-2 text-center text-gray-700 text-sm">Scan the QR to download the App</p>
          <div className="flex space-x-2 mb-4 gap-2">
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              <img src={googlePlayIcon} alt="Google Play" className="w-8 h-8" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appStoreIcon} alt="App Store" className=" w-8 h-8" />
            </a>
          </div>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li className="flex items-center">
              <span className="mr-1">✔️</span> 100% Verified Listings
            </li>
            <li className="flex items-center">
              <span className="mr-1">✔️</span> Quick and Easy Bookings
            </li>
            <li className="flex items-center">
              <span className="mr-1">✔️</span> Price Match Guarantee
            </li>
            <li className="flex items-center">
              <span className="mr-1">✔️</span> 24x7 Personal Assistance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadOverlay;
