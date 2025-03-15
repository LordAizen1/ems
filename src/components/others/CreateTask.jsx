import React, { useState, useEffect, useRef } from "react";
import fireworks from "../../utils/fireworks"; // Import the fireworks module

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(""); // Add priority state

  const canvasRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Initialize the fireworks animation
    if (canvasRef.current) {
      fireworks.init(canvasRef.current);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    // Trigger fireworks animation
    const button = buttonRef.current;
    const canvas = canvasRef.current;
    if (button && canvas) {
      const rect = button.getBoundingClientRect();
      const containerRect = canvas.parentElement.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - containerRect.left;
      const y = rect.top + rect.height / 2 - containerRect.top;
      fireworks.animateParticles(x, y);
    }

    // Create the new task object
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      active: false,
      new_task: true, // New tasks are marked as "new_task"
      failed: false,
      completed: false,
      priority: priority,
    };

    // Update localStorage
    const data = JSON.parse(localStorage.getItem("employees"));
    const updatedData = data.map((employee) => {
      if (assignTo === employee.firstName) {
        // Add the new task to the employee's tasks
        const updatedTasks = [...employee.tasks, newTask];

        // Update taskNumbers based on the updated tasks
        const newTaskNumbers = {
          active: updatedTasks.filter((task) => task.active && !task.completed && !task.failed).length,
          new_task: updatedTasks.filter((task) => task.new_task).length,
          completed: updatedTasks.filter((task) => task.completed).length,
          failed: updatedTasks.filter((task) => task.failed).length,
        };

        return {
          ...employee,
          tasks: updatedTasks,
          taskNumbers: newTaskNumbers, // Update taskNumbers
        };
      }
      return employee;
    });

    // Save the updated data back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // Log the updated employees data for debugging
    console.log("Updated Employees Data:", updatedData);

    // Reset the form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setPriority("");
  };

  return (
    <div className="relative bg-[#1c1c1c] mt-5 px-5 py-3 overflow-hidden rounded">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }} // Ensure the canvas is above other elements
      />
      <form onSubmit={submitHandler} className="flex justify-between relative" style={{ zIndex: 2 }}>
        {/* Left Column: Input Fields */}
        <div className="w-[40%]">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design, etc."
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design/Dev"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Priority</h3>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="text-sm py-1 px-2 w-full bg-[#1c1c1c] rounded outline-none border-[1px] border-gray-400 mb-4"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Right Column: Description and Submit Button */}
        <div className="w-[40%]">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-60 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              placeholder="Enter task description..."
            />
          </div>

          <button
            ref={buttonRef}
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;