import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Components/Navbar';
import { BASE_URL } from '../App';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isBought, setIsBought] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movies/${id}`);
      setMovie(response.data);
    } catch (error) {
      setError('Failed to fetch movie');
    }
  };

  const handleBuyMovie = () => {
    setIsBought(true);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="custom-font bg-black text-white font-jolly-lodger flex">
        {movie ? (
          <div className={`flex ${isMobile ? 'flex-col items-center' : 'py-52'}`}>
            <img src={movie.poster} alt={movie.title} style={{ width: '300px', marginRight: '20px' }} />
            <div className={`${isMobile ? 'text-center' : 'text-5xl'} py-8`}>
              <h2 className='py-7'>{movie.title}</h2>
              <p className='py-7'>Rating: {movie.rating}</p>
              <h3 className='text-red-500 py-7'>Description</h3>
              <p className='py-7'>{movie.description}</p>
              {!isBought && (
                <button onClick={handleBuyMovie} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Buy Movie
                </button>
              )}
              {isBought && <p className="text-green-500 py-4">Movie successfully bought!</p>}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
