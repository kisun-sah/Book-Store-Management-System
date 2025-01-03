/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"; // Import the heart icon from react-icons

const BookCard = ({ data }) => {
  const {
    _id,
    title,
    author,
    price,
    saleprice,
    category,
    language,
    coverImage,
  } = data || {};

  return (
    <Link
      to={`/view-book-details/${data._id}`}
      className="block hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg p-3 shadow-md hover:shadow-xl transition-shadow duration-300 w-84 relative">
        {/* Cover Image */}
        <div className="bg-gray-700 rounded-t-lg overflow-hidden relative">
          <img
            src={coverImage || "https://via.placeholder.com/150"}
            alt={title || "Book Cover"}
            className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
          />
          {/* Favorite Icon */}
          <div className="absolute top-2 right-2 bg-gray-800/70 p-1 rounded-full hover:bg-gray-900/90 transition-colors">
            <AiOutlineHeart
              size={34}
              className="text-yellow-300 hover:text-yellow-400 cursor-pointer"
            />
          </div>

          <div className="absolute top-20 right-2 bg-gray-800/70 p-1 rounded-full hover:bg-gray-900/90 transition-colors">
          <AiOutlineShoppingCart
              size={34}
              className="text-yellow-300 hover:text-yellow-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-yellow-300 truncate">
            {title || "Unknown Title"}
          </h3>

          {/* Author */}
          <p className="text-xs text-gray-300 mt-1">
            Author:{" "}
            <span className="text-white">{author || "Unknown Author"}</span>
          </p>

          <div className="flex justify-between mt-2 text-xs text-gray-300">
            {/* Category */}
            <p>
              Category: <span className="text-white">{category || "N/A"}</span>
            </p>

            {/* Language */}
            <p>
              Language: <span className="text-white">{language || "N/A"}</span>
            </p>
          </div>

          {/* Prices */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-bold text-yellow-300">
              ₹{saleprice || "0.00"}
            </p>
            {saleprice && saleprice < price && (
              <p className="text-sm text-gray-400 line-through">
                ₹{price || "0.00"}
              </p>
            )}
          </div>

          {/* View Details Button */}
          <button className="mt-4 w-full bg-yellow-400 text-gray-900 font-medium py-1.5 px-4 rounded hover:bg-yellow-500 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
