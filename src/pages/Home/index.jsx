import './Style.css'
import HomeImg from '../../assets/homg-img.svg'
import { Link } from 'react-router-dom'


import CourseOne from '../../assets/course-1.svg'
import coursesCards from '../../mocks/coursesList'

// import { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import teachersList from '../Teachers/teachersList'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';



import { FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import ChooseUs from '../About/chooseUs';
import Counter from './count'
import Heading from '../../components/Headings/headings'


function Home() {
   SwiperCore.use([Autoplay])

  
   return (

      <div>
         <section className="home" id="home">

            <div className="row">

               <div className="content">
                  <h3 className='home-title'>Crazy IELTS<span className='home-span'> learning center</span></h3>
                  <Link to={'/contact'} className="btn">contact us</Link>
               </div>

               <div className="image">
                  <img src={HomeImg} alt="studying girl illustration" />
               </div>

            </div>


          
<Counter/>
            <hr className="divider-hr" />
           <ChooseUs/>
            <p className="home-quote">Just Do It!</p>
            <hr className="divider-hr" />

            {/* Courses section */}
            <section className="courses" id="courses">
               <Heading subChildren={'Find your course'} titleChildren={'Our courses'}/>
               <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  loop={true}
                  autoplay
                  
               >
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

               </Swiper>

            </section>

            <hr className="divider-hr" />
{/* Teacher sectinpmon */}
            <section className="teachers">
            <Heading subChildren={'Teachers'} titleChildren={'Learn from Masters'}/>


               <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true }}

                
               >
                  {
                     teachersList.map((teacher) => {

                        return (<SwiperSlide className='slide slide-card'>

                           <div key={teacher.id} className='teacher-card'>
                              <img src={HomeImg} alt="" />
                              <div className="share">
                                 <a href={teacher.tg}><FaTelegramPlane /></a>
                                 <a href={teacher}><FaFacebook /></a>
                                 <a href={teacher.insta}><FaInstagram /></a>
                              </div>
                              <h3>{teacher.title}</h3>
                           </div>
                           ...
                        </SwiperSlide>
                        )
                     })
                  }

               </Swiper>
            </section>
            <hr className="divider-hr" />
         </section>
         <Footer />
      </div>
   )
}

export default Home