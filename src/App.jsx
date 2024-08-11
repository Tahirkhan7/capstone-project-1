import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/genres" element={<GenrePage />} />
          <Route path="/carousel" element={<RegisterPage />} />
          <Route path="/dashboard" element={<RegisterPage />} />
          <Route path="/movies" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
