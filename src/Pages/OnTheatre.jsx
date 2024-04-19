import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../App';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useMediaQuery } from 'react-responsive';

const OnTheatre = () => {
  const [ontheatres, setOntheatres] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetchOntheatres();
  }, []);

  const fetchOntheatres = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/ontheatre`);
      setOntheatres(response.data);
    } catch (error) {
      console.error('Error fetching ontheatres:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="custom-font bg-black text-white font-jolly-lodger">
      <div>
        <div className={`text text-center text-red-500 ${isMobile ? 'py-10 text-5xl' : 'py-20 text-9xl'}`}>
          NOW SHOWING
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ontheatres.map(ontheatre => (
              <div key={ontheatre.id} className="bg-black p-4">
                <Link to={`/ontheatre-details/${ontheatre.id}`}>
                  <img
                    src={ontheatre.poster_theater}
                    alt={ontheatre.title}
                    className={`w-full ${isMobile ? 'h-80' : 'h-100'} object-cover border-2 border-transparent transition-all duration-300 hover:border-red-500 rounded-md`}
                  />
                </Link>
                <div className="flex flex-col items-center mt-4">
                  <p className="text-white text-3xl">Rating: {ontheatre.rating_theater}</p>
                  <h3 className={`text-white ${isMobile ? 'text-3xl' : 'text-5xl'} mt-2`}>{ontheatre.title}</h3>
                  <div className="flex mt-4">
                    <Link to={`/booking/${ontheatre.id}/seats`}>
                      <button className={`bg-red-500 text-white ${isMobile ? 'text-2xl px-3 py-1' : 'text-3xl px-4 py-2'} rounded-lg mr-4`}>Book Seat</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default OnTheatre;
