import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 p-8 rounded-lg shadow-lg bg-white min-w-[340px] sm:min-w-96'>
        <h2 className="text-xl font-bold text-gray-700 text-center">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-center text-gray-500">
          Please {state === 'Sign Up' ? 'create an account' : 'login'} to book an appointment.
        </p>

        {state === 'Sign Up' && (
          <div>
            <label className="block mb-1 text-gray-600">Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div>
          <label className="block mb-1 text-gray-600">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-slate-600 text-white rounded-md w-full transition duration-300 transform hover:bg-slate-700 hover:scale-105 focus:outline-none focus:ring focus:ring-slate-300"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="mt-2 text-center">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
          <span
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="text-blue-500 cursor-pointer ml-1 hover:underline transition duration-200"
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
