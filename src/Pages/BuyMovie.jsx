import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../App';
import { Link } from 'react-router-dom';

const BuyMovie = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/movies`);
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="custom-font bg-black text-white font-jolly-lodger">
            <div>
                {/* Title section */}
                <section>
                    <div className={`text text-center py-20 text-9xl`}>
                        FLICK FUSION
                    </div>
                </section>
                {/* Movie list section */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {movies.map(movie => (
                            <div key={movie.id} className="bg-black p-4">
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-120 object-cover border-2 border-transparent transition-all duration-300 hover:border-red-500 rounded-md"
                                />
                                <div className="flex flex-col items-center mt-4">
                                    <p className="text-white text-3xl">Rating: {movie.rating}</p>
                                    <h3 className="text-white text-xl mt-2">{movie.title}</h3>
                                    <Link to={`/movie-details/${movie.id}`} className="flex mt-4">
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">Buy</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BuyMovie;
