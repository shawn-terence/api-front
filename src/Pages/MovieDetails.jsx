/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await fetch(`https://flickfusion-backend-dyeq.onrender.com/movies/${1}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie');
      }
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="custom-font bg-black text-white font-jolly-lodger flex">
      {movie ? (
        <div className={`flex ${isMobile ? 'flex-col items-center' : 'py-52'}`}>
          <img src={movie.poster} alt={movie.title} style={{ width: '300px', marginRight: '20px' }} />
          <div className={`${isMobile ? 'text-center' : 'text-5xl'} py-8`}>
            <h2 className='py-7'>{movie.title}</h2>
            <p className='py-7'>Rating: {movie.rating}</p>
            <h3 className='text-red-500 py-7'>Description</h3>
            <p className='py-7'>{movie.description}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
