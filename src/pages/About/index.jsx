import { Swiper, SwiperSlide } from 'swiper/react';
import './Style.css'
// Import Swiper styles
import 'swiper/css';
import AboutImg from '../../assets/about-img.svg'
import ContactImg from '../../assets/contact-img.svg'
import Footer from '../../components/Footer';

function About() {
  return (
  <div>
      <section className="about" id="about">

<div className="row">

   <div className="image">


   <Swiper
   spaceBetween={50}
   slidesPerView={1}
   loop={true}
   autoplay
   
 >
   <SwiperSlide  className='about-slider-img'>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?</p>
   </div>

</div>

</section>


<section>
  


<div className="contact-row">

<div className="contact-image">
   <img src={ContactImg} alt="" />
</div>

<form action="" method="post">
   <span>your name</span>
   <input type="text" required placeholder="enter your full name"  name="name" className="box" />
   <span>your email</span>
   <input type="email" required placeholder="enter your valid email"  name="email" className="box" />
   <span>your number</span>
   <input type="number" required placeholder="enter your valid number" max="9999999999" min="0" name="number" className="box"  />
   
   
   <input type="submit" value="send message" className="btn" name="send"/>
</form>

</div>



</section>
<Footer/>
  </div>





  )
}

export default About