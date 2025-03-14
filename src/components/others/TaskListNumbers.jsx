import React from 'react';
import { motion } from 'framer-motion';

const TaskListNumbers = ({ taskNumbers }) => {
  return (
    <div className=' flex mt-10 justify-between gap-10 screen'>
      <motion.div className=' w-[45%] rounded-xl px-9 py-7 bg-blue-400'
        whileHover={{scale: 1.05}}
        transition={{type: 'spring', stiffness: 300}}
      >
        <h2 className='text-white text-3xl font-semibold'>{taskNumbers.active}</h2>
        <h3 className='text-white text-xl font-medium'>Active Tasks</h3>
      </motion.div>

      <motion.div className=' w-[45%] rounded-xl px-9 py-7 bg-green-400'
        whileHover={{scale: 1.05}}
        transition={{type: 'spring', stiffness: 300}}
      >
        <h2 className='text-black !text-black text-3xl font-semibold'>{taskNumbers.new_task}</h2>
        <h3 className='text-black !text-black text-xl font-medium'>New Tasks</h3>
      </motion.div>

      <motion.div className=' w-[45%] rounded-xl px-9 py-7 bg-yellow-400'
        whileHover={{scale: 1.05}}
        transition={{type: 'spring', stiffness: 300}}
      >
        <h2 className='text-white text-3xl font-semibold'>{taskNumbers.completed}</h2>
        <h3 className='text-white text-xl font-medium'>Completed Tasks</h3>
      </motion.div>

      <motion.div className=' w-[45%] rounded-xl px-9 py-7 bg-orange-400'
        whileHover={{scale: 1.05}}
        transition={{type: 'spring', stiffness: 300}}      
      >
        <h2 className='text-black !text-black text-3xl font-semibold'>{taskNumbers.failed}</h2>
        <h3 className='text-black !text-black text-xl font-medium'>Failed Tasks</h3>
      </motion.div>
    </div>
  );
};

export default TaskListNumbers;
