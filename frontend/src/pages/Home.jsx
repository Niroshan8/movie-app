import { useEffect, useState } from "react"; // React hooks import කරයි
import MovieCard from "../components/MovieCard"; // movie card component import කරයි
import { searchMovies, getPopularMovies } from "../services/api"; // API functions import කරයි
import "../css/Home.css"; // Home page style import කරයි

function Home() {
  // Home page component initialize කරයි

  const [searchQuery, setSearchQuery] = useState(""); // user entered search text state
  const [movies, setMovies] = useState([]); // fetched movies list state
  const [error, setError] = useState(null); // error message state
  const [loading, setLoading] = useState(true); // loading state to show spinner/text

  // const movies = [ // sample movie data placeholder (commented out)
  //     { id: 1, title: "John Wick", release_date: "2020" },
  //     { id: 2, title: "Terminator", release_date: "1998" },
  //     { id: 3, title: "The Matrix", release_date: "1999" }
  // ];

  useEffect(() => {
    // page load වූ විට popular movies fetch කරන effect
    const loadPopularMovies = async () => {
      // async function to fetch popular movies
      try {
        // exception handling start
        const popularMovies = await getPopularMovies(); // TMDB API from service call කරයි
        setMovies(popularMovies); // fetched movies state එක update කරයි
      } catch (err) {
        // API failure වුවහොත් catch කරයි
        console.log(err); // error log print කරයි
        setError("Failed to laod movies...."); // user-facing error message set කරයි
      } finally {
        // success/failure දෙකෙන්ම run වන block
        setLoading(false); // loading state false කරයි
      }
    };
    loadPopularMovies(); // load function execute කරයි
  }, []);

  const handleSearch = async (e) => {
    // search form submit handler
    e.preventDefault(); // form default reload block කරයි
    if (!searchQuery.trim()) return; // empty query නම් function stop කරයි
    if (loading) return; // prior loading still running නම් block කරයි

    setLoading(true); // search කිරීම start වූ විට loading show කරයි
    try {
      // try block start
      const searchResults = await searchMovies(searchQuery); // search API call කරයි
      setMovies(searchResults); // search result set to movies state
      setError(null); // previous error clear කරයි
    } catch (err) {
      // search failure handling
      console.log(err); // error log print කරයි
      setError("Failed to search Movies..."); // error message set කරයි
    } finally {
      // finish whether success or failure
      setLoading(false); // loading state false කරයි
    }
  };

  return (
    <div className="home">
      {" "}
      {/* home page main container */}
      <form onSubmit={handleSearch} className="search-form">
        {" "}
        {/* search form with submit handler */}
        <input // text input for movie search
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>{" "}
        {/* search button */}
      </form>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* error message show කරයි */}
      {loading ? (
        <div className="loading">Loading....</div> // loading state නම් message show කරයි
      ) : (
        <div className="movies-grid">
          {" "}
          {/* movie list grid container */}
          {movies.map(
            (
              movie, // movies array එක iterate කර movie card render කරයි
            ) => (
              <MovieCard movie={movie} key={movie.id} /> // each movie data pass to card component
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
