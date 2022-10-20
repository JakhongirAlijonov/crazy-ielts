import "./Style.css";
import "../About/Style.css"
import HomeImg from "../../assets/homg-img.svg";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSmile,
} from "react-icons/fa";
import About from "../About";
import {Courses} from "../Courses";
import { useEffect, useState } from "react";
import Teachers from "../Teachers";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AboutImg from '../../assets/about-img.svg'


function Home() {
  const incrementBox = [
    {
      target: 10,
      title: "courses",
      icon: <FaGraduationCap className="icon-box" />,
    },
    {
      target: 500,
      title: "students",
      icon: <FaChalkboardTeacher className="icon-box" />,
    },
    {
      target: 10,
      title: "teachers",
      icon: <FaUserGraduate className="icon-box" />,
    },
    {
      target: 100,
      title: "satisfaction",
      icon: <FaSmile className="icon-box" />,
    },
  ];
  // const [count,setCount] = useState(0)
  // incrementBox.forEach(function(increment) {
  //   useEffect(() => {
  //     const timer = () => {
  //        setCount(count+1)
  //     };
  //     if (count >= increment.target) {
  //       return;
  //     }
  //     const id = setInterval(timer, 0.01);
  //     return () => clearInterval(id);
  //   }, [count]);
  // });

  return (
    <section className="home" id="home">
      <div class="row">
        <div className="content">
          <h3 className="home-title">
            Crazy IELTS<span className="home-span"> learning center</span>
          </h3>
          <Link to={"/contact"} class="btn">
            contact us
          </Link>
        </div>

        <div className="image">
          <img src={HomeImg} alt="studying girl illustration" />
        </div>
      </div>

      <section className="count">
        <div className="box-container">
          {incrementBox.map((box) => {
            return (
              <div className="box">
                <div className="counter-box">{box.icon}</div>
                <div className="content">
                  <h3 className="counter" data-target="10">
                    {box.target}
                  </h3>
                  <p>{box.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="about" id="about">
        <div className="row">
          <div className="image">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={true}
            >
              <SwiperSlide className="about-slider-img">
                <img src={AboutImg} alt="" />
              </SwiperSlide>
              <SwiperSlide className="about-slider-img slider-text">
                <h1 className="about-slite-title">Who we are ?</h1>
                <p className="about-slite-text">
                  We are a growing professional team of great teachers. We have
                  been helping nearly{" "}
                  <span className="highlighted">1000 students</span> to get at
                  least <span className="highlighted">5.5 IELTS</span> score by
                  teaching English professionally. Our team is made up of great
                  professionals who are confident in their pursuit of continuous
                  improvement
                </p>
              </SwiperSlide>
              <SwiperSlide className="about-slider-img">
                <img src={AboutImg} alt="" />
              </SwiperSlide>
              <SwiperSlide className="about-slider-img">
                <img src={AboutImg} alt="biz haqimizda" />
              </SwiperSlide>
              ...
            </Swiper>
          </div>

          <div className="content">
            <h3 className="about-title">why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quibusdam magni error, aut enim rerum?
            </p>
            <a href="#contact" class="btn">
              contact us
            </a>
          </div>
        </div>
       <div className="quote">Don't be lazy start today , not tomorrow!!!</div>
      </section>





      <Courses />
      <Teachers />
    </section>
  );
}

export default Home;
