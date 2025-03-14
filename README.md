# Employee Management System (EMS)

## Overview

The **Employee Management System (EMS)** is a web application designed to manage tasks for employees and administrators. It features a login system, task management, and a dashboard for both admins and employees. Built with **React.js**, **Tailwind CSS**, and **Node.js**, this project demonstrates modern web development practices, including animations, responsive design, and state management.

---

## Features

### **Login Screen**
- Login as an **Admin** or an **Employee**.
  - **Admin Credentials**: 
    - Email: `admin@example.com`
    - Password: `123`
  - **Employee Credentials**:
    - Email: `bob@example.com`, `eve@example.com`, etc.
    - Password: `123`

### **Admin Dashboard**
- **Add New Tasks**: Assign tasks to employees with properties like title, description, category, priority, and due date.
- **View Task Status**: Monitor the status of tasks for all employees (New, Active, Completed, Failed).

### **Employee Dashboard**
- **View Tasks**: Employees can see tasks assigned to them, categorized as:
  - New Tasks
  - Active Tasks
  - Completed Tasks
  - Failed Tasks

### **Animations**
- Fun and engaging animations, such as a **wiggling hand emoji** 👋🏼 in the header.

### **Responsive Design**
- Works well for larger screens, will work for different screen sizes.

---

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS (for styling)
  - React Router (for navigation)
  - Context API (for state management)
- **Backend**:
  - Node.js (for server-side logic)
- **Other Tools**:
  - GitHub (for version control and deployment)
  - Vite (for fast development builds)

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LordAizen1/ems.git
   cd ems
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Deployment

The application is deployed using **GitHub Pages**. You can access it here:
```
https://LordAizen1.github.io/ems
```

---

## Screenshots

### Login Screen
![Login Screen](screenshots/login.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

### Employee Dashboard
![Employee Dashboard](screenshots/employee-dashboard.png)

---

## How to Use

1. **Login**:
   - Use the provided credentials to log in as an admin or employee.

2. **Admin Features**:
   - Add new tasks and assign them to employees.
   - View the status of all tasks across employees.

3. **Employee Features**:
   - View tasks assigned to you, categorized by status.
   - Mark tasks as completed or failed.

---

