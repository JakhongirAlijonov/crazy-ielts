import './Style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';
import ReviewsList from '../../mocks/reviewCard';

function StudentReview() {
    SwiperCore.use([Autoplay])
  return (
    <div>
     <h1 class="heading">
          Students <span>Reviews</span>
        </h1>
        <Swiper
                  spaceBetween={40}
                  slidesPerView={2}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true }}

                  
               >
                  {
                    ReviewsList.map(({user, img, review})=>{
                        return <SwiperSlide className='slide '>

<div  className='reviews-card'>
   <img src={img} alt="" />
   <div className="review-content">
       <h2 className="review-title">{user}</h2>
       <p className="review-text">{review}</p>
   </div>
</div>

</SwiperSlide>
                    })
                  }

               </Swiper>
    </div>
  )
}

export default StudentReview