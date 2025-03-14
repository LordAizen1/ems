import React, { useContext, useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AuthContext from './context/AuthContext';

const App = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const handleLogin = (email, password) => {
    const adminData = JSON.parse(localStorage.getItem('admin')) || [];
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
  
    const admin = adminData.find((a) => a.email === email && a.password === password);
    const employee = employees.find((e) => e.email === email && e.password === password);
  
    if (admin) {
      const userData = { ...admin, role: 'admin' }; // Store full admin data
      setUserData(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else if (employee) {
      const userData = { ...employee, role: 'user' }; // Store full employee data
      setUserData(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      alert('Invalid Credentials');
    }
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Retrieve user from localStorage
    if (loggedInUser) {
      setUserData(loggedInUser); // Set the user state if a user is found
    }
  }, [setUserData]);

  return (
    <>
      {!userData ? (
        <Login handleLogin={handleLogin} />
      ) : userData.role === 'admin' ? (
        <AdminDashboard adminData={userData} /> // Pass admin details
      ) : (
        <EmployeeDashboard employeeData={userData} taskNumbers={userData.taskNumbers} />
      )}
    </>
  );
};

export default App;