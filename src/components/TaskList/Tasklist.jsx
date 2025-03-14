import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const Tasklist = ({ tasks }) => {
  // Filter tasks based on their status
  const activeTasks = tasks.filter((task) => task.active && !task.completed && !task.failed && !task.new_task);
  const newTasks = tasks.filter((task) => task.new_task); // Only tasks with new_task: true
  const completedTasks = tasks.filter((task) => task.completed);
  const failedTasks = tasks.filter((task) => task.failed);

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap mt-10'>
      {/* Render tasks based on their status */}
      <AcceptTask tasks={activeTasks} />
      <NewTask tasks={newTasks} />
      <CompleteTask tasks={completedTasks} />
      <FailedTask tasks={failedTasks} />
    </div>
  );
};

export default Tasklist;