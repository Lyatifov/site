import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSelector } from "react-redux"

import Dignity from './Dignity/Dignity'

export default function Slider() {

    const presentationSlide = useSelector(state => state.information.presentationSlide)

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop='true'
            pagination={{
                clickable: true
            }}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }}
        >
            {
                presentationSlide.map(item =>
                    <SwiperSlide>
                        <Dignity item={item} />
                    </SwiperSlide>

                )

            }

        </Swiper >
    );




    // return (




    //     <div className="swiper">

    //         <div className="swiper-wrapper">
    //             <div className="swiper-slide">
    //                 <img src={img_1} alt="" />
    //             </div>
    //             <div className="swiper-slide">
    //                 <img src={img_2} alt="" />
    //             </div>
    //             <div className="swiper-slide">
    //                 <img src={img_1} alt="" />
    //             </div>
    //         </div>

    //         <div className="swiper-pagination"></div>


    //         <div className="swiper-button-prev"></div>
    //         <div className="swiper-button-next"></div>


    //         {/* <div className="swiper-scrollbar"></div> */}
    //     </div>
    // )
}
