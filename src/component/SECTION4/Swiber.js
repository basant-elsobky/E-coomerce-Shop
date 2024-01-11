
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Cards from './Cards'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import d1 from '../../images/1.webp'
import d2 from '../../images/d4.webp'
import d3 from '../../images/d3.webp'
import d4 from '../../images/d4.webp'
import d5 from '../../images/d5.webp'
import d6 from '../../images/d6.webp'
import d7 from '../../images/d7.webp'
import d8 from '../../images/d8.webp'
export default function App() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 90,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Cards image={d2} title='silver high neck sweater' price='$210.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d3} title='yello casual sweater' price='$110.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d4} title='denim blue jeans' price='$140.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d5} title='black white sweater' price='$180.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d6} title='gray overcoat women' price='$110.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d7} title='womens fashion' price='$140.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d8} title='nike red' price='$210.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d1} title='north star blue' price='$110.00'/></SwiperSlide>
                <SwiperSlide><Cards image={d5} title='silver high neck sweater' price='$22.0'/></SwiperSlide>
            </Swiper>
        </>
    );
}
