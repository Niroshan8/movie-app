import "../css/Favourite.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard"

function Favourite() {
    const { favourites } = useMovieContext();

    if (favourites) {
        return (
            <div className="favorites">
                <h2>Your Favourites</h2>
                <div className="movies-grid">
                    {favourites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
    );
}

export default Favourite