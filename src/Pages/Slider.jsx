import React from "react";
import img1 from "../assets/medicine-01.jpg";
import img2 from "../assets/medicine-02.jpg";
import img3 from "../assets/medicine-03.jpg";
import img4 from "../assets/medicine-04.jpg";
import img5 from "../assets/medicine-05.jpg";
import img6 from "../assets/medicine-06.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="h-[80vh] w-full object-cover rounded" src={img6} />
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-2xl text-red-700">hello</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[80vh] w-full object-cover rounded" src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[80vh] w-full object-cover rounded" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[80vh] w-full object-cover rounded" src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[80vh] w-full object-cover rounded" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[80vh] w-full object-cover rounded" src={img5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
