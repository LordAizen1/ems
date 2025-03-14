import React from 'react';

const NewTask = ({ tasks }) => {
  // Log tasks to verify data
  console.log("Tasks in NewTask:", tasks);

  return (
    <>
      {tasks.map((task, index) => (
        <div key={index} className='h-full flex-shrink-0 w-[300px] p-5 bg-emerald-700 rounded-xl'>
          <div className='text-white text-sm flex items-center justify-between'>
            {/* Display Priority */}
            {task.priority ? (
              <h3
                className={`px-3 py-1 rounded ${
                  task.priority === "High"
                    ? "bg-red-600"
                    : task.priority === "Medium"
                    ? "bg-yellow-600"
                    : task.priority === "Low"
                    ? "bg-green-600"
                    : "bg-gray-500"
                }`}
              >
                {task.priority ? task.priority : "No Priority"}
              </h3>

            
            ) : (
              <h3 className='px-3 py-1 rounded bg-gray-500'>No Priority</h3>
            )}
            <h4 className='text-base'>{task.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
          <p className='text-sm mt-2'>{task.description}</p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-500 mt-4 w-full rounded py-1 px-2 text-sm'>
              Accept Task
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewTask;