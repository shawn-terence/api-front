import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import AuthenticationPage from "./Pages/AuthenticationPage"
import BookingPage from "./Pages/BookingPage"
import MoviesPage from "./Pages/MoviesPage"
import OnTheatre from "./Pages/OnTheatre"
export const BASE_URL = 'https://flickfusion-backend-dyeq.onrender.com/'

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}  exact/>
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/ontheatre" element={<OnTheatre />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
