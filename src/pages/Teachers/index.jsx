import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Style.css'
import { FaFacebook , FaInstagram, FaTelegramPlane} from 'react-icons/fa';

// Import Swiper styles
import teachersList from './teachersList'
import 'swiper/css';
function Teachers() {
  return (
 
      <section className="teachers" id="teachers">
        <h1 className="heading">
          expert <span>tutors</span>
        </h1>

        
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
autoplay      
      pagination={{ clickable: true }}
     
      className="swiper teachers-slider"
    >
{
  teachersList.map((teacher)=>{
    return (
      <SwiperSlide key={teacher.id} className='slide'>
      <img src={teacher.img} alt="" />
            <div className="share">
            <a href={teacher.tg}><FaTelegramPlane/></a>
            <a href={teacher.facebook}><FaFacebook/></a>
            <a href={teacher.insta}><FaInstagram/></a>
            </div>
            <h3>{teacher.title}</h3>
      </SwiperSlide>
    )
  })
}

      ...
    </Swiper>
      </section>
  );
}

export default Teachers;
