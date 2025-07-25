import React, { useState } from 'react';
import Logo from '../assets/logo1.png'; // Use your logo or a creative icon
import { Link } from "react-router-dom";

<p>
  Already have an account? <Link to="/login">Login</Link>
</p>
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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 overflow-hidden">
      {/* Animated SVG Waves Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-60" viewBox="0 0 1440 320"><path fill="#a5b4fc" fillOpacity="0.5" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <svg className="absolute top-0 right-0 w-full h-32 opacity-40" viewBox="0 0 1440 320"><path fill="#f472b6" fillOpacity="0.4" d="M0,32L48,58.7C96,85,192,139,288,170.7C384,203,480,213,576,197.3C672,181,768,139,864,128C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-md px-8 py-12 flex flex-col items-center border border-white/30">
        {/* Logo/Icon */}
        <div className="mb-6 animate-fade-in-down">
          <img src={Logo} alt="Finetude Logo" className="h-16 w-16 object-contain rounded-full shadow-lg border-4 border-pink-200 bg-white/80" />
        </div>
        {/* Login Form Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 gradient-text-animated drop-shadow-lg animate-fade-in-up">Welcome Back!</h2>
        {/* Error Message Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm animate-shake" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="w-full animate-fade-in-up">
          {/* Email Input Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-400 transition duration-200 bg-white/80 placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>
          {/* Password Input Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-400 transition duration-200 bg-white/80 placeholder-gray-400"
              placeholder="********"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold shadow-lg hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 text-lg tracking-wide animate-bounce-in"
            >
              Sign In
            </button>
          </div>
          {/* Links for Forgot Password / Sign Up */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-block align-baseline font-semibold text-sm text-pink-600 hover:text-purple-700 transition-colors duration-200"
            >
              Forgot Password?
            </a>
            <p className="text-sm text-gray-600 mt-3">
              Don't have an account?{' '}
              <a href="#" className="font-bold text-purple-600 hover:text-pink-600 transition-colors duration-200">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

