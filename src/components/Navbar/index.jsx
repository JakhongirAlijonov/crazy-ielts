import { Link } from "react-router-dom";
import "./Style.css";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";

function Navbar() {
const [nav , setNav] = useState(false)



  return (
    <div>
      <header className="header">
        <section className="flex">
          <Link className="logo" to="/">Logo</Link>
          <nav className='nav'  >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/books">Books</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <GiHamburgerMenu className="hamburger" onClick={()=>setNav(true)}/>
          
        </section>
      </header>
    </div>
  );
}

export default Navbar;
