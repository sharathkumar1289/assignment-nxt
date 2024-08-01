
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsgNBZng_bdel9XBsIkjQFRxRxhyr0m1U",
  authDomain: "nxtwave-assn.firebaseapp.com",
  projectId: "nxtwave-assn",
  storageBucket: "nxtwave-assn.appspot.com",
  messagingSenderId: "466503713490",
  appId: "1:466503713490:web:ca4474a4b43ebc79f9e30b",
  measurementId: "G-5T6JM5439T"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { auth };
