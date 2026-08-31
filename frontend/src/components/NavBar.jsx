import { Link } from "react-router-dom"; // route navigation link component import කරයි
import "../css/NavBar.css"; // navbar styling import කරයි

function NavBar() {
  // navigation bar component initialize කරයි
  return (
    <div className="navbar">
      {" "}
      {/* top navbar wrapper */}
      <div className="navbar-brand">
        {" "}
        {/* app logo/name area */}
        <Link to="/">Movie App</Link> {/* home page link with app name */}
      </div>
      <div className="navbar-links">
        {" "}
        {/* menu links area */}
        <Link to="/" className="nav-link">
          Home
        </Link>{" "}
        {/* home page navigation link */}
        <Link to="/favourite" className="nav-link">
          Favourites
        </Link>{" "}
        {/* favorites page navigation link */}
      </div>
    </div>
  );
}

export default NavBar;
