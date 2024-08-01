import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await auth.signOut();
        history.push('/login'); // Redirect to the login page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    handleLogout();
  }, [history]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <p>Logging out...</p>
      </div>
    </div>
  );
};

export default Logout;
