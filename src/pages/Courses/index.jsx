import "./Style.css";
import Footer from "../../components/Footer/index";
import CourseOne from "../../assets/course-1.svg";
import "swiper/css";
import Heading from "../../components/Headings/headings";
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/index'
import { useFetch } from "../../hooks/useFetch";
function Courses() {
  const url = 'http://localhost:3000/coursesCards'
  const {data, isPending ,error} = useFetch(url)
  
  return (
    
    
    <div className="main">
    {isPending && <Loader/> }
    {error && <p className="error">{error}</p> }
      <section className="courses" id="courses">
        <Heading subChildren={"Find your course"} titleChildren={"Courses"} />

        <div className="courses-wrapper">
          {data && 
            data.map(({ title, img, about, cost, teacher, id }) => {
            return (
              <div className="slide slide-card">
                <img src={CourseOne} alt="course images" />
                <h3 className="courses-title">{title}</h3>
                <p>{about}</p>
                <div className="course-details">
                  <h2 className="course_teacher">
                    Teacher: <span className="teacher-span">{teacher}</span>
                  </h2>
                  <p className="course-cost">{cost}</p>
                </div>
                <div className="card-links-wrapper">
                  <a
                    href="https://t.me/jakhongirbek_alijonov"
                    className="btn"
                  >
                    Enroll
                  </a>
                  <Link to={`/course/${id}`} className='more-courses btn'>More about course</Link>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Courses;
