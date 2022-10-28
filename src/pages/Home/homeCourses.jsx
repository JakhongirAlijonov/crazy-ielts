import './Style.css';
import React from 'react'
import Heading from '../../components/Headings/headings';
import CustomSwiper from '../../components/Swiper';
import CourseOne from '../../assets/course-1.svg';
import coursesCards from '../../mocks/coursesList';
import {SwiperSlide} from 'swiper/react';
function HomeCourses() {
    return (
        <>
         <section className="courses" id="courses">
               <Heading subChildren={'Find your course'} titleChildren={'Our courses'} />
               <CustomSwiper>
                  {
                     coursesCards.map(({ title, img, about, cost, teacher, id }) => {

                        return (<SwiperSlide className='slide slide-card' key={id}>

                           <img src={CourseOne} alt="course images" />
                           <h3 className='courses-title'>{title}</h3>
                           <p>{about}</p>
                           <div className="course-details">
                              <h2 className='course_teacher'>Teacher: <span className="teacher-span">{teacher}</span></h2>
                              <p className="course-cost">{cost}</p>
                           </div>
                           <a href="https://t.me/jakhongirbek_alijonov" className='enroll_course'>Enroll</a>
                        </SwiperSlide>
                        )
                     })
                  }
               </CustomSwiper>

            </section>
        </>
    )
}

export default HomeCourses
