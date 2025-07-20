import React, { useState } from 'react'; // Import useState for form handling
// If you are using a global CSS file, make sure it's imported at a higher level,
// e.g., in App.js or index.js. If this component needs specific styles,
// ensure '../index.css' contains them or create a dedicated CSS module.

// For Font Awesome icons, you'd typically install a React library like react-icons
// For example: npm install react-icons
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    // You would typically send this data to a backend API here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Optionally clear the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12 relative">
          <span className="relative inline-block pb-3">
            Get in Touch
            <span className="absolute bottom-0 left-1/2 w-28 h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform -translate-x-1/2 rounded-full"></span>
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl p-10 lg:p-16">

          {/* Contact Form Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name} // Controlled component
                  onChange={handleChange} // Handle input change
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-200 shadow-sm text-lg"
                  required // Make field required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email} // Controlled component
                  onChange={handleChange} // Handle input change
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-200 shadow-sm text-lg"
                  required // Make field required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-lg font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Inquiry about an order"
                  value={formData.subject} // Controlled component
                  onChange={handleChange} // Handle input change
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-200 shadow-sm text-lg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help you..."
                  value={formData.message} // Controlled component
                  onChange={handleChange} // Handle input change
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-200 shadow-sm resize-y text-lg"
                  required // Make field required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info and Map Section */}
          <div className="flex flex-col justify-between p-8 bg-blue-50 rounded-2xl shadow-inner border border-blue-100">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Contact Information</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start">
                  {/* Using Font Awesome (if linked in public/index.html) or React Icons */}
                  <i className="fas fa-map-marker-alt text-blue-600 text-2xl mr-4 mt-1"></i>
                  {/* Or using React Icons: <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4 mt-1" /> */}
                  <p>123 Fashion Ave, Style City, FS 90210</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope text-blue-600 text-2xl mr-4 mt-1"></i>
                  {/* Or using React Icons: <FaEnvelope className="text-blue-600 text-2xl mr-4 mt-1" /> */}
                  <p>support@yourcompany.com</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone-alt text-blue-600 text-2xl mr-4 mt-1"></i>
                  {/* Or using React Icons: <FaPhoneAlt className="text-blue-600 text-2xl mr-4 mt-1" /> */}
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock text-blue-600 text-2xl mr-4 mt-1"></i>
                  {/* Or using React Icons: <FaClock className="text-blue-600 text-2xl mr-4 mt-1" /> */}
                  <p>Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                // IMPORTANT: Replace this with an actual Google Maps embed URL for your location.
                // The provided URL 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.220803510006!2d144.9625298153163!3d-37.81720887975191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b568391d8b%3A0x6b53a060b1e1d0e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678234567890!5m2!1sen!2sau' is invalid and won't display a map.
                // Go to Google Maps, find your location, click 'Share', then 'Embed a map', and copy the src.
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-6.8361!3d34.020882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b1e42b23a7e3%3A0x1c2f8f7b7f7b7f7b!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="350"
                style={{ border: 0 }} // React style attribute for inline styles
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location on Map" // Good for accessibility
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}