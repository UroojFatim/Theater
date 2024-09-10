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
    <div className="flex items-center justify-around p-10 bg-orange-600 text-white">
      <div className="text-3xl">
        Get update sign up now!
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 pr-36 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-800 focust:text-white bg-transparent "
          required
        />
        <button
          type="submit"
          className="bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
