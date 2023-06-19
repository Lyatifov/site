import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSelector } from "react-redux";

import Dignity from "./Dignity/Dignity";

export default function Slider() {
    const presentationSlide = useSelector(
        (state) => state.information.presentationSlide
    );

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop="true"
            pagination={{
                clickable: true,
            }}
        >
            {presentationSlide.map((item, index) => (
                <SwiperSlide key={index}>
                    <Dignity item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
