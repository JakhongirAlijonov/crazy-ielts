import "./App.css";
import {  BrowserRouter as Router ,Route ,Routes } from 'react-router-dom'

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Teachers from "./pages/Teachers";
import Books from "./pages/Books";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

const App = () => {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/books" element={<Books />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
