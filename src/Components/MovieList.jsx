import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../App';
import { useMediaQuery } from 'react-responsive';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/movies`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="custom-font bg-black text-white font-jolly-lodger">
      <div>
        {/* Title section */}
        <section>
          <div className={`text text-center ${isMobile ? 'py-10 text-5xl' : 'py-20 text-9xl'}`}>
            FLICK FUSION
          </div>
        </section>
        {/* Movie list section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map(movie => (
              <div key={movie.id} className="bg-black p-4">
                <Link to={`/movie-details/${movie.id}`}>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-120 object-cover border-2 border-transparent transition-all duration-300 hover:border-red-500 rounded-md"
                  />
                </Link>
                <div className="flex flex-col items-center mt-4">
                  <p className="text-white text-3xl">Rating: {movie.rating}</p>
                  <h3 className="text-white text-xl mt-2">{movie.title}</h3>
                  <div className="flex mt-4">
                    <Link to={`/booking/${movie.id}`}>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">Book Seat</button>
                    </Link>
                    <Link to="/buynow">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieList;
