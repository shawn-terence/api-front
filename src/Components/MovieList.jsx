import '../App.css';
import { useMediaQuery } from 'react-responsive';

const MovieList = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="custom-font bg-black text-white font-jolly-lodger">
        <div>
          {/* Title section */}
          <section>
            <div className={`text text-center ${isMobile ? 'py-10 text-7xl' : 'text-20xl'}`}>
              FLICK FUSION
            </div>
            {/* Movie list section */}
          </section>
          <section>

          </section>
        </div>
      </div>
    </>
  );
};

export default MovieList;
