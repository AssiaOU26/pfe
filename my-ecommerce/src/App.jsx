// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if your Navbar is in a different folder
import HomePage from './pages/Home'; // The Home page you previously discussed
import ShopPage from './pages/shop'; // You'll create this or use existing one
import AboutPage from './pages/AboutPage'; // We'll create this next!
import ContactPage from './pages/ContactPage'; // The Contact page we just designed
// App.js (Example)
import React from 'react';
import LoginPage from './pages/login'; // Adjust path as needed


// import LoginPage from './pages/LoginPage'; // You'll create this

function App() {
  return (
    <Router>
      <Navbar /> {/* Your updated Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add more <Route> components for any other pages you have */}
      </Routes>
    </Router>
  );
}

export default App;
