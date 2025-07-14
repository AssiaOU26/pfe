import React from 'react';

// --- YOUR PRODUCT IMAGES ---
// Make sure these paths are correct relative to where your ShopPage.jsx is located.
// If ShopPage.jsx is in 'src/pages' and assets is in 'src/assets',
// the paths should be like '../assets/black1.jpg'.
// I'm using the paths you provided directly, assuming they are correct
// relative to the component's location.
import image1 from '../assets/black1.jpg';
import image2 from '../assets/beige.jpg';
import image3 from '../assets/beij.jpg';
import image4 from '../assets/skoutch.jpg';
import image5 from '../assets/sandalBlack.jpg';
import image6 from '../assets/Beij2.jpg';
import image7 from '../assets/sandal-sac-maron.jpg';
import image8 from '../assets/beigesac&sand.jpg';

// --- YOUR PRODUCT ARTICLES ---
export const products = [
  {
    id: 1,
    name: 'Pack Black ',
    price: 399.99,
    currency: 'MAD',
    image: image1,
    description: 'A comfortable Sandal and stylish bag.'
  },
  {
    id: 2,
    name: 'Pack Beige',
    price: 499.99,
    currency: 'MAD',
    image: image2,
    description: 'Trendy Sandal and cool bag for everyday wear.'
  },
  {
    id: 3,
    name: 'Sandals',
    price: 199.99,
    currency: 'MAD',
    image: image3,
    description: 'Comfortable Sandals for all occasions.'
  },
  {
    id: 4,
    name: 'Leather Sandals',
    price: 299.99,
    currency: 'MAD',
    image: image4,
    description: 'A stylish leather sandals for cool summer.'
  },
  {
    id: 5,
    name: 'Black Triple-Buckle Sandal',
    price: 249.99,
    currency: 'MAD',
    image: image5,
    description: 'Summer sandal.'
  },
  {
    id: 6,
    name: 'Beige Triple-Buckle Sandal ',
    price: 249.99,
    currency: 'MAD',
    image: image6,
    description: 'Protect Comfortable Sandal.'
  },
  {
    id: 7,
    name: 'Pack Light Maroon',
    price: 399.99,
    currency: 'MAD',
    image: image7,
    description: 'A durable backpack for everyday use.'
  },
  {
    id: 8,
    name: 'Pack Beige',
    price: 399.99,
    currency: 'MAD',
    image: image8,
    description: 'A comfortable Sandal and stylish bag.'
  },
  // You can add more products and images as needed, but make sure to import them at the top
];


export default function ShopPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Shop Header */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 relative pb-4">
          {/* <span className="relative inline-block">
            Our Collections
            <span className="absolute bottom-0 left-1/2 w-48 h-2 bg-yellow-500 transform -translate-x-1/2 rounded-full"></span>
          </span> */}
          <span className="relative inline-block pb-4 border-b-2 border-yellow-500"> {/* Border applied directly to the text container */}
  Our Collections For Summer
</span>
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our curated selection of high-quality bags, comfortable sandals, and elegant high heels.
        </p>

        {/* Filtering/Sorting Section (Placeholder) */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="mb-4 sm:mb-0">
            <label htmlFor="sort" className="mr-2 text-gray-700 font-semibold">Sort by:</label>
            <select id="sort" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
          <div>
            <label htmlFor="category" className="mr-2 text-gray-700 font-semibold">Category:</label>
            <select id="category" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">All Products</option>
              <option value="bags">Bags</option>
              <option value="sandals">Sandals</option>
              <option value="heels">High Heels</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                {/* Updated price display to include currency */}
                <p className="text-2xl font-bold text-blue-700 mb-4">{product.price} {product.currency}</p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                <button className="w-full bg-yellow-500 text-blue-900 font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}