import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

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
            className='border-2 w-full border-red-600 rounded-full px-3 py-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border-2 w-full border-red-600 rounded-full px-3 py-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 mt-3'
            type="password"
            placeholder='Enter password'
          />
          <button className='rounded-full px-4 py-4 text-xl text-white bg-red-500 placeholder:text-white w-full mt-5 hover:bg-red-900'>
            Log In
          </button>
        </form>
      </div>
      <div className='font-light !text-red-600 text-sm mt-20'>
        A small ReactJS project by Md Kaif.
      </div>
    </div>
  );
};

export default Login;