import { Link } from "react-router-dom";

const Navbar = ({ isVisible, toggleNav }) => {
  return (
    <div className="nav-wrapper">
      <button
        className="nav-toggle"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        ☰ Menu
      </button>
      <section className={`nav-section ${isVisible ? "show" : "hide"}`}>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/popular-articles">Popular articles</Link>
            </li>
            <li>
              <Link to="/all-articles">All Articles</Link>
            </li>
            <li>
              <Link to="/all-topics">All Topics</Link>
            </li>
            <li>
              <Link to="/all-users">Users</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};
export default Navbar;
