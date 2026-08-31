import { createContext, useState, useContext, useEffect } from "react"; // React context සහ state hooks import කරයි

const MovieContext = createContext(); // movie data සහ functions සඳහා context එක initialize කරයි

export const useMovieContext = () => useContext(MovieContext); // component එකට context value access කරන helper function

export const MovieProvider = ({ children }) => {
  // provider component: child components වෙත movie data ලබා දෙයි

  const [favourites, setFavourites] = useState([]); // favorite movies list state එක

  useEffect(() => {
    // page refresh/gin ඇත්නම් browser storage එකෙන් favorites read කරනවා
    const storedFavs = localStorage.getItem("favourites"); // browser memory එකේ favourites key එක ලබා ගනී

    if (storedFavs) setFavourites(JSON.parse(storedFavs)); // stored data තිබේ නම් parse කර state එකට set කරයි
  }, []);

  useEffect(() => {
    // favorites list වෙනස් වූ විට browser storage එකට save කරයි
    localStorage.setItem("favourites", JSON.stringify(favourites)); // current favorites array JSON format with save කරයි
  }, [favourites]);

  const addToFavourites = (movie) => {
    // movie එක favorites list එකට add කරන function
    setFavourites((prev) => [...prev, movie]); // old list එකට නව movie එක append කරයි
  };

  const removeFromFavourites = (movieId) => {
    // favorite list එකෙන් movie එක remove කරන function
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId)); // id match නොවන movie පමණක් filter කරයි
  };

  const isFavourite = (movieId) => {
    // given movie id එක favorites list එකේ තිබේදැයි check කරන function
    return favourites.some((movie) => movie.id === movieId); // list එකේ matching id තියේ නම් true return කරයි
  };

  const value = {
    // provider වෙත ලබා දෙන object
    favourites, // current favourite movies array
    addToFavourites, // add function
    removeFromFavourites, // remove function
    isFavourite, // check function
  };

  return (
    <MovieContext.Provider value={value}>
      {" "}
      // context provider එක return කරයි
      {children} {/* wrapped child components render කරයි */}
    </MovieContext.Provider>
  );
};
