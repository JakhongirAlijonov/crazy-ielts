import './Style.css'
import coursesCards from '../../mocks/coursesList'
import Footer from '../../components/Footer/index'
import CourseOne from '../../assets/course-1.svg'

import 'swiper/css';
function Courses() {
  return (
    <div>
      
<section className="courses" id="courses">

<h1 className="heading">our <span>courses</span></h1>

<div className="courses-wrapper">
  
{
        coursesCards.map(({title,img, about,cost,teacher})=>{
          
return (
  <div className='slide slide-card'>
              
  <img src={CourseOne} alt="course images" />
  <h3 className='courses-title'>{title}</h3>
  <p>{about}</p>
  <div className="course-details">
  <h2 className='course_teacher'>Teacher: <span className="teacher-span">{teacher}</span></h2>
  <p className="course-cost">{cost}</p>
  </div>
  <a href="https://t.me/jakhongirbek_alijonov" className='enroll_course'>Enroll</a>
          </div>
        )})
      }
     
</div>
    

</section>
<Footer/>
    </div>
  )
}

export default Courses