import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';
import './Style.css';

function CustomSwiper({children}) {
    SwiperCore.use([Autoplay])
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay
            >
             {children}   
                 
            </Swiper>
        </>
    )
}

export default CustomSwiper
