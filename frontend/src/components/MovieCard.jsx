import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {

    const {addToFavourites, removeFromFavourites, isFavourite} = useMovieContext()
    const favourite = isFavourite(movie.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
        else addToFavourites(movie)
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h3>{movie.release_date?.split("-")[0]}</h3>
            </div>
        </div>
    )
}

export default MovieCard