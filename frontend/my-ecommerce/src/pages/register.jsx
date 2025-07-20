import React, { useState } from 'react';
import './register.css';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.name.trim() || !form.email.trim() || !form.password.trim() || !form.confirmPassword.trim()) {
      setError('All fields are required.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setSuccess('Registration successful! (Simulated)');
  };

  return (
    <div className="register-container creative-bg">
      <form className="register-form creative-form" onSubmit={handleSubmit}>
        <h2 className="creative-title">Create Account</h2>
        <div className="creative-input-frame">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="creative-input"
          />
        </div>
        <div className="creative-input-frame">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="creative-input"
          />
        </div>
        <div className="creative-input-frame">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="creative-input"
          />
        </div>
        <div className="creative-input-frame">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="creative-input"
          />
        </div>
        {error && <div className="creative-error">{error}</div>}
        {success && <div className="creative-success">{success}</div>}
        <button type="submit" className="creative-btn">Register</button>
      </form>
    </div>
  );
}
