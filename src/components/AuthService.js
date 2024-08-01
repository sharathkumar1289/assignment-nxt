// AuthService.js
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

export const emailPasswordSignIn = async (email, password, isSignUp) => {
  try {
    if (isSignUp) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  } catch (error) {
    console.error('Error with email/password authentication:', error);
    throw error;
  }
};

export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error during Google sign in:', error);
    throw error;
  }
};

export const facebookSignIn = async () => {
  const provider = new FacebookAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error during Facebook sign in:', error);
    throw error;
  }
};
