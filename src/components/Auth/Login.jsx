import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext'; // Import AuthContext
import AdminDashboard from '../Dashboard/AdminDashboard'; // Import AdminDashboard
import EmployeeDashboard from '../Dashboard/EmployeeDashboard'; // Import EmployeeDashboard

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isGuest, setIsGuest] = useState(false); // Track if guest is logged in
  const [guestRole, setGuestRole] = useState(null); // Track guest role (admin or employee)
  const { setUserData } = useContext(AuthContext); // Access setUserData from AuthContext

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  // Function to handle guest login
  const handleGuestLogin = (role) => {
    setIsGuest(true); // Set guest login to true
    setGuestRole(role); // Set guest role (admin or employee)

    // Simulate guest login by setting userData in AuthContext
    if (role === "employee") {
      const guestEmployee = {
        id: 6,
        firstName: "GuestEmployee",
        email: "guestemployee@example.com",
        password: "guest123",
        tasks: [
          {
            title: "Urgent Bug Fix",
            description: "Fix the critical bug causing crashes.",
            date: "2025-03-28",
            category: "Bug Fix",
            active: true,
            new_task: false,
            completed: false,
            failed: false,
            priority: "High",
          },
          {
            title: "Feature Development",
            description: "Implement user authentication system.",
            date: "2025-04-05",
            category: "Development",
            active: true,
            new_task: false,
            completed: false,
            failed: false,
            priority: "High",
          },
          {
            title: "Overdue Report Submission",
            description: "Submit quarterly financial report.",
            date: "2025-03-20",
            category: "Finance",
            active: false,
            new_task: false,
            completed: false,
            failed: true,  // Marked as failed because it was overdue
            priority: "High",
          },
          {
            title: "Code Review",
            description: "Review the latest PRs and approve changes.",
            date: "2025-04-02",
            category: "Development",
            active: false,
            new_task: true,
            completed: false,
            failed: false,
            priority: "Medium",
          },
          {
            title: "Team Meeting",
            description: "Discuss project roadmap and milestones.",
            date: "2025-04-03",
            category: "Meeting",
            active: false,
            new_task: false,
            completed: true,
            failed: false,
            priority: "Low",
          },
          {
            title: "Customer Feedback Analysis",
            description: "Analyze user feedback from last quarter.",
            date: "2025-04-10",
            category: "Analysis",
            active: true,
            new_task: false,
            completed: false,
            failed: false,
            priority: "Medium",
          },
          {
            title: "Canceled Marketing Campaign",
            description: "Marketing campaign was canceled due to budget cuts.",
            date: "2025-04-07",
            category: "Marketing",
            active: false,
            new_task: false,
            completed: false,
            failed: true,  // Marked as failed due to cancellation
            priority: "Low",
          }
        ],
        taskNumbers: { 
          active: 3, 
          new_task: 1, 
          completed: 1, 
          failed: 2 
        }
        
      };
      setUserData(guestEmployee); // Set guest employee data in AuthContext
    }
  };

  // If guest is logged in, render the appropriate dashboard
  if (isGuest) {
    return guestRole === "admin" ? <AdminDashboard /> : <EmployeeDashboard />;
  }

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center'>
      <div className='font-bold !text-red-600 text-3xl mb-20'>
        Employee Management System
      </div>

      {/* Login Box */}
      <div className='border-2 rounded-xl border-red-600 p-20'>
        <form onSubmit={submitHandler} className='flex flex-col w-90 items-center justify-center'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border-2 w-full border-red-600 rounded-full px-4 py-4 text-xl text-white outline-none bg-transparent placeholder:text-gray-400'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border-2 w-full border-red-600 rounded-full px-4 py-4 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 mt-3'
            type="password"
            placeholder='Enter password'
          />
          <button className='rounded-full px-4 py-4 text-xl text-white bg-red-500 placeholder:text-white w-full mt-3 hover:bg-red-900'>
            Log In
          </button>
        </form>

        {/* Guest Login Buttons */}
        <div className="mt-3 flex flex-row gap-3"> {/* Changed flex-col to flex-row */}
          <button
            onClick={() => handleGuestLogin("admin")}
            className="text-sm rounded-full px-4 py-4 text-white bg-blue-500 w-full hover:bg-blue-700"
          >
            Admin (Guest)
          </button>
          <button
            onClick={() => handleGuestLogin("employee")}
            className="rounded-full px-4 py-4 text-sm text-white bg-green-600 w-full hover:bg-green-700"
          >
            Employee (Guest)
          </button>
        </div>
      </div>

      <div className='font-light !text-red-600 text-sm mt-20'>
        A small ReactJS project by Md Kaif.
      </div>
    </div>
  );
};

export default Login;