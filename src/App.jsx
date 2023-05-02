import "./styles/main.scss";
import FinishedRound from "./pages/FinishedRound";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OngoingRound from "./pages/OngoingRound";
import Overview from "./pages/Overview";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Players from "./pages/Players";
import Rules from "./pages/Rules";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/ongoing-round" element={<OngoingRound />} />
                <Route path="/finished-round" element={<FinishedRound />} />
                <Route path="/players" element={<Players />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
