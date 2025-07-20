import React, { useState } from 'react';

export default function LoginPage() {
  // State to hold the values of email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State for displaying error messages (e.g., from validation or API)
  const [error, setError] = useState(''); 

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default browser form submission behavior

    // Clear any previous errors
    setError(''); 

    // --- Basic Client-Side Validation ---
    if (!email.trim()) { // .trim() removes whitespace from both ends of a string
      setError('Please enter your email address.');
      return; // Stop the function if validation fails
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    // --- Simulate Login (Replace with your actual API call) ---
    console.log('Login attempt with:', { email, password });

    // Example of a fake login check:
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful! (Simulated)');
      // In a real application, you would typically:
      // 1. Store user token/info (e.g., in localStorage)
      // 2. Redirect the user to a dashboard or home page
      // 3. Update global authentication state
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        
        {/* Login Form Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Welcome Back!
        </h2>

        {/* Error Message Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="you@example.com"
              required // HTML5 required attribute for basic browser validation
            />
          </div>

          {/* Password Input Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="********"
              required // HTML5 required attribute
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 w-full text-lg"
            >
              Sign In
            </button>
          </div>

          {/* Links for Forgot Password / Sign Up */}
          <div className="mt-6 text-center">
            <a
              href="#" // Replace with your actual forgot password route (e.g., /forgot-password)
              className="inline-block align-baseline font-semibold text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Forgot Password?
            </a>
            <p className="text-sm text-gray-600 mt-3">
              Don't have an account?{' '}
              <a href="#" // Replace with your actual sign-up route (e.g., /register)
                 className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}