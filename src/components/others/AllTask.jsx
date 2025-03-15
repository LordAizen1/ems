import React from 'react';

const AllTask = () => {
  // Retrieve employees data from localStorage
  const employees = JSON.parse(localStorage.getItem('employees')) || [];

  return (
    <div className="bg-[#1c1c1c] mt-5 rounded">
      {/* Header Row (Outside the Scrollable Container) */}
      <div className='flex justify-between rounded bg-red-400 px-4 py-2 sticky top-0 z-10'>
        <h2 className='font-semibold'>Employee Name</h2>
        <h2 className='font-semibold'>New Task</h2>
        <h2 className='font-semibold'>Active Task</h2>
        <h2 className='font-semibold'>Completed</h2>
        <h2 className='font-semibold'>Failed</h2>
      </div>

      {/* Task List Container (Scrollable) */}
      <div id="tasklist" className='p-5 h-55 overflow-y-auto'>
        {/* Employee Task Rows */}
        {employees.map((employee, index) => {
          // Calculate task counts for each employee
          const newTasks = employee.tasks.filter((task) => task.new_task).length;
          const activeTasks = employee.tasks.filter((task) => task.active && !task.completed && !task.failed).length;
          const completedTasks = employee.tasks.filter((task) => task.completed).length;
          const failedTasks = employee.tasks.filter((task) => task.failed).length;

          return (
            <div key={index} className='flex justify-between mb-2 border border-green-300 rounded bg-transparent px-4 py-2'>
              <h2>{employee.firstName}</h2>
              <h3 className='!text-yellow-400'>{newTasks}</h3>
              <h4 className='!text-blue-400'>{activeTasks}</h4>
              <h4>{completedTasks}</h4>
              <h4 className='!text-red-500'>{failedTasks}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;