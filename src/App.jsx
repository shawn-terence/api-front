import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import AuthenticationPage from "./Pages/AuthenticationPage";
import BookingPage from "./Pages/BookingPage";
import MovieDetails from "./Pages/MovieDetails";

export const BASE_URL = 'https://flickfusion-backend-dyeq.onrender.com/';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} exact />
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route path="/booking" element={<BookingPage />} />
                {/* Include movie ID parameter in the route path */}
                <Route path="/movie-details/:id" element={<MovieDetails />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;
