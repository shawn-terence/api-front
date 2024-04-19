import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { BASE_URL } from '../App';
import { FaChair } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { ontheatreId } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [availableSeats, setAvailableSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Get token from local storage
    const token = localStorage.getItem('token');

    const fetchAvailableSeats = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/ontheatre/${ontheatreId}/seats`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAvailableSeats(response.data.available_seats);
      } catch (error) {
        setErrorMessage('Error fetching available seats');
      }
    };

    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/ontheatre/${ontheatreId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvailableSeats();
    fetchMovieDetails();
  }, [ontheatreId]);

  const handleSeatClick = async (seat) => {
    // Get token from local storage
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(`${BASE_URL}/book_seat/${ontheatreId}/${seat}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.status === 200) {
        setSelectedSeat(seat);
        setErrorMessage(`Seat ${seat} booked successfully`);
        console.log("post working")
      }
    } catch (error) {
      setErrorMessage(`Error booking seat ${seat}`);
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Jolly Lodger' }}>
      <Navbar />
      <div className={isMobile ? 'flex flex-col items-center' : 'flex text-6xl'}>
        {movie && <img src={movie.poster_theater} alt={movie.title} style={{ width: '600px', height: '700px', padding: '40px' }} />}
        <h2 className='py-10'>NOW SHOWING !!!</h2>
        <p>{movie?.description}</p> {/* Display movie description */}
      </div>

      <p className='text-red-500 text-4xl px-7'>{errorMessage}</p>
      <div>
        <h3 className='text-center text-4xl p-4'>AVAILABLE SEATS</h3>
        <div className='flex justify-center flex-wrap'>
          {availableSeats.map(seat => (
            <button 
              key={seat} 
              onClick={() => handleSeatClick(seat)}
              disabled={selectedSeat === seat}
              className={`p-3 text-2xl m-2 hover:bg-red-500 hover:text-white flex items-center justify-center rounded-full ${isMobile ? 'text-base' : ''}`}
            >
              <FaChair /> {seat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
