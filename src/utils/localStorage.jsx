// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Alice",
    "email": "alice@example.com",
    "password": "123",
    "tasks": [
      { "title": "Prepare Monthly Report", "description": "Compile financial data for the monthly report.", "date": "2025-03-15", "category": "Finance", "active": true, "new_task": false, "completed": false, "failed": false, "priority": "High" },
      { "title": "Team Meeting", "description": "Discuss project updates and next steps.", "date": "2025-03-16", "category": "Management", "active": true, "new_task": true, "completed": false, "failed": false, "priority": "Medium" },
      { "title": "Update Client Database", "description": "Ensure all client information is current.", "date": "2025-03-14", "category": "CRM", "active": false, "new_task": false, "completed": true, "failed": false, "priority": "Low" }
    ],
    "taskNumbers": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 2,
    "firstName": "Bob",
    "email": "bob@example.com",
    "password": "123",
    "tasks": [
      { "title": "Design Marketing Campaign", "description": "Create visuals and messaging for the new product launch.", "date": "2025-03-18", "category": "Marketing", "active": true, "new_task": true, "completed": false, "failed": false, "priority": "Medium" },
      { "title": "Client Follow-up", "description": "Call and email top-tier clients for feedback.", "date": "2025-03-17", "category": "Sales", "active": true, "new_task": false, "completed": false, "failed": false, "priority": "Medium" },
      { "title": "Prepare Presentation", "description": "Prepare slides for the investor meeting.", "date": "2025-03-20", "category": "Business", "active": false, "new_task": false, "completed": true, "failed": false, "priority": "Low" },
      { "title": "Review Ad Performance", "description": "Analyze engagement metrics of online ads.", "date": "2025-03-19", "category": "Marketing", "active": false, "new_task": true, "completed": false, "failed": true, "priority": "Low" }
    ],
    "taskNumbers": { "active": 2, "new_task": 2, "completed": 1, "failed": 1 }
  },
  {
    "id": 3,
    "firstName": "Charlie",
    "email": "charlie@example.com",
    "password": "123",
    "tasks": [
      { "title": "Fix Backend Bug", "description": "Resolve issue causing API failures.", "date": "2025-03-14", "category": "Development", "active": false, "new_task": false, "completed": true, "failed": false, "priority": "High" },
      { "title": "Deploy New Feature", "description": "Push the latest software update to production.", "date": "2025-03-16", "category": "Development", "active": true, "new_task": true, "completed": false, "failed": false, "priority": "High" },
      { "title": "Code Review", "description": "Review code changes submitted by peers.", "date": "2025-03-17", "category": "Development", "active": true, "new_task": false, "completed": false, "failed": false, "priority": "Medium" }
    ],
    "taskNumbers": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstName": "Dana",
    "email": "dana@example.com",
    "password": "123",
    "tasks": [
      { "title": "Social Media Strategy", "description": "Plan the next quarter’s social media content.", "date": "2025-03-19", "category": "Marketing", "active": true, "new_task": true, "completed": false, "failed": false, "priority": "Medium" },
      { "title": "Employee Training", "description": "Organize and conduct training for new hires.", "date": "2025-03-21", "category": "HR", "active": false, "new_task": false, "completed": true, "failed": false, "priority": "Low" }
    ],
    "taskNumbers": { "active": 1, "new_task": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 5,
    "firstName": "Eve",
    "email": "eve@example.com",
    "password": "123",
    "tasks": [
      { "title": "Warehouse Inventory Audit", "description": "Verify stock levels and report discrepancies.", "date": "2025-03-22", "category": "Logistics", "active": true, "new_task": false, "completed": false, "failed": false, "priority": "Low" },
      { "title": "Supplier Negotiation", "description": "Discuss contract terms with new suppliers.", "date": "2025-03-23", "category": "Procurement", "active": true, "new_task": true, "completed": false, "failed": false, "priority": "High" },
      { "title": "Transportation Planning", "description": "Optimize delivery routes for efficiency.", "date": "2025-03-25", "category": "Logistics", "active": false, "new_task": false, "completed": true, "failed": false, "priority": "Medium" }
    ],
    "taskNumbers": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
  }
];



  

const admin =  [{
    "id": 1,
    "firstName": "Admin Sahab",
    "email": "admin@example.com",
    "password": "123"
  }]
  
// Save employees and admin data to localStorage if they don't exist
if (!localStorage.getItem('employees')) {
  localStorage.setItem('employees', JSON.stringify(employees));
}
if (!localStorage.getItem('admin')) {
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
