import filtersCards from "../../mocks/filtersCards";
import ReviewHeroImg from "../../assets/reviews.svg";
import './Style.css'

function Filter() {
  return (
    <div>
         <div className="review-filter">
        <ul className="filter-list">
          <li className="filter-item">Filter:</li>
          <li className="filter-item filter-active">All </li>
          <li className="filter-item">IELTS scores</li>
          <li className="filter-item">CEFR scores</li>
          <li className="filter-item">Top scores</li>
        </ul>
      </div>

      <div className="fiter-cards">
        {filtersCards.map(
          ({ body, title, overall, listening, reading, writing, speaking }) => {
            return (
              <div className="filter-card">
                <img src={ReviewHeroImg} alt="" />
                <h2 className="card-title">{title}</h2>
                <span className="score over"><p>Overall:</p>{overall}</span>

                <div className="score-wrapper">
                <span className="score"><p>Listening:</p>{listening}</span>
                <span className="score"><p>Reading:</p>{reading}</span>
                <span className="score"><p>Writing:</p>{writing}</span>
                <span className="score"><p>Speaking:</p>{speaking}</span>
                </div>
                
              </div>
            );
          }
        )}
      </div>
    </div>
  )
}

export default Filter