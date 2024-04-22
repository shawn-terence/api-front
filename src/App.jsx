import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import AuthenticationPage from "./Pages/AuthenticationPage";
import BookingPage from "./Pages/BookingPage";
import MovieDetails from "./Pages/MovieDetails";
import BuyMovie from "./Pages/BuyMovie";
import OnTheatre from "./Pages/OnTheatre";
import TheatreDetails from "./Pages/TheatreDetails";
import MovieTrailers from "./Pages/MovieTrailers";
import TheatreTrailers from "./Pages/TheatreTrailers";

export const BASE_URL = 'https://api-back-6lxa.onrender.com';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} exact />
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route path="/booking/:ontheatreId/seats" element={<BookingPage />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
                <Route path="/buy-movie" element={<BuyMovie />} />
                <Route path="/ontheatre" element={<OnTheatre />} /> 
                <Route path="/ontheatre-details/:id" element={<TheatreDetails />} />
                <Route path="/movie-trailers/:id" element={<MovieTrailers />} /> 
                <Route path="/theatre-trailers/:id" element={<TheatreTrailers />} /> 

            </Routes>
        </BrowserRouter>
    );
};

export default App;
