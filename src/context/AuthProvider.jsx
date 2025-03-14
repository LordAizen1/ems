import React, { createContext, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';
import AuthContext from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => getLocalStorage('user'));

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
