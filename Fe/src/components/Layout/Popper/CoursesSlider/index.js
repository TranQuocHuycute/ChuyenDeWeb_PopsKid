import React from "react";
import { SwiperSlidse } from "../../../../pages/Learn/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
function CourcesSlider({children}) {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className=" w-full h-[295px] md:h-[230px] flex justify-center items-center md:rounded-[36px] mt-9 mySwiper "
        >
          {SwiperSlidse.map((i) => {
            return (
              <SwiperSlide className="">
                <picture>
                  <source media="(min-width: 768px)" srcSet={i.imgmd}></source>
                  <source media="(min-width: 640px)" srcSet={i.imgmb}></source>
                  <img className="w-full h-full" src={i.imgmd}></img>
                </picture>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className=" mx-4 md:w-full flex justify-center -mt-8 md:-mt-4 overflow-hidden ">
        {children}
      </div>
    </div>
  );
}

export default CourcesSlider;
