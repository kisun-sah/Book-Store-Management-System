/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Loader from '../components/Loader/Loader';
import BookCard from '../components/BookCard/BookCard';

const Allbooks = () => {
  const [Data, setData] = useState(null); // State to store books data

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'http://localhost:1000/api/v1/get-all-book'
        );
        console.log(response.data.data); // Debugging purposes
        setData(response.data.data); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching recently added books:', error);
      }
    };

    fetchBooks(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="mt-20 px-4 ">
      <h4 className="text-3xl text-yellow-400"> All Books</h4>
      {!Data ? (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      ) : (
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Data.map((item, i) => (
            <div key={i}>
              <BookCard data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Allbooks;
