/* eslint-disable no-unused-vars */
import React from "react";
import bannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 py-16 px-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        {/* Banner Image */}
        <div className="md:w-1/2 w-full flex items-center md:justify-end">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Banner Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">
            Discover New Releases This Week!
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            Update your reading list with the latest and greatest literary
            works. From thrilling adventures to heartwarming memoirs, explore
            something new and captivating this week.
          </p>
          <Link
          to={"/all-books"}
          >
       
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all">
            
            Discovert all books
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
