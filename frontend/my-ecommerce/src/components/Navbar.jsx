import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo1.png';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [badgeBounce, setBadgeBounce] = useState(false);
  const prevCartCount = useRef(cart.length);

  useEffect(() => {
    if (cart.length > prevCartCount.current) {
      setBadgeBounce(true);
      setTimeout(() => setBadgeBounce(false), 500);
    }
    prevCartCount.current = cart.length;
  }, [cart.length]);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Shop', path: '/shop', icon: '🛍️' }, // We'll add a badge for this
    { name: 'About', path: '/about', icon: '✨' },
    { name: 'Contact', path: '/contact', icon: '💌' },
  ];

  const authLinks = user ? [
    { name: 'Logout', icon: '👤', action: handleLogout },
  ] : [
    { name: 'Login', path: '/login', icon: '👤' },
    { name: 'Register', path: '/register', icon: '🆕' },
  ];

  return (
    <>
      {/* Background blur effect */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-r from-pink-50/80 via-purple-50/80 to-blue-50/80 backdrop-blur-md z-40"></div>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-pink-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="group relative">
                <div className="relative">
                  {/* Floating animation container */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
                  
                  {/* Logo container */}
                  <div className="relative bg-white rounded-full p-2 shadow-xl border-2 border-pink-200/50 hover:border-pink-300 transition-all duration-300 hover:scale-110">
                    <img
                      src={Logo}
                      alt="Boutique Logo"
                      className="h-12 w-12 object-contain rounded-full"
                    />
                  </div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
                </div>
              </Link>
              
              {/* Brand name */}
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Boutique
                </h1>
                <p className="text-xs text-gray-500 font-medium tracking-wider">ELEGANCE & STYLE</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[...navLinks, ...authLinks].map((link,index) => (
                <div key={link.name} className="relative group">
                  {/* Cart badge for Shop link */}
                  {link.name === 'Shop' && cart.length > 0 && (
                    <span
                      className={`absolute -top-2 -right-4 text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-2 py-0.5 shadow-lg border-2 border-white transition-all duration-300 ${badgeBounce ? 'animate-bounce' : ''}`}
                      style={{ minWidth: 22, textAlign: 'center', zIndex: 10 }}
                    >
                      {cart.length}
                    </span>
                  )}
                  {link.path ? (
                  <Link
                    to={link.path}
                    className={`
                      relative px-6 py-3 rounded-full font-medium transition-all duration-300
                      hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20
                      hover:shadow-lg hover:scale-105
                      ${location.pathname === link.path 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-700 hover:text-gray-900'
                      }
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Icon */}
                    <span className="mr-2 text-lg">{link.icon}</span>
                    {link.name}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className={`
                        relative px-6 py-3 rounded-full font-medium transition-all duration-300
                        hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20
                        hover:shadow-lg hover:scale-105
                        text-gray-700 hover:text-gray-900'
                      `}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Icon */}
                      <span className="mr-2 text-lg">{link.icon}</span>
                      {link.name}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  )}
                  
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-pink-200/50 px-4 py-6 space-y-4">
            {[...navLinks, ...authLinks].map((link, index) => (
              link.path ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300
                  hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20
                  ${location.pathname === link.path 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-gray-900'
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => { link.action(); setIsMobileMenuOpen(false); }}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300
                    hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20
                    text-gray-700 hover:text-gray-900'
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.name}</span>
                </button>
              )
            ))}
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
