import "../css/Favourite.css"; // favorite page style import කරයි
import { useMovieContext } from "../context/MovieContext"; // favorite data access for context imports
import MovieCard from "../components/MovieCard"; // movie card component import කරයි

function Favourite() {
  // favorites page component initialize කරයි
  const { favourites } = useMovieContext(); // context එකෙන් favorite movies list ලබා ගනී

  if (favourites) {
    // favorites list empty නොවී තිබේ නම් render කරයි
    return (
      <div className="favorites">
        {" "}
        {/* favorites page wrapper */}
        <h2>Your Favourites</h2> {/* page title */}
        <div className="movies-grid">
          {" "}
          {/* favorite movie cards grid */}
          {favourites.map(
            (
              movie, // each favorite movie iterate කරයි
            ) => (
              <MovieCard movie={movie} key={movie.id} /> // each favorite movie card render කරයි
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      {" "}
      {/* favorite list empty නම් view */}
      <h2>No Favorite Movies Yet</h2> {/* empty state title */}
      <p>
        Start adding movies to your favorites and they will appear here!
      </p>{" "}
      {/* empty state instruction */}
    </div>
  );
}

export default Favourite;
