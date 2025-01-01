import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Logo and Tagline */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-2">BookStorePro</h1>
            <p className="text-sm">Your one-stop solution for managing and exploring books effortlessly.</p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/catalog" className="hover:underline">Book Catalog</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Section 3: Contact and Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">Email: support@bookstorepro.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BookStorePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
