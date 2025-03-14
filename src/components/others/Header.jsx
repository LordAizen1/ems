import React, { useContext } from 'react';
import AuthContext from "../../context/AuthContext";

const Header = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user session
    setUserData(null); // Reset state
    window.location.reload(); // Refresh to redirect to login
  };

  return (
    <div className="flex text-white items-center justify-between">
      <h1 className="text-2xl font-semibold">
        Hello, <br />
        <span className="font-semibold text-3xl">
          {userData ? userData.firstName : "Guest"} <span className="animate-wiggle">👋🏼</span>
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;