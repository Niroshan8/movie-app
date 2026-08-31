import "./css/App.css"; // අ앱යේ main CSS styles import කරයි
import Favourite from "./pages/Favourite"; // Favorites page component import කරයි
import Home from "./pages/Home"; // Home page component import කරයි
import { Routes, Route } from "react-router-dom"; // route definitions සඳහා library import කරයි
import { MovieProvider } from "./context/MovieContext"; // movie data access සඳහා provider import කරයි
import NavBar from "./components/NavBar"; // top navigation bar component import කරයි

function App() {
  // main app component එක ආරම්භ කරයි

  return (
    <MovieProvider>
      {" "}
      {/* movie context/provider එක සියලු component වෙත ලබා දෙයි */}
      <NavBar /> {/* navigation bar component render කරයි */}
      <main className="main-content">
        {" "}
        {/* main content area එක */}
        <Routes>
          {" "}
          {/* page routes define කරයි */}
          <Route path="/" element={<Home />} />{" "}
          {/* root path එකේ Home page open වෙයි */}
          <Route path="/favourite" element={<Favourite />} />{" "}
          {/* favorite page path එක */}
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
