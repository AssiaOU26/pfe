import React from 'react';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="shop-page min-h-screen px-4 py-10 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
        My Cart
      </h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-400 text-xl font-medium mt-20">
          Your cart is empty. Go to Home and add some items!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cart.map((product) => (
            <div key={product.id} className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col items-center border-2 border-pink-100 hover:border-purple-400 transition-all duration-300">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-36 h-36 object-cover rounded-xl mb-4 border border-purple-100 shadow-lg"
                />
              )}
              <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3 text-center line-clamp-2">{product.description}</p>
              <span className="font-extrabold text-pink-600 text-2xl mb-4 mt-auto">
                {product.price} {product.currency}
              </span>
              <button
                className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}