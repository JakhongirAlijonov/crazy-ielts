import { Link } from "react-router-dom";
import "./Style.css";
function Navbar() {
  return (
    <div>
      <header className="header">
        <section className="flex">
          <Link className="logo" to="/">Logo</Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/books">Books</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </section>
      </header>
    </div>
  );
}

export default Navbar;
