import React from "react";
import "./Style.css";
import BooksImg from '../../assets/books-hero.svg'
import Footer from "../../components/Footer";
function Books() {
  return (
    <div>
      <section className="books">
        <div className="books-hero">
          <div className="content">
            <h3 className="home-title">
              Books <span className="home-span"> we made</span>
            </h3>
          </div>
          <img src={BooksImg} alt="Books hero " />
        </div>
        <div className="books-cards">
          <div className="books-card">
            <img src={BooksImg} alt="" />
            <div className="book-content">
              <h1 className="book-title">
                Name of a book
              </h1>
              <p className="about-book">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam iusto fugiat labore laudantium aut dolore aliquid nisi architecto molestias. Omnis rem beatae placeat soluta dolorum, corrupti quas sapiente voluptate id?
              </p>
              <p className="book-cost"> <span>Cost:</span> 50 000 UZS</p>
            </div>
          </div>
          <div className="books-card">
            <div className="book-content">
              <h1 className="book-title">
                Name of a book
              </h1>
              <p className="about-book">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam iusto fugiat labore laudantium aut dolore aliquid nisi architecto molestias. Omnis rem beatae placeat soluta dolorum, corrupti quas sapiente voluptate id?
              </p>
              <p className="book-cost"> <span>Cost:</span> 50 000 UZS</p>
            </div>
            <img src={BooksImg} alt="" />

          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Books;
