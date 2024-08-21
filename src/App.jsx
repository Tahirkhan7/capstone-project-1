import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import CarouselPage from "./pages/CarouselPage";
import DashboardPage from "./pages/DashboardPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/genres" element={<GenrePage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
