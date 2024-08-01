// Navbar.js
import React, { useState, useEffect } from 'react';
import { Download, HelpCircle, Heart, User, Search, Menu } from 'lucide-react';
import LoginOverlay from './LoginOverlay';
import ProfileDropdown from './ProfileDropdown';
import AppDownloadOverlay from './AppDownloadOverlay'; // Import the new overlay component
import { auth } from '../firebase/firebaseConfig';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const [showAppDownloadOverlay, setShowAppDownloadOverlay] = useState(false); // State to show/hide AppDownloadOverlay
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleLoginClick = () => {
    setShowLoginOverlay(true);
  };

  const handleDownloadAppClick = () => {
    setShowAppDownloadOverlay(true); // Show the AppDownloadOverlay when "Download App" is clicked
  };

  const handleCloseOverlay = () => {
    setShowLoginOverlay(false);
  };

  const handleCloseAppDownloadOverlay = () => {
    setShowAppDownloadOverlay(false); // Hide the AppDownloadOverlay
  };

  const handleProfileDropdownToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
    setIsProfileDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold">amber</div>
            {isScrolled && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by City, University and Property"
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800" onClick={handleDownloadAppClick}>
              <Download size={18} />
              <span>Download App</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
              <HelpCircle size={18} />
              <span>Support</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
              <Heart size={18} />
              <span>Shortlist</span>
            </button>
            {user ? (
              <div className="relative">
                <div
                  className="flex items-center space-x-2 cursor-pointer border border-gray-200 rounded-md p-1 hover:bg-gray-100"
                  onClick={handleProfileDropdownToggle}
                >
                  <img src={user.photoURL || 'defaultProfileIconURL'} alt="Profile" className="w-8 h-8 rounded-full" />
                  <Menu size={18} className="text-gray-600" />
                </div>
                {isProfileDropdownOpen && <ProfileDropdown user={user} onLogout={handleLogout} />}
              </div>
            ) : (
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800" onClick={handleLoginClick}>
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {showLoginOverlay && <LoginOverlay onClose={handleCloseOverlay} onLoginSuccess={() => setUser(auth.currentUser)} />}
      {showAppDownloadOverlay && <AppDownloadOverlay onClose={handleCloseAppDownloadOverlay} />} {/* Include the new overlay */}
    </>
  );
};

export default Navbar;
