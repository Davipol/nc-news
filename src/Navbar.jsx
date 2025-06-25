import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav-section">
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
          <li>Users</li>
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;
