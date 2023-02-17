import "./Style.css";
import AboutImg from "../../assets/about-img.svg";
import CenterRoom1  from '../../assets/center-room-1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore from "swiper";
import Heading from "../../components/Headings/headings";
function CrazyGallery() {
  SwiperCore.use([Autoplay]);

  return (
    <div>
      <Heading subChildren={'Our rooms'} titleChildren={'Our amazing rooms'}/>

      <div className="gallery-wrapper">
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}>
              <SwiperSlide className='slide slide-card homeCourse' >
                <img src={AboutImg} alt="" />
              </SwiperSlide>
              <SwiperSlide className='slide slide-card homeCourse' >
                <img src={CenterRoom1} alt="img" width={350}  />
              </SwiperSlide>
            </Swiper>
        </div>
        <div className="about-text">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sequi error eaque animi enim iure dicta adipisci necessitatibus beatae, fuga vitae est magnam nisi expedita quae nemo. Nemo nesciunt aut natus expedita, dolor dolores unde! Esse ut eveniet atque expedita enim illum. Incidunt fuga fugiat reiciendis. Sint non, vel tenetur perspiciatis iste fuga? Ut nihil quo obcaecati officia aspernatur modi illo eligendi repudiandae. Doloremque eius ea quae repudiandae illo assumenda eaque reprehenderit corporis. At consectetur optio pariatur voluptas molestiae dolor ratione magni, atque, iure perferendis aperiam cupiditate ad sapiente excepturi modi neque obcaecati. Omnis reiciendis ab quia sapiente labore odit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam molestiae eos esse nihil fuga voluptatum magnam optio ducimus! Placeat culpa modi nihil animi praesentium minima reprehenderit amet commodi iusto aut ex magnam dolores temporibus sint optio mollitia officiis, quia maxime vel saepe in? Eos totam ullam expedita laboriosam! Unde.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, porro voluptas maiores laboriosam nobis fuga debitis nostrum odio animi assumenda officiis ipsam consectetur sit, et incidunt voluptatem velit ratione sunt? Dicta laboriosam vitae odit maiores quod labore nemo debitis maxime harum qui necessitatibus suscipit, numquam fuga ad consequatur velit! Harum itaque, assumenda consequatur numquam asperiores nobis ducimus non totam temporibus explicabo praesentium? Natus numquam nobis praesentium nihil illum dicta perferendis non voluptates mollitia officia! Voluptate temporibus officia odio in, labore ipsa veritatis ipsam unde. Aspernatur beatae non, unde vitae fugiat harum laborum fuga consequatur officiis, corporis est assumenda iure perspiciatis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CrazyGallery;
