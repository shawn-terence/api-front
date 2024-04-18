import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Components/Navbar';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    fetch(`https://flickfusion-backend-dyeq.onrender.com/movies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie');
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div >
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
