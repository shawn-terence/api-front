import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Components/Navbar';

const BASE_URL = 'https://flickfusion-backend-dyeq.onrender.com';

const TheatreTrailers = () => {
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
      {ontheatre && (
        <div>
          <video width="560" height="315" controls>
            <source src={ontheatre.trailer_url_theater} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default TheatreTrailers;
