// LoginOverlay.js
import React, { useState } from 'react';
import { emailPasswordSignIn, googleSignIn, facebookSignIn } from './AuthService';
import googleIcon from '../icons/google.png';
import facebookIcon from '../icons/facebook.png';
import appleIcon from '../icons/apple.png';

const LoginOverlay = ({ onClose, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailPasswordLogin = async () => {
    setIsLoading(true);
    try {
      await emailPasswordSignIn(email, password, isSignUp);
      onLoginSuccess();
      onClose();
    } catch (error) {
      console.error('Error with email/password authentication:', error);
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      onLoginSuccess();
      onClose();
    } catch (error) {
      console.error('Error during Google sign in:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await facebookSignIn();
      onLoginSuccess();
      onClose();
    } catch (error) {
      console.error('Error during Facebook sign in:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <span>X</span>
        </button>
        <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleEmailPasswordLogin}
          disabled={isLoading}
        >
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>
        <div className="text-center mb-4 text-gray-500">or</div>
        <button
          className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 w-full mb-2 hover:bg-gray-100"
          onClick={handleGoogleLogin}
        >
          <img src={googleIcon} alt="Google" className="mr-2 w-5 h-5" />
          Sign in with Google
        </button>
        <button
          className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 w-full mb-2 hover:bg-gray-100"
          onClick={handleFacebookLogin}
        >
          <img src={facebookIcon} alt="Facebook" className="mr-2 w-5 h-5" />
          Continue with Facebook
        </button>
        <button className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 w-full hover:bg-gray-100">
          <img src={appleIcon} alt="Apple" className="mr-2 w-5 h-5" />
          Continue with Apple
        </button>
        <div className="text-center mt-4 text-gray-500 text-sm">
          By signing in you agree to our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default LoginOverlay;
