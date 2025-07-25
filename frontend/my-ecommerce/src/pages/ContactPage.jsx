import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 h-80 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-xl">We'd love to hear from you!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-pink-300 transition-all duration-200 shadow-sm text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-pink-300 transition-all duration-200 shadow-sm text-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-lg font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Inquiry about an order"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-pink-300 transition-all duration-200 shadow-sm text-lg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-pink-300 transition-all duration-200 shadow-sm resize-y text-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-75"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Info</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-pink-500 text-2xl mr-4" />
                <p>123 Fashion Ave, Style City, FS 90210</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-pink-500 text-2xl mr-4" />
                <p>support@yourcompany.com</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-pink-500 text-2xl mr-4" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <FaClock className="text-pink-500 text-2xl mr-4" />
                <p>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
            <div className="mt-10 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-6.8361!3d34.020882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b1e42b23a7e3%3A0x1c2f8f7b7f7b7f7b!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location on Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
