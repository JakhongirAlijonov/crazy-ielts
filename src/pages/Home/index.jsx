import './Style.css';
import HomeImg from '../../assets/homg-img.svg';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import teachersList from '../Teachers/teachersList';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import ChooseUs from '../About/chooseUs';
import Counter from './count';
import Heading from '../../components/Headings/headings';
import CustomSwiper from '../../components/Swiper';
import HomeCourses from './homeCourses';


function Home() {


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



            <Counter />
            <hr className="divider-hr" />
            <ChooseUs />
            <p className="home-quote">Just Do It!</p>
            <hr className="divider-hr" />

            {/* Courses section */}
            <HomeCourses/>

            <hr className="divider-hr" />
            {/* Teacher sectinpmon */}
            <section className="teachers">
               <Heading subChildren={'Teachers'} titleChildren={'Learn from Masters'} />

               <CustomSwiper>
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
               </CustomSwiper>

            </section>
            <hr className="divider-hr" />
         </section>
         <Footer />
      </div>
   )
}

export default Home