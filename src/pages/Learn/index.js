import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Learn() {
  const array = [
    {
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/try_0_vnd-2d3e28a3f1b9-1665737721928-K92Ii4J6.png?v=0",
    },
    {
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/try_0_vnd-2d3e28a3f1b9-1665737721928-K92Ii4J6.png?v=0",
    },
    {
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/try_0_vnd-2d3e28a3f1b9-1665737721928-K92Ii4J6.png?v=0",
    },
    {
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/try_0_vnd-2d3e28a3f1b9-1665737721928-K92Ii4J6.png?v=0",
    },
    {
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/try_0_vnd-2d3e28a3f1b9-1665737721928-K92Ii4J6.png?v=0",
    },
    {
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/try_0_vnd-2d3e28a3f1b9-1665737721928-K92Ii4J6.png?v=0",
    },
  ];
  return (
    <div className="p-24 bg-[#f4f6f8]">
      <div>
        {" "}
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
          className=" w-full h-[230px] flex justify-center items-center rounded-[36px] mt-9 mySwiper "
        >
          <SwiperSlide className="">
            <img
              className="w-full h-full"
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_assets/chcv_1376x237-ee2e8ba9b28f-1655977857439-DcMgmKkn.png?v=0&maxW=1920&format=webp"
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-full h-full"
              src=" https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_assets/2752x474-d53ccd213efe-1667795615373-tb09A2XX.png?v=0&maxW=1920&format=webp"
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-full h-full"
              src=" https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_assets/1376x237-b6c0b519f394-1661847841751-4IlNE6FT.png?v=0&maxW=1920&format=webp"
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-full h-full"
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_assets/1376_x_237-649653a35a8c-1666583222006-TWYlKj5O.jpg?v=0&maxW=1920"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex justify-center -mt-4 overflow-hidden ">
        <div className="w-[908px] h-auto flex flex-col py-6 px-8 z-10 rounded-[36px] bg-white">
          <h1
            tag="h1"
            className="mt-0 text-4xl font-bold text-center mb-4 text-[#4dbdc8]"
          >
            Các khóa học trực tuyến đa dạng
          </h1>
          <div className="py-3 flex flex-wrap justify-center">
            {array.map((element) => {
              return (
                <a
                  className=" text-center mb-8 mx-4 "
                  title=""
                  href="/subject/uu-dai-634545887b72fa0059a2ebce"
                >
                  <picture className="flex justify-center">
                    <img
                      className="border rounded-full p-1 border-[#4dbdc87a]  "
                      width={64}
                      src={element.img}
                    ></img>
                  </picture>

                  <p tag="p" className="mt-4 text-xl font-normal ">
                    Học Thử 0 Đồng
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
