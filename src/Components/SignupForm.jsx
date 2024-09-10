// src/components/SignupForm.jsx
import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 md:p-10 bg-orange-600 text-white space-y-4 md:space-y-0 md:space-x-6">
      <div className="text-2xl md:text-3xl text-center md:text-left">
        Get updates, sign up now!
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 w-full md:w-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full md:w-auto p-2 md:pr-36 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-800 focus:text-white bg-transparent"
          required
        />
        <button
          type="submit"
          className="bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
