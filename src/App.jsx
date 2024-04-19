import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import AuthenticationPage from "./Pages/AuthenticationPage";
import BookingPage from "./Pages/BookingPage";
import MovieDetails from "./Pages/MovieDetails";
import BuyMovie from "./Pages/BuyMovie";
import OnTheatre from "./Pages/OnTheatre";

export const BASE_URL = 'https://flickfusion-backend-dyeq.onrender.com/';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} exact />
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route path="/booking/:ontheatreId/seats" element={<BookingPage />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
                <Route path="/buy-movie" element={<BuyMovie />} />
                <Route path="/ontheatre" element={<OnTheatre />} />  {/* Add this line for OnTheatre page */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
