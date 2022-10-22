import './Style.css'
import HomeImg from '../../assets/homg-img.svg'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaSmile } from 'react-icons/fa';
import AboutImg from '../../assets/about-img.svg'

import CourseOne from '../../assets/course-1.svg'
import coursesCards from '../Courses/coursesList'

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


function Home() {
   SwiperCore.use([Autoplay])

   const incrementBox = [
      {
         target: '10+',
         title: 'courses',
         icon: <FaGraduationCap className='icon-box' />,
      },
      {
         target: '500+',
         title: 'students',
         icon: <FaChalkboardTeacher className='icon-box' />,

      },
      {
         target: '10+',
         title: 'teachers',
         icon: <FaUserGraduate className='icon-box' />

      },
      {
         target: '100%',
         title: 'satisfaction',
         icon: <FaSmile className='icon-box' />
      },
   ]
   return (

      <div>
         <section className="home" id="home">

            <div class="row">

               <div className="content">
                  <h3 className='home-title'>Crazy IELTS<span className='home-span'> learning center</span></h3>
                  <Link to={'/contact'} class="btn">contact us</Link>
               </div>

               <div className="image">
                  <img src={HomeImg} alt="studying girl illustration" />
               </div>

            </div>


            <section className="count">
               <div className="box-container">
                  {
                     incrementBox.map((box) => {
                        return (
                           <div className="box">
                              <div className="counter-box">{box.icon}</div>
                              <div className="content">
                                 <h3 className='counter' data-target="10">{box.target}</h3>
                                 <p>{box.title}</p>
                              </div>
                           </div>
                        )
                     })
                  }


               </div>
            </section>

            <hr className="divider-hr" />
            <section>
               <>
                  <div className="row">
                     <div className="image">
                        <Swiper
                           spaceBetween={50}
                           slidesPerView={1}
                           loop={true}
                           autoplay
                        >
                           <SwiperSlide className='about-slider-img'>
                              <img src={AboutImg} alt="" />

                           </SwiperSlide>
                           <SwiperSlide className='about-slider-img slider-text'>
                              <h1 className='about-slite-title'>Who we are ?</h1>
                              <p className='about-slite-text'>We are a growing professional team of great teachers. We have been helping nearly <span className="highlighted">1000 students</span> to get at least <span className='highlighted'>5.5 IELTS</span> score by teaching English professionally. Our team is made up of great professionals who are confident in their pursuit of continuous improvement</p>

                           </SwiperSlide>
                           <SwiperSlide className='about-slider-img'>
                              <img src={AboutImg} alt="" />

                           </SwiperSlide>
                           <SwiperSlide className='about-slider-img'>
                              <img src={AboutImg} alt="biz haqimizda" />

                           </SwiperSlide>
                           ...
                        </Swiper>





                     </div>

                     <div className="content">
                        <h3 className='about-title'>why choose us?</h3>
                        <p className='about-slite-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?</p>
                        <a href="#contact" class="btn">contact us</a>
                     </div>

                  </div>
               </>
            </section>

            <p className="home-quote">Just Do It!</p>
            <hr className="divider-hr" />

            {/* Courses section */}
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
                     coursesCards.map(({ title, img, about, cost, teacher }) => {

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
                        )
                     })
                  }

               </Swiper>

            </section>

            <hr className="divider-hr" />
{/* Teacher sectinpmon */}
            <section className="teachers">
               <h1 className="heading">
                  expert <span>tutors</span>
               </h1>

               <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true }}

                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
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