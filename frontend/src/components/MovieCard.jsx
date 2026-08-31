import "../css/MovieCard.css"; // movie card stylesheet import කරයි
import { useMovieContext } from "../context/MovieContext"; // favourite functions access for card

function MovieCard({ movie }) {
  // each movie card component initialize කරයි

  const { addToFavourites, removeFromFavourites, isFavourite } =
    useMovieContext(); // context functions get කරයි
  const favourite = isFavourite(movie.id); // current movie favorite status check කරයි

  function onFavouriteClick(e) {
    // favorite button click handler
    e.preventDefault(); // default button behavior block කරයි
    if (favourite)
      removeFromFavourites(movie.id); // already favorite නම් remove කරනවා
    else addToFavourites(movie); // not favorite නම් add කරනවා
  }
  return (
    <div className="movie-card">
      {" "}
      {/* movie card container */}
      <div className="movie-poster">
        {" "}
        {/* poster image area */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />{" "}
        {/* poster image fetch from TMDB */}
        <div className="movie-overlay">
          {" "}
          {/* hover overlay area */}
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            {" "}
            {/* favorite state based class */}♥{" "}
            {/* heart icon for favorite toggle */}
          </button>
        </div>
      </div>
      <div className="movie-info">
        {" "}
        {/* movie details area */}
        <h3>{movie.title}</h3> {/* movie title display */}
        <h3>{movie.release_date?.split("-")[0]}</h3>{" "}
        {/* release year only show කරයි */}
      </div>
    </div>
  );
}

export default MovieCard;
