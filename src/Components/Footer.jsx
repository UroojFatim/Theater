// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 py-8">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">
            About Theatre Show
          </h3>
          <p className="text-sm leading-relaxed">
            Theatre-show.com brings you the latest information on theatre events around the world, including shows in multiple languages, artist profiles, and much more.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-blue-400 transition duration-300">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-300 transition duration-300">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-400 transition duration-300">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Urdu Theatre Shows</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Hindi Theatre Shows</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">English Theatre Shows</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Artist Gallery</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Upcoming Shows</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Auditoriums</a>
            </li>
          </ul>
        </div>

        {/* Additional Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">
            Additional Information
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Theatre Speak (Reviews)</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Magazines</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Awards</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Feedback</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Contact Us</a>
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
              <a href="#" className="hover:text-gray-300 transition duration-300">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-orange-500 pb-1">
            Contact Us
          </h3>
          <p className="text-sm">
            For queries or feedback:
          </p>
          <p className="text-sm mt-2">
            Email: <a href="mailto:support@theatre-show.com" className="hover:text-gray-300 transition duration-300">support@theatre-show.com</a>
          </p>
          <p className="text-sm mt-2">
            Phone: <a href="tel:+1234567890" className="hover:text-gray-300 transition duration-300">+123-456-7890</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Theatre Show. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
