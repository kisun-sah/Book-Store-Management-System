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
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <FiBook className="text-3xl mr-2 text-yellow-500" />
          <span className="text-2xl font-bold text-yellow-500">BookStore</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white text-black rounded-full px-4 py-2 w-1/3 hover:shadow-md transition-all">
          <input
            type="text"
            placeholder="Search books..."
            className="flex-grow px-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-5 py-1 rounded-full hover:bg-blue-700 transition-all">
            Search
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>


       {/* Navigation Links */}
<ul className="hidden md:flex space-x-6 text-lg font-medium">
  {["Home", "All Books", "About", "Profile"].map((item, index) => (
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


        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/signup"
            className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/cart"
            className="bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
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
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
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
                className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 block text-center transition-all"
                onClick={toggleMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 block text-center transition-all"
                onClick={toggleMobileMenu}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-600 block text-center transition-all"
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
