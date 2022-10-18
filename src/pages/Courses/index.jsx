import './Style.css'
import coursesCards from './coursesList'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import CourseOne from '../../assets/course-1.svg'

import 'swiper/css';
function Courses() {
  return (
    
<section className="courses" id="courses">

<h1 className="heading">our <span>courses</span></h1>

<Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      autoplay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        coursesCards.map(({title,img, about,cost,teacher})=>{
          
return (<SwiperSlide className='slide slide-card'>
              
  <img src={CourseOne} alt="course images" />
  <h3 className='courses-title'>{title}</h3>
  <p>{about}</p>
  <div className="course-details">
  <h2 className='course_teacher'>Teacher: <span className="teacher-span">{teacher}</span></h2>
  <p className="course-cost">{cost}</p>
  </div>
  <a href="https://t.me/jakhongirbek_alijonov" className='enroll_course'>Enroll</a>
          </SwiperSlide>
        )})
      }
     
    </Swiper>

</section>
  )
}

export default Courses