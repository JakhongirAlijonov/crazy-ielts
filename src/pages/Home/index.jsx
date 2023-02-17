import './Style.css'
import HomeImg from '../../assets/homg-img.svg'
import { Link } from 'react-router-dom'
import CourseOne from '../../assets/course-1.svg'
import Footer from '../../components/Footer';
import teachers from '../../mocks/teachersMock'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import SwiperCore from 'swiper';
import { useFetch } from '../../hooks/useFetch'
import { FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import ChooseUs from '../About/chooseUs';
import Counter from './count'
import Heading from '../../components/Headings/headings'
import Loader from '../../components/Loader';
import HomeContact from './HomeContact';

function Home() {
   SwiperCore.use([Autoplay])
   const url = 'http://localhost:3000/coursesCards'
   const {data, isPending ,error} = useFetch(url)
  
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
            <section className="courses homeCourseWrapper" id="courses">
            {isPending && <Loader/>}
      {error && <p className="error">Not found</p> }
               <Heading subChildren={'Find your course'} titleChildren={'Our courses'}/>
               <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  loop={true}
                  autoplay
                  
               >
                  {
                    data &&  data.map(({ title, img, about, cost, teacher, id }) => {

                        return (<SwiperSlide className='slide slide-card homeCourse' key={id}>

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
                     teachers.map((teacher) => {

                        return (<SwiperSlide className='slide slide-card'>

                           <div key={teacher.id} className='teacher-card'>
                              <img src={teacher.img} alt="" />
                              <div className="share">
                                 <a href={teacher.telegram}><FaTelegramPlane /></a>
                                 <a href={teacher.facebook}><FaFacebook /></a>
                                 <a href={teacher.instagram}><FaInstagram /></a>
                              </div>
                              <h3>{teacher.name}</h3>
                           </div>
                           ...
                        </SwiperSlide>
                        )
                     })
                  }

               </Swiper>
            </section>
            <hr className="divider-hr" />
            <HomeContact/>
         </section>
         <Footer />
      </div>
   )
}

export default Home