import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Components/Navbar';

const BASE_URL = 'https://flickfusion-backend-dyeq.onrender.com';

const TheatreDetails = () => {
  const { id } = useParams();
  const [ontheatre, setOntheatre] = useState(null);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const fetchOntheatre = async () => {
      try {
        const response = await fetch(`${BASE_URL}/ontheatre/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch ontheatre details');
        }
        const ontheatreData = await response.json();
        setOntheatre(ontheatreData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOntheatre();

  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="custom-font bg-black text-white font-jolly-lodger flex">
        {ontheatre ? (
          <div className={`flex ${isMobile ? "flex-col items-center" : "py-4"}`}>
            <img
              src={ontheatre.poster_theater}
              alt={ontheatre.title}
              className={`${isMobile ? "w-full" : "w-100 h-100"} lg:w-1/2`}
              style={{ paddingLeft: "50px" }}
            />
            <div className={`${isMobile ? "text-center" : "text-5xl"} py-8 ml-5`}>
              <h2 className="py-5 text-red-500">{ontheatre.title}</h2>
              <p className="py-7">Rating: {ontheatre.rating_theater}</p>
              <h3 className="text-red-500 text-4xl">Description</h3>
              <p className="pb-7 text-5xl">{ontheatre.description}</p>
              <Link to={`/booking/${ontheatre.id}/seats`}>
                <button className={`bg-red-500 text-3xl text-white px-4 py-2 rounded-lg ${isMobile ? 'mb-4' : ''}`}>Book Seat</button>
              </Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                <Link to="/" className="text-black-500">Back to Homepage</Link>
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default TheatreDetails;
