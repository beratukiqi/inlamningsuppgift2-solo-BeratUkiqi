import "./App.css";
import FinishedRound from "./pages/FinishedRound";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OngoingRound from "./pages/OngoingRound";
import Overview from "./pages/Overview";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/finished-round" element={<FinishedRound />} />
                <Route path="/ongoing-round" element={<OngoingRound />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
