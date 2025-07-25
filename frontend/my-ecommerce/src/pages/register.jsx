import React, { useState } from 'react';
import './register.css';
import logo1 from '../assets/logo1.png';
import api from '../API/api';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.username.trim() || !form.email.trim() || !form.password.trim() || !form.confirmPassword.trim()) {
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
    
    try {
        await api.post('/register/', {
            username: form.username,
            email: form.email,
            password: form.password
        });
        setSuccess('Registration successful! You can now log in.');
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
            setError(err.response.data.error);
        } else {
            setError('An unexpected error occurred. Please try again.');
        }
    }
  };

  return (
    <div className="register-container creative-bg">
      <form className="register-form creative-form fade-in" onSubmit={handleSubmit}>
        <div className="avatar-container">
          <img src={logo1} alt="Avatar" className="avatar-img" />
        </div>
        <h2 className="creative-title">Create Account</h2>
        <div className="motivational-quote">"Start your style journey with us!"</div>
        <div className="creative-input-frame">
          <span className="input-icon">{/* User SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#a5b4fc" strokeWidth="2" d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.657-10 5v3h20v-3c0-3.343-6.686-5-10-5z"/></svg>
          </span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="creative-input"
          />
        </div>
        <div className="creative-input-frame">
          <span className="input-icon">{/* Email SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#a5b4fc" strokeWidth="2" d="M4 4h16v16H4V4zm0 0l8 8 8-8"/></svg>
          </span>
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
          <span className="input-icon">{/* Lock SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="8" rx="2" stroke="#a5b4fc" strokeWidth="2"/><path stroke="#a5b4fc" strokeWidth="2" d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
          </span>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="creative-input"
          />
          <span className="toggle-password" onClick={() => setShowPassword(v => !v)}>
            {showPassword ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#f472b6" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3" stroke="#f472b6" strokeWidth="2"/></svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#f472b6" strokeWidth="2" d="M17.94 17.94A10.97 10.97 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-5.94M1 1l22 22"/></svg>
            )}
          </span>
        </div>
        <div className="creative-input-frame">
          <span className="input-icon">{/* Lock SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="8" rx="2" stroke="#a5b4fc" strokeWidth="2"/><path stroke="#a5b4fc" strokeWidth="2" d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
          </span>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="creative-input"
          />
          <span className="toggle-password" onClick={() => setShowConfirmPassword(v => !v)}>
            {showConfirmPassword ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#f472b6" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3" stroke="#f472b6" strokeWidth="2"/></svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#f472b6" strokeWidth="2" d="M17.94 17.94A10.97 10.97 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-5.94M1 1l22 22"/></svg>
            )}
          </span>
        </div>
        {error && <div className="creative-error">{error}</div>}
        {success && <div className="creative-success">{success}</div>}
        <button type="submit" className="creative-btn">Register</button>
      </form>
    </div>
  );
}
