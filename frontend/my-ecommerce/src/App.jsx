// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if your Navbar is in a different folder
import HomePage from './pages/Home'; // The Home page you previously discussed
import ShopPage from './pages/Shop'; // Fix: match file name
import AboutPage from './pages/AboutPage'; // We'll create this next!
import ContactPage from './pages/ContactPage'; // The Contact page we just designed
// App.js (Example)
import React from 'react';
import LoginPage from './pages/login'; // Adjust path as needed
import RegisterPage from './pages/register';
import './App.css';
import { CartProvider, useCart } from './context/CartContext';
import Toast from './components/Toast';

// import LoginPage from './pages/LoginPage'; // You'll create this

function AppContent() {
  const { toast } = useCart();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </Router>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
