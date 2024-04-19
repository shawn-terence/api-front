import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../App';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [ontheatres, setOntheatres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchOntheatres();
    fetchMovies();
  }, []);

  const fetchOntheatres = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/ontheatre`);
      setOntheatres(response.data);
    } catch (error) {
      console.error('Error fetching ontheatres:', error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movies`);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="custom-font bg-black text-white font-jolly-lodger">
      <Navbar />
      <div>
        {/* Title section */}
        <section>
          <div className="text text-center py-20 text-9xl">
            FLICK FUSION
          </div>
        </section>
        {/* Ontheatre list section */}
        <section>
          <h1>Movies in theatre</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ontheatres.map(ontheatre => (
              <div key={ontheatre.id} className="bg-black p-4">
                <Link to={`/booking/${ontheatre.id}/seats`}>
                  <img
                    src={ontheatre.poster_theater}
                    alt={ontheatre.title}
                    className="w-full h-120 object-cover border-2 border-transparent transition-all duration-300 hover:border-red-500 rounded-md"
                  />
                </Link>
                <div className="flex flex-col items-center mt-4">
                  <p className="text-white text-3xl">Rating: {ontheatre.rating_theater}</p>
                  <h3 className="text-white text-xl mt-2">{ontheatre.title}</h3>
                  <div className="flex mt-4">
                    <Link to={`/booking/${ontheatre.id}/seats`}>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">Book Seat</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Movies list section */}
        <section>
          <h1>Movies to Buy</h1>
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
                    <Link to={`/movie-details/${movie.id}`}>
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

export default HomePage;
