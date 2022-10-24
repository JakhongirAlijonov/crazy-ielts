import "./Style.css";
import ReviewHeroImg from "../../assets/reviews.svg";
import Footer from '../../components/Footer'
import Filter from "./filterScores";
import StudentReview from "./studentReview";

function Reviews() {
  return (
    <div>
      <section class="reviews" id="reviews">
      <div className="review-hero">
        <h1 class="heading">
          What others think <span>about us</span>
        </h1>
        <img src={ReviewHeroImg} alt="" />
      </div>
      <hr className="divider-hr" />
     <Filter/>
     <hr className="divider-hr" />
     <StudentReview/>
    </section>
    <Footer/>
    </div>
  );
}

export default Reviews;
