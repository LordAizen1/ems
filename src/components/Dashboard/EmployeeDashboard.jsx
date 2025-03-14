import React, { useContext } from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import Tasklist from '../TaskList/Tasklist';
import AuthContext from '../../context/AuthContext';

const EmployeeDashboard = () => {
  const { userData } = useContext(AuthContext); // Get the logged-in employee's data

  if (!userData) {
    return <div className="text-white text-xl p-10">Loading...</div>;
  }
  

  const taskNumbers = userData.taskNumbers || { active: 0, new_task: 0, completed: 0, failed: 0 }; // ✅ Extract safely

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNumbers taskNumbers={taskNumbers} /> {/* ✅ Now taskNumbers is defined */}
      <Tasklist tasks={userData.tasks || []} /> {/* Pass tasks to Tasklist */}
    </div>
  );
};

export default EmployeeDashboard;