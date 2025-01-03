import { useState } from "react";
import { FiBook } from "react-icons/fi"; // Book icon
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for menu

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <FiBook className="text-3xl mr-2 text-yellow-500" />
          <span className="text-2xl font-bold text-yellow-500">BookStore</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

      

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "All Books",  "Profile", ].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>



        <Link
            to="/login"
            className="px-5 py-2  transition-colors font-medium"
          >
            Log In
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2  bg-gray-600  transition-colors font-medium"
          >
            Sign Up
          </Link>
        
          <Link
            to="/cart"
            className="px-5 py-2  bg-gray-700 transition-colors font-medium"
          >
            Cart (0)
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 text-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-6">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-3xl focus:outline-none absolute top-6 right-6"
          >
            <AiOutlineClose />
          </button>
          <ul className="space-y-6 text-lg font-medium mt-16">
            {["Home", "All Books", "About", "Profile"].map((item, index) => (
              <li key={index}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-yellow-400 block text-center py-2"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/signup"
                className="bg-green-500 px-5 py-2 rounded-full hover:bg-green-600 block text-center transition-all"
                onClick={toggleMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-600 block text-center transition-all"
                onClick={toggleMobileMenu}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="bg-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-600 block text-center transition-all"
                onClick={toggleMobileMenu}
              >
                Cart (0)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
