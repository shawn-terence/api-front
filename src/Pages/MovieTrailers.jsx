import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { BASE_URL } from "../App";

const MovieTrailers = () => {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movies/${id}`);
      setTrailers([response.data.trailer_url]);
    } catch (error) {
      setError("Failed to fetch movie");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      {trailers.length > 0 && (
        <div>
          {trailers.map((trailerUrl, index) => (
            <video key={index} width="560" height="315" controls>
              <source src={trailerUrl} type="video/mp4" />
            </video>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieTrailers;
