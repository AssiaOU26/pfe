import React from 'react';
// Import the images for high heels, bags, and sandals
import HeelsImage from '../assets/blackheels.jpg'; // Make sure this path is correct for YOUR heels image
import BagsImage from '../assets/blackbags.jpg';   // Make sure this path is correct for YOUR bags image
import SandalsImage from '../assets/sandalBlack.jpg'; // Make sure this path is correct for YOUR sandals image

export default function AboutPage() {
  return (
    <div className="about-gradient-bg min-h-screen font-sans">

      {/* Hero Section - Pastel Gradient with SVG Wave */}
      <section className="relative h-[220px] md:h-[320px] flex items-center justify-center text-white overflow-hidden rounded-b-3xl shadow-lg pastel-hero-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-yellow-200 to-purple-200 opacity-90"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 drop-shadow-xl text-gradient-hero">
            Our Brand Vision
          </h1>
          <p className="text-lg md:text-xl text-pink-700 drop-shadow-md font-semibold">
            Innovation and excellence woven into every design.
          </p>
        </div>
        {/* SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{height: '60px'}}>
          <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,30 C150,80 350,0 500,30 L500,60 L0,60 Z" fill="#fff" fillOpacity="0.7" />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center md:text-left">
        <div className="bg-white/80 rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border-l-8 border-pink-200 story-card">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 relative inline-block">
            <span className="relative inline-block pb-4">
              Our Story
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to <b>Sweety Shose</b>, a place where delightful style meets heartfelt craftsmanship. Born from a sprinkle of dreams and a whole lot of passion for empowering individuals, we've carefully gathered a collection that truly celebrates elegance, cozy comfort, and your unique sparkle. Every bag, every comfy sandal, and every graceful high heel in our selection is more than just an accessory—it's a little piece of joy, a trusted companion, and a promise of delightful quality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From the first sweet sketch to the final, loving stitch, we pour our hearts into finding the loveliest materials and collaborating with talented artisans. Our journey is a happy adventure of discovery, always seeking charming designs and kind practices to bring you timeless treasures that beautifully resonate with your own wonderful journey. Thank you for being a part of our whimsical story!
          </p>
        </div>
      </section>

      {/* Product Focus Sections - Bags, Sandals, and High Heels with creative cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 relative">
          <span className="relative inline-block pb-3">
            Our Little Creations
            <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-gradient-to-r from-pink-300 to-yellow-300 transform -translate-x-1/2 rounded-full"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bags Section */}
          <div className="bg-white/90 rounded-3xl shadow-xl flex flex-col md:flex-row items-center overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-8 border-pink-200 product-card">
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-3xl font-bold text-pink-700 mb-4">The Art of the Bag</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                More than just a carry-all, our bags are a blend of functional design and exquisite artistry. We meticulously select premium leathers and durable fabrics, ensuring each stitch contributes to a piece that is both beautiful and built to last. From elegant clutches to versatile totes, discover a bag that complements every facet of your life.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Premium materials & hardware</li>
                <li>Thoughtful compartments</li>
                <li>Timeless designs</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={BagsImage}
                alt="Our Cute Bags"
                className="w-full h-80 object-cover object-center md:rounded-l-none md:rounded-r-3xl border-4 border-pink-100 shadow-lg"
              />
            </div>
          </div>

          {/* Sandals Section */}
          <div className="bg-white/90 rounded-3xl shadow-xl flex flex-col md:flex-row-reverse items-center overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-8 border-yellow-200 product-card">
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-3xl font-bold text-yellow-600 mb-4">Stride in Comfort & Style</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Embrace the warmth with our collection of sandals designed for ultimate comfort without compromising on style. Whether you seek laid-back slides for a beach day or chic gladiators for an evening out, our sandals feature cushioned soles and secure straps, ensuring every step is a pleasure.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ergonomic designs</li>
                <li>Breathable materials</li>
                <li>Vibrant seasonal trends</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={SandalsImage}
                alt="Our Cozy Sandals"
                className="w-full h-80 object-cover object-center md:rounded-r-none md:rounded-l-3xl border-4 border-yellow-100 shadow-lg"
              />
            </div>
          </div>

          {/* High Heels Section */}
          <div className="bg-white/90 rounded-3xl shadow-xl flex flex-col md:flex-row items-center overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-8 border-purple-200 product-card md:col-span-2 mx-auto max-w-4xl">
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-3xl font-bold text-purple-700 mb-4">Elevate Your Presence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Step into confidence with our exquisite range of high heels. Each pair is sculpted to perfection, designed not just to add height but to enhance your posture and empower your stride. From classic pumps to daring stilettos, discover the perfect pair to complete your powerful ensemble.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Precision engineering</li>
                <li>Luxurious finishes</li>
                <li>Designs for every occasion</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={HeelsImage}
                alt="Our High Heels"
                className="w-full h-80 object-cover object-center md:rounded-l-none md:rounded-r-3xl border-4 border-purple-100 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team/Values Section - Pastel Gradient */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center text-white overflow-hidden shadow-lg pastel-team-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 opacity-90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-xl text-pink-600">
            Our Dedicated Team
          </h2>
          <div className="mx-auto flex items-center justify-center w-60 h-15 rounded-full bg-white/40 backdrop-blur-sm mb-6 shadow-lg border-3 border-pink-200 text-3xl font-bold text-pink-700">
            TEAM JOY
          </div>
          <p className="text-base md:text-lg text-pink-700 mb-6">
            Committed to excellence, innovation, and crafting designs that inspire.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-300 to-yellow-300 hover:from-yellow-300 hover:to-pink-300 text-pink-900 font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:ring-opacity-75"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </div>
  );
}