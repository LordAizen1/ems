import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1c1c1c] mt-10 px-5 py-5 rounded'>
    <form className='flex justify-between'>
      {/* Left Column: Input Fields */}
      <div className='w-[40%]'>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='text'
            placeholder='Make a ui design'
          />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='date'
          />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='text'
            placeholder='employee name'
          />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            type='text'
            placeholder='design/dev'
          />
        </div>
      </div>

      {/* Right Column: Description and Submit Button */}
      <div className='w-[40%]'>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
            placeholder='Enter task description...'
          />
        </div>

        <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full'>
          Create Task
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask
