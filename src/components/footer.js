import React from 'react';
import googlePlayIcon from '../icons/googleplay.png'; 
import appStoreIcon from '../icons/appstore.png'; 

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Logo and Trustpilot Rating */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-2">amber</h2>
            <p className="text-gray-500 text-sm mb-4">amber © 2024. All rights reserved.</p>
            <div className="bg-gray-100 p-3 rounded-lg inline-block">
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 font-semibold">4.8/5 on Trustpilot</span>
              </div>
              <p className="text-sm text-gray-600">Rated as "Excellent" • 5000+ Reviews by students</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Get the app</p>
              <div className="flex space-x-2 mb-2">
                <img src={googlePlayIcon} alt="Google Play" className="h-8" />
                <img src={appStoreIcon} alt="App Store" className="h-8" />
              </div>
              <p className="font-semibold mb-2">Payment Options</p>
              <div className="flex space-x-2">
                <img src="/path-to-visa-icon.png" alt="Visa" className="h-6" />
                <img src="/path-to-mastercard-icon.png" alt="Mastercard" className="h-6" />
                <img src="/path-to-amex-icon.png" alt="American Express" className="h-6" />
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {['About', 'How it works', 'Refer a Friend', 'Group Bookings', 'List with us', 'Partner with us', 'Universities', 'Careers'].map((item, index) => (
                <li key={index} className="text-gray-600 hover:text-gray-900">
                  <a href="#">{item}</a>
                  {['Group Bookings', 'List with us', 'Partner with us', 'Universities'].includes(item) && 
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-1 rounded">New</span>
                  }
                  {item === 'Careers' && 
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-1 rounded">We are hiring!</span>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3">Discover</h3>
            <ul className="space-y-2">
              {['Blog', 'Podcast', 'Newsroom', 'Amber Plus', 'Media Mention', 'Ambassador', 'Scholarships', 'Exams'].map((item, index) => (
                <li key={index} className="text-gray-600 hover:text-gray-900">
                  <a href="#">{item}</a>
                  {item === 'Exams' && 
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-1 rounded">New</span>
                  }
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Contact', 'T&C', 'Privacy Policy', 'Sitemap'].map((item, index) => (
                <li key={index} className="text-gray-600 hover:text-gray-900">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3">Contact us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 9513884849
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                contact@amberstudent.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                WhatsApp
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                302, SWS 1, Amber Floor, United States
              </li>
            </ul>


            <div className="mt-4 flex space-x-3">
              {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((platform, index) => (
                <a key={index} href={`https://${platform}.com`} className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    {/* Placeholder icon; replace with actual platform icons */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
