/* eslint-disable no-unused-vars */
import Banner from "../components/Home/Banner"
import React from 'react';
import RecentlyAdded from "../components/Home/RecentlyAdded";

function Home() {
  return (
   
    <div className=' min-h-screen mt-5 p-6'>
       <Banner/>

       <RecentlyAdded/>



       
      {/* Header Section */}
      <header className='text-center py-8'>
        <h1 className='text-4xl font-bold text-white'>Welcome to BookStorePro</h1>
        <p className='text-lg text-white mt-2'>Your ultimate Book Store Management solution.</p>
      </header>

      {/* Featured Books Section */}
      <section className='mt-10'>
        <h2 className='text-2xl font-semibold text-white text-center mb-6'>Featured Books</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Book Card Example */}
          <div className='bg-white rounded shadow-md p-4'>
            <img
              src='https://via.placeholder.com/150'
              alt='Book Cover'
              className='w-full h-48 object-cover rounded mb-4'
            />
            <h3 className='text-xl font-bold mb-2'>Book Title</h3>
            <p className='text-gray-700 mb-4'>An exciting description of the book goes here.</p>
            <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>View Details</button>
          </div>
          {/* Add more cards dynamically */}
        </div>
      </section>

      {/* Benefits Section */}
      <section className='mt-16 bg-green-600 py-8 rounded-lg'>
        <h2 className='text-2xl font-semibold text-white text-center mb-6'>Why Choose BookStorePro?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-center'>
          <div className='text-white'>
            <h3 className='text-lg font-bold'>Easy Management</h3>
            <p>Manage books, authors, and genres effortlessly.</p>
          </div>
          <div className='text-white'>
            <h3 className='text-lg font-bold'>Detailed Analytics</h3>
            <p>Track book sales and inventory trends in real-time.</p>
          </div>
          <div className='text-white'>
            <h3 className='text-lg font-bold'>User-Friendly Design</h3>
            <p>Enjoy a clean and intuitive interface tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='mt-16 text-center'>
        <h2 className='text-2xl font-semibold text-white mb-4'>Start Managing Your Bookstore Today!</h2>
        <button className='bg-white text-green-500 py-3 px-6 rounded shadow-md hover:bg-gray-100'>Get Started</button>
      </section>
    </div>
  );
}

export default Home;