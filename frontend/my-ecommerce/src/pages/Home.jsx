import { useState, useEffect } from 'react';
import api from '../API/api';
import HeaderImage from '../assets/mainbg.jpg';
import { useCart } from '../context/CartContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get('/products');
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen font-sans flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-slate-700">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen font-sans flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-slate-700 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen font-sans">
      {/* Creative Cover Section */}
      <div className="relative w-full h-72 md:h-96 flex flex-col items-center justify-center text-white mb-16 overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <img
          src={HeaderImage}
          alt="Shop Cover"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75 transition-transform duration-500 hover:scale-105" // Added hover effect
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent rounded-b-3xl" /> {/* Stronger gradient */}

        {/* Content with Enhanced Typography and Animation */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-2xl mb-4 animate-fade-in-down" // Stronger shadow, added animation
              style={{ textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}> {/* Custom text shadow for depth */}
            Discover the Latest Trends
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-medium drop-shadow-lg mb-8 animate-fade-in-up" // Stronger shadow, added animation
             style={{ textShadow: '0 3px 10px rgba(0,0,0,0.4)' }}>
            Shop quality fashion and accessories for every style
          </p>
          <a
            href="#products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:ring-4 hover:ring-blue-400 hover:ring-opacity-75 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 animate-bounce-in" // Enhanced button with bounce and ring
          >
            Shop Now
          </a>
        </div>

        {/* Subtle Wave/Divider at the bottom of the Hero (optional, requires SVG)
          For simplicity, I'm just adding a decorative border here.
          A true SVG wave would be more complex to embed directly without a dedicated CSS file or component.
        */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-blue-100 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200"></div> {/* Simple separator */}
      </div>

      {/* Product Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-8" id="products">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center tracking-tight border-b-4 border-blue-400 pb-4 inline-block mx-auto">
          Shop Our Collection
        </h2>
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">No products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300 flex flex-col items-center p-6 border border-slate-100 hover:border-blue-500 transform hover:-translate-y-2 relative overflow-hidden cursor-pointer" // Added group, stronger shadow, transform, cursor
              >
                {/* Product Image with Hover Effect */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded-xl mb-4 border border-slate-200 group-hover:scale-105 transition-transform duration-300" // Image scales on group hover
                />
                {/* Optional: "New Arrival" Badge */}
                {product.isNew && ( // Assuming products can have an 'isNew' property
                  <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md rotate-6 transform-gpu opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    New!
                  </span>
                )}

                {/* Product Info */}
                <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">{product.name}</h2>
                <p className="text-slate-600 text-sm mb-3 text-center line-clamp-2">{product.description}</p> {/* line-clamp for consistent height */}

                {/* Price */}
                <span className="font-extrabold text-blue-700 text-2xl mb-4 mt-auto">
                  {product.price} {product.currency || 'MAD'}
                </span>

                {/* Add to Cart Button */}
                <button
                  className="creative-cart-btn w-full"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Creative Section: Why Choose Us */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 mt-20 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-xl">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white/10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              <div className="text-5xl mb-4 text-yellow-300">
                <i className="fas fa-shipping-fast"></i> {/* Font Awesome icon */}
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast Shipping</h3>
              <p className="text-blue-100 text-lg">
                Get your favorite items delivered right to your doorstep in record time.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white/10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              <div className="text-5xl mb-4 text-red-300">
                <i className="fas fa-shield-alt"></i> {/* Font Awesome icon */}
              </div>
              <h3 className="text-2xl font-bold mb-3">Secure Payments</h3>
              <p className="text-blue-100 text-lg">
                Shop with confidence knowing your transactions are safe and secure.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white/10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              <div className="text-5xl mb-4 text-green-300">
                <i className="fas fa-headset"></i> {/* Font Awesome icon */}
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
              <p className="text-blue-100 text-lg">
                Our dedicated support team is always here to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You might want a Footer component here */}
    </div>
  );
}